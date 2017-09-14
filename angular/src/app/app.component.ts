import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  min = 0;
  max = 100;
  value1 = 50;
  value2 = 50;

  onValue1Changed(event: CustomEvent) {
    console.log(event.detail);
    this.value2 = event.detail;
  }

  onValue2Changed(event: CustomEvent) {
    console.log(event.detail);
    this.value1 = event.detail;
  }
}
