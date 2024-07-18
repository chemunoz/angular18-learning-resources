import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from '@app/components/auth/auth.model';
import { AuthService } from '@app/components/auth/auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });
  #authService = inject(AuthService);

  // We say to Angular that this directive will use a ng-template element
  #templateRef = inject(TemplateRef);
  // We say to Angular the place in the DOM where the directive is applied
  // In other words, 'ViewContainerRef' gives us access to the content of ng-template
  #viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.#authService.activePermission() === this.userType()) {
        // SHOW ELEMENT
        this.#viewContainerRef.createEmbeddedView(this.#templateRef);
      } else {
        // DO NOT SHOW ELEMENT
        this.#viewContainerRef.clear(); // Remove the element from the DOM
      }
    });
  }
}
