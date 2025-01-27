import { Component, ElementRef, Input, ViewEncapsulation } from "@angular/core";
import { ButtonBase } from "./button.base";
import { MatRippleModule } from "@angular/material/core";

@Component({
    selector: `
        button[cm-button]
    `,
    standalone: true,
    templateUrl: './button.html',
    styleUrls: [
        './button.scss'
    ],
    host: {
        '[class]': '"cm-button--" + variant',
    },
    encapsulation: ViewEncapsulation.None,
    imports: [
        MatRippleModule,
    ],
})
export class CmButton extends ButtonBase {

    @Input()
    variant: string = 'primary';

    constructor(elementRef: ElementRef) {
        super(elementRef);
    }
}