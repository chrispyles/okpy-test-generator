import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'oktg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ok-test-generator';
  testObject;

  isFormSent = false;

  onGenerateFile(event) {
    this.isFormSent = true;
    this.testObject = event;
  }
}