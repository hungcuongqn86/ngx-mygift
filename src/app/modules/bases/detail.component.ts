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
                    if (this.basesService.base.img) {
                        this.basesService.fileRes.status = true;
                        this.basesService.fileRes.data.url = decodeURIComponent(this.basesService.base.img);
                    }
                });
        } else {
            this.basesService.base = {
                id: null, code: null, name: null, price_base: null, price: null
                , description: null, img: null, status: 0
                , cdx: 0, cdy: 0, img_height: 0, img_width: 0, height: 0, width: 0, rotate: 0, curls: '', pulled_oblique: ''
                , colors: ''
                , delete_f: 0
            };
            this.basesService.fileRes = {
                type: '',
                name: '', size: 0, progress: 0
                , data: {url: ''}, message: '', status: false
            };
        }
    }

    public backlist() {
        this.router.navigate(['/bases']);
    }
}
