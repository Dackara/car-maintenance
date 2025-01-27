import { Directive, ElementRef } from "@angular/core";
import { HOST_SELECTOR_CLASS_PAIR } from "./button-selectors";
import { HostSelector } from "./interface";

@Directive()
export abstract class ButtonBase {

  private readonly hostSelectors: HostSelector[] = HOST_SELECTOR_CLASS_PAIR;

  constructor(protected elementRef: ElementRef<HTMLElement>) {
      const element = this.elementRef.nativeElement;

      this.applySelectors(this.hostSelectors, element);
  }

  private applySelectors(selectors: HostSelector[], element: HTMLElement): void {
      selectors.forEach(({attribute, classList}) => {
          if(element.hasAttribute(attribute)) {
              element.classList.add(...classList);
          }
      });
  }
}