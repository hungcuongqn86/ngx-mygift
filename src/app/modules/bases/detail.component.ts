import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BasesService} from './bases.service';

@Component({
    selector: 'app-base-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute
        , private basesService: BasesService) {
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.basesService.base.id = params['id'];
            }
        });
    }

    ngOnInit() {
        if (this.basesService.base.id !== null) {
            this.basesService.getBase(this.basesService.base.id)
                .subscribe(base => {
                    this.basesService.base = base.data;
                });
        }
    }

    public backlist() {
        this.router.navigate(['/bases']);
    }
}
