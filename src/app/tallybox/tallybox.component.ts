import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-tallybox',
  standalone: true,
  imports: [],
  templateUrl: './tallybox.component.html',
  styleUrl: './tallybox.component.css'
})
export class TallyboxComponent {
    count = signal(0);
    increment() {
        this.count.set(this.count() + 1);
    }
    decrement() {
        this.count.set(this.count() - 1);
    }
}
