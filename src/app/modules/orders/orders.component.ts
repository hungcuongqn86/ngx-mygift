import {Component, OnInit, ViewEncapsulation, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';
import {OrdersService} from './orders.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

export interface Base {
    id: number;
    code: string;
    name: string;
    price_base: string;
    price: string;
    description: string;
    img: string;
    status: number;
    delete_f: number;
}

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class OrdersComponent implements OnInit {
    base: Base;
    bases: Base[];
    totalItems = 0;
    modalRef: BsModalRef;

    constructor(public ordersService: OrdersService, private router: Router, private modalService: BsModalService) {

    }

    ngOnInit() {
        this.searchBases();
    }

    pageChanged(event: any): void {
        this.ordersService.search.page = event.page;
        this.searchBases();
    }

    public editBase(id) {
        this.router.navigate([`/orders/${id}`]);
    }

    public deleteBase() {
        if (this.base) {
            this.base.delete_f = 1;
            this.ordersService.editBase(this.base)
                .subscribe(res => {
                    this.searchBases();
                });
        }
    }

    public searchBases() {
        this.ordersService.getBases(this.ordersService.search)
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
