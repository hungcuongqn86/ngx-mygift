import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Base, OrdersService} from './orders.service';
import {backendUrl} from '../../const';

@Component({
    selector: 'app-base-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
    backendUrl: string;
    base: Base;

    constructor(private router: Router, private route: ActivatedRoute
        , private ordersService: OrdersService) {
        this.backendUrl = backendUrl;
        this.base = {id: null, code: null, name: null, price_base: null, price: null, description: null, img: null, status: 0, delete_f: 0};
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.base.id = params['id'];
            }
        });
    }

    ngOnInit() {
        if (this.base.id !== null) {
            this.getBase(this.base.id);
        }
    }

    public getBase(id) {
        this.ordersService.getBase(id)
            .subscribe(base => {
                this.base = base.data;
            });
    }

    public updateBase() {
        if (this.base.id === null) {
            this.ordersService.addBase(this.base).subscribe(
                res => {
                    this.updateSuccess(res);
                }
            );
        } else {
            this.ordersService.editBase(this.base).subscribe(
                res => {
                    this.updateSuccess(res);
                }
            );
        }
    }

    private updateSuccess(res: any) {
        if (res.success) {
            this.backlist();
        }
    }

    public backlist() {
        this.router.navigate(['/orders']);
    }
}
