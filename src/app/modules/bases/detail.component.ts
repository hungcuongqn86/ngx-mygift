import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-base-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {

    }

    public backlist() {
        this.router.navigate(['/bases']);
    }
}
