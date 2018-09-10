import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appCustomColor]'
})
export class CustomColorDirective implements OnInit {

    private _appCustomColor;
    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        if (typeof this._appCustomColor !== 'undefined') {
            this.el.nativeElement.setAttribute("style", `color: ${this._appCustomColor}`);
        }
    }

    @Input() set appCustomColor(val: string) {
        this._appCustomColor = val;
    }

}
