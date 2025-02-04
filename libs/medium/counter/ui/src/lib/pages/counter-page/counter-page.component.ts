import { Component, InputSignal, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'idc-counter-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.scss',
})
export class CounterPageComponent {
  count: InputSignal<number> = input.required<number>();
}
