import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BasesComponent} from './bases.component';
import {DetailComponent} from './detail.component';

const routes: Routes = [
    {
        path: '', component: BasesComponent,
        data: {
            title: 'Phôi'
        }
    },
    {
        path: 'add', component: DetailComponent,
        data: {
            title: 'Thêm phôi mới'
        }
    },
    {
        path: ':id', component: DetailComponent,
        data: {
            title: 'Sửa phôi'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [],
    exports: [RouterModule]
})

export class BasesRoutingModule {
    constructor() {
    }
}
