import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-directives-sample';
  showElement: boolean = true;
  arrayOfElements = [1, 2, 3,];

  onToggleElement() {
    this.showElement = !this.showElement;
  }
  onPushElement() {
    debugger;
    this.arrayOfElements.push(Math.floor(Math.random() * 10))
    this.arrayOfElements = [...this.arrayOfElements];
  }
}
