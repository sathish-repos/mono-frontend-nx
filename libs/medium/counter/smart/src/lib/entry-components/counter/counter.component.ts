import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../../data-access/services/counter.service';
import { CounterPageComponent} from '@mnx/medium/counter/ui';
@Component({
  selector: 'idc-counter',
  standalone: true,
  imports: [CommonModule, CounterPageComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  private counterService = inject(CounterService);

  count = this.counterService.count;
}
