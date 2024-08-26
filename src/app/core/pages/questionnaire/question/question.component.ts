import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Question} from "../../../models/Question";
import {Option} from "../../../models/Option";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  @Input() question: Question | undefined
  @Output() questionAnswered = new EventEmitter<Question>();

  selectOption(option: Option) {
    if (this.question) {
      this.question.options.forEach(opt => opt.setSelected(false)); // Deselect all options
      option.setSelected(true); // Select the chosen option
      this.questionAnswered.emit(this.question); // Emit the updated question
    }
  }
}
