import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PaginationModule} from 'ngx-bootstrap/pagination';

import {BasesService} from './bases.service';
import {BasesComponent} from './bases.component';
import {DetailComponent} from './detail.component';

import {BasesRoutingModule} from './bases.routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, BasesRoutingModule, PaginationModule.forRoot()],
    declarations: [
        BasesComponent,
        DetailComponent
    ],
    exports: [],
    providers: [BasesService]
})
export class BasesModule {
}
