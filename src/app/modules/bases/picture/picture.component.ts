import {Component} from '@angular/core';
import {UploaderService} from '../../../uploader.service';
import {BasesService} from '../bases.service';
import {backendUrl} from '../../../const';

@Component({
    selector: 'app-base-detail-picture',
    templateUrl: './picture.component.html',
    styleUrls: ['./picture.component.css'],
    providers: [UploaderService]
})

export class PictureComponent {
    backendUrl: string;

    constructor(private uploaderService: UploaderService, public basesService: BasesService) {
        this.backendUrl = backendUrl;
    }

    public onPicked(input: HTMLInputElement) {
        const file = input.files[0];
        if (file) {
            this.uploaderService.upload(file).subscribe(
                res => {
                    if (res.status) {
                        res.data.url = decodeURIComponent(res.data.url);
                        this.basesService.fileRes = res;
                        this.basesService.base.img = res.data.url;
                    }
                }
            );
        }
    }
}
