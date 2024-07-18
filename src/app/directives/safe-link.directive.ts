import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  // We expose the input as 'appSafeLink' to the template but use 'myapp' internally
  queryParam = input('myapp', { alias: 'appSafeLink' });

  // We access to the host element using ElementRef and modify its href attribute
  #hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {}

  onConfirmLeavePage(event: MouseEvent): void {
    const wantsToLeave = confirm('Do you want to leave the app?');

    if (wantsToLeave) {
      const address = this.#hostElementRef.nativeElement.href;
      this.#hostElementRef.nativeElement.href = `${address}?from=${this.queryParam()}`;
      return;
    }
    event.preventDefault();
  }
}
