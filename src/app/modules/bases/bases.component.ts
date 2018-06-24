import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {BasesService} from './bases.service';

export interface Base {
    id: number;
    code: string;
    name: string;
    price_base: string;
    price: string;
    description: string;
    img: string;
    status: number;
}

@Component({
    selector: 'app-bases',
    templateUrl: './bases.component.html',
    styleUrls: ['./bases.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class BasesComponent implements OnInit {
    bases: Base[];
    totalItems = 64;
    currentPage = 4;

    constructor(public basesService: BasesService, private router: Router) {

    }

    ngOnInit() {
        this.searchBases();
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

    public editBase(id) {
        this.router.navigate([`/bases/${id}`]);
    }

    public searchBases() {
        this.basesService.getBases(this.basesService.search)
            .subscribe(bases => this.bases = bases.data);
    }
}
