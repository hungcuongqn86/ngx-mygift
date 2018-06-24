import {Component} from '@angular/core';
import {LoadingService} from '../loading.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html'
})
export class MessagesComponent {
    constructor(public loadingService: LoadingService) {
    }

    public showLoading() {
        console.log(this.loadingService.progress);
    }
}
