import {ModuleWithProviders, NgModule} from '@angular/core';
import {MessageDirective} from './messages/message.directive';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {ModalModule} from 'ngx-bootstrap/modal';

@NgModule({
    imports: [PaginationModule.forRoot(), ModalModule.forRoot()],
    declarations: [MessageDirective],
    exports: [MessageDirective, PaginationModule, ModalModule],
    providers: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }

    constructor() {

    }
}
