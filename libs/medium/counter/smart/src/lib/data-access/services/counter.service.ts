import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService{
  count: number = 5;
}