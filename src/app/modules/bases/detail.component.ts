import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Res, UploaderService} from '../../uploader.service';
import {backendUrl} from '../../const';

@Component({
    selector: 'app-base-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css'],
    providers: [UploaderService]
})

export class DetailComponent implements OnInit {
    fileRes: Res = {name: '', size: 0, progress: 0, data: {}, message: '', status: false};
    backendUrl: string;

    constructor(private router: Router, private uploaderService: UploaderService) {
        this.backendUrl = backendUrl;
    }

    ngOnInit() {

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
                        // input.value = null;
                        this.fileRes = res;
                        console.log(this.fileRes);
                    }
                }
            );
        }
    }
}
