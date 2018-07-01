import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-base-detail-mockup',
    templateUrl: './mockup.component.html',
    styleUrls: ['./mockup.component.css']
})

export class MockupComponent implements OnInit {
    isCollapsed1 = false;
    isCollapsed2 = true;
    isCollapsed3 = true;

    ngOnInit() {
    }
}
