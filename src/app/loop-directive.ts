import {
    Directive,
    ViewContainerRef,
    OnChanges,
    TemplateRef,
    Input,
} from '@angular/core';

@Directive({
    selector: '[appLoop]',
})
export class AppLoopDirective implements OnChanges {
    @Input() appLoopOf: Array<any>;

    constructor(private container: ViewContainerRef,
        private template: TemplateRef<any>,
    ) { }

    ngOnChanges() {
        this.container.clear();
        for (const input of this.appLoopOf) {
            this.container.createEmbeddedView(this.template, {
                $implicit: input,
                index: this.appLoopOf.indexOf(input),
            });
        }
    }
}