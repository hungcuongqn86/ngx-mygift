import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UploaderService} from '../../uploader.service';

@Component({
    selector: 'app-base-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css'],
    providers: [UploaderService]
})

export class DetailComponent implements OnInit {
    message: string;

    constructor(private router: Router, private uploaderService: UploaderService) {
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
                msg => {
                    input.value = null;
                    this.message = msg;
                }
            );
        }
    }
}
