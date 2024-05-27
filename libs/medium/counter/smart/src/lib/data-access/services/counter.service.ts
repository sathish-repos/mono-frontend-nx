import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  count: WritableSignal<number> = signal(6);
}
