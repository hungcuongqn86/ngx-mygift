import {ModuleWithProviders, NgModule} from '@angular/core';
import {MessageDirective} from './messages/message.directive';

@NgModule({
    imports: [],
    declarations: [MessageDirective],
    exports: [MessageDirective],
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
