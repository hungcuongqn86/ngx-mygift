import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {BasesService} from './bases.service';

@Component({
    selector: 'app-bases',
    templateUrl: './bases.component.html',
    styleUrls: ['./bases.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class BasesComponent implements OnInit {
    totalItems = 64;
    currentPage = 4;

    constructor(public basesService: BasesService, private router: Router) {

    }

    ngOnInit() {

    }


    setPage(pageNo: number): void {
        this.currentPage = pageNo;
    }

    pageChanged(event: any): void {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    }

    public addBase() {
        this.router.navigate(['/bases/add']);
    }
}
