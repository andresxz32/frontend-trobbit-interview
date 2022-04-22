import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: 'autofocus',
})
export class AutoFocusDirective implements AfterViewInit {
    constructor(private _elementRef: ElementRef) {}

    ngAfterViewInit() {
        this._elementRef.nativeElement.focus();
    }
}
