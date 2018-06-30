import {Component} from '@angular/core';
import {Res, UploaderService} from '../../../uploader.service';
import {BasesService} from '../bases.service';
import {backendUrl} from '../../../const';

@Component({
    selector: 'app-base-detail-picture',
    templateUrl: './picture.component.html',
    styleUrls: ['./picture.component.css'],
    providers: [UploaderService]
})

export class PictureComponent {
    fileRes: Res = {
        type: '',
        name: '', size: 0, progress: 0
        , data: {url: ''}, message: '', status: false
    };
    backendUrl: string;

    constructor(private uploaderService: UploaderService, public basesService: BasesService) {
        this.backendUrl = backendUrl;
        if (this.basesService.base.img) {
            this.fileRes.status = true;
            this.fileRes.data.url = decodeURIComponent(this.basesService.base.img);
        }
    }

    public onPicked(input: HTMLInputElement) {
        const file = input.files[0];
        if (file) {
            this.uploaderService.upload(file).subscribe(
                res => {
                    if (res.status) {
                        this.fileRes = res;
                        this.basesService.base.img = res.data.url;
                    }
                }
            );
        }
    }
}
