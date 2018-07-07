import {Component, Input} from '@angular/core';
import {backendUrl} from '../../../const';
import {BasesService, Mockup} from '../bases.service';
import {Res, UploaderService} from '../../../uploader.service';

@Component({
    selector: 'app-base-detail-mockups-mockup',
    templateUrl: './mockup.component.html',
    styleUrls: ['./mockup.component.css'],
    providers: [UploaderService]
})

export class MockupComponent {
    backendUrl: string;
    isCollapsed = false;
    @Input('mockup')
    public mockup: Mockup;

    public fileRes: Res = {
        type: '',
        name: '', size: 0, progress: 0
        , data: {url: ''}, message: '', status: false
    };

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
                        this.fileRes = res;
                        this.mockup.img = res.data.url;
                    }
                }
            );
        }
    }
}
