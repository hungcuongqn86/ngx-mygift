import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Res, UploaderService} from '../../uploader.service';
import {Base, BasesService} from './bases.service';
import {backendUrl} from '../../const';

@Component({
    selector: 'app-base-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css'],
    providers: [UploaderService]
})

export class DetailComponent implements OnInit {
    fileRes: Res = {
        name: '', size: 0, progress: 0
        , data: {url: ''}, message: '', status: false
    };
    backendUrl: string;
    base: Base;

    constructor(private router: Router, private uploaderService: UploaderService
        , private basesService: BasesService) {
        this.backendUrl = backendUrl;
        this.base = {id: null, code: null, name: null, price_base: null, price: null, description: null, img: null, status: 0};
    }

    ngOnInit() {

    }

    public updateBase() {
        if (this.base.id === null) {
            this.basesService.addBase(this.base).subscribe(
                res => {
                    if (res.success) {
                        this.router.navigate(['/bases']);
                    }
                }
            );
        }
    }

    public backlist() {
        this.router.navigate(['/bases']);
    }

    public onPicked(input: HTMLInputElement) {
        const file = input.files[0];
        if (file) {
            this.uploaderService.upload(file).subscribe(
                res => {
                    if (res.status) {
                        this.fileRes = res;
                        this.base.img = res.data.url;
                    }
                }
            );
        }
    }
}
