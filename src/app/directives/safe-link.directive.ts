import { Directive, input } from '@angular/core';

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

  constructor() {}

  onConfirmLeavePage(event: MouseEvent): void {
    const wantsToLeave = confirm('Do you want to leave the app?');

    if (wantsToLeave) {
      const address = (event.target as HTMLAnchorElement).href;
      (
        event.target as HTMLAnchorElement
      ).href = `${address}?from=${this.queryParam()}`;
      return;
    }
    event.preventDefault();
  }
}
