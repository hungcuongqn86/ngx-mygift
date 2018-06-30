import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Res, UploaderService} from '../../../uploader.service';
import {Base, BasesService} from '../bases.service';
import {backendUrl} from '../../../const';

@Component({
    selector: 'app-base-detail-picture',
    templateUrl: './picture.component.html',
    styleUrls: ['./picture.component.css'],
    providers: [UploaderService]
})

export class PictureComponent implements OnInit {
    fileRes: Res = {
        type: '',
        name: '', size: 0, progress: 0
        , data: {url: ''}, message: '', status: false
    };
    backendUrl: string;
    base: Base;

    constructor(private router: Router, private uploaderService: UploaderService, private route: ActivatedRoute
        , private basesService: BasesService) {
        this.backendUrl = backendUrl;
        this.base = {
            id: null, code: null, name: null, price_base: null, price: null
            , description: null, img: null, status: 0
            , cdx: 0, cdy: 0, img_height: 0, img_width: 0, height: 0, width: 0, rotate: 0, curls: '', pulled_oblique: ''
            , colors: ''
            , delete_f: 0
        };
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
        this.basesService.getBase(id)
            .subscribe(base => {
                this.base = base.data;
                if (base.data.img) {
                    this.fileRes.status = true;
                    this.fileRes.data.url = decodeURIComponent(base.data.img);
                }
            });
    }

    public updateBase() {
        if (this.base.id === null) {
            this.basesService.addBase(this.base).subscribe(
                res => {
                    this.updateSuccess(res);
                }
            );
        } else {
            this.basesService.editBase(this.base).subscribe(
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
