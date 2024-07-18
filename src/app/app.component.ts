import { Component, computed, inject } from '@angular/core';

import { AuthComponent } from '@components/auth/auth.component';
import { LearningResourcesComponent } from '@components/learning-resources/learning-resources.component';
import { AuthService } from '@components/auth/auth.service';
import { AuthDirective } from '@directives/auth.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent, AuthDirective],
})
export class AppComponent {
  private autService = inject(AuthService);

  isAdmin = computed(() => this.autService.activePermission() === 'admin');
}
