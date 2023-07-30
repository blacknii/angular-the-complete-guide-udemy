import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css'],
})
export class AssignmentThreeComponent {
  isParagraphVisible = false;
  logs = [];

  handleClick() {
    this.isParagraphVisible = !this.isParagraphVisible;
    this.logs.push(`log ${this.logs.length + 1}`);
  }
}
