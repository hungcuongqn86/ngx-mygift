import {Directive, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({selector: '[appMessage]'})
export class MessageDirective implements OnChanges {
    @Input('message')
    public message: any;

    constructor(private el: ElementRef) {
    }

    ngOnChanges(changes) {
        if (changes.message) {
            console.log(this.message);
        }
    }
}
