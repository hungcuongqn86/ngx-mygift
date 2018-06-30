import {Component} from '@angular/core';
import {BasesService} from '../bases.service';

@Component({
    selector: 'app-base-detail-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.css']
})

export class InfoComponent {
    constructor(public basesService: BasesService) {
    }

    public updateBase() {
        if (this.basesService.base.id === null) {
            this.basesService.addBase(this.basesService.base).subscribe(
                res => {
                    this.updateSuccess(res);
                }
            );
        } else {
            this.basesService.editBase(this.basesService.base).subscribe(
                res => {
                    this.updateSuccess(res);
                }
            );
        }
    }

    private updateSuccess(res: any) {
        if (res.success) {
            // end loading
        }
    }
}
