import {Component, OnInit, ViewEncapsulation, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';
import {Base, BasesService} from './bases.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-bases',
    templateUrl: './bases.component.html',
    styleUrls: ['./bases.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class BasesComponent implements OnInit {
    base: Base;
    bases: Base[];
    totalItems = 0;
    modalRef: BsModalRef;

    constructor(public basesService: BasesService, private router: Router, private modalService: BsModalService) {

    }

    ngOnInit() {
        this.searchBases();
    }

    pageChanged(event: any): void {
        this.basesService.search.page = event.page;
        this.searchBases();
    }

    public addBase() {
        this.router.navigate(['/bases/add']);
    }

    public editBase(id) {
        this.router.navigate([`/bases/${id}`]);
    }

    public deleteBase() {
        if (this.base) {
            this.base.delete_f = 1;
            this.basesService.editBase(this.base)
                .subscribe(res => {
                    this.searchBases();
                });
        }
    }

    public searchBases() {
        this.basesService.getBases(this.basesService.search)
            .subscribe(bases => {
                this.bases = bases.data.data;
                this.totalItems = bases.data.total;
            });
    }

    openModal(template: TemplateRef<any>, base) {
        this.base = base;
        this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    }

    confirm(): void {
        this.deleteBase();
        this.modalRef.hide();
    }

    decline(): void {
        this.modalRef.hide();
    }
}
