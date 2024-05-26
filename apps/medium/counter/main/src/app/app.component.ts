import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CounterComponent } from '@mnx/medium/counter/smart';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CounterComponent],
  selector: 'idc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'medium-counter-main';
}
