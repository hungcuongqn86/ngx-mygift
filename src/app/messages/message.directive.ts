import {Directive, ElementRef, Input, OnChanges, Output, EventEmitter} from '@angular/core';

@Directive({selector: '[appMessage]'})
export class MessageDirective implements OnChanges {
    @Output()
    public onLoading = new EventEmitter<any>();
    @Input('message')
    public message: any;

    constructor(private el: ElementRef) {
    }

    ngOnChanges(changes) {
        if (changes.message) {
            if (this.message.type) {
                this.onLoading.emit();
            }
        }
    }
}
