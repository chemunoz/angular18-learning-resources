import { Component } from '@angular/core';
import { SafeLinkDirective } from '@app/directives/safe-link.directive';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports: [SafeLinkDirective],
})
export class LearningResourcesComponent {}
