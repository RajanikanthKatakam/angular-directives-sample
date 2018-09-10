import {
    Directive,
    ViewContainerRef,
    OnChanges,
    TemplateRef,
    Input,
} from '@angular/core';

@Directive({
    selector: '[appIf]'
})
export class AppIfDirective implements OnChanges {
    @Input('appIf') ifCondition: boolean;

    constructor(private container: ViewContainerRef,
        private template: TemplateRef<any>,
    ) {
        this.ifCondition = false;
    }

    ngOnChanges() {
        this.container.clear();
        if (this.ifCondition) {
            this.container.createEmbeddedView(this.template);
        }
    }
}