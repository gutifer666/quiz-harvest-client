import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {TestService} from "../../services/test/test.service";
import {Question} from "../../models/Question";
import {QuestionComponent} from "./question/question.component";

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [NgForOf, QuestionComponent, NgIf],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.css'
})
export class QuestionnaireComponent {
  test: Question[];
  currentQuestionIndex: number  = 0;

  constructor(testService: TestService) {
    this.test = testService.get();
  }

  updateQuestion(updatedQuestion: Question) {
    const index = this.test.findIndex(q => q.id === updatedQuestion.id);
    if (index !== -1) {
      this.test[index] = updatedQuestion;
    }
    console.log(this.test);
  }
  nextQuestion() {
    if (this.currentQuestionIndex < this.test.length - 1) {
      this.currentQuestionIndex++;
    }
  }
  submitQuestionnaire() {
    console.log('Questionnaire submitted:', this.test);
  }
  isOptionSelected(): boolean {
    return this.test[this.currentQuestionIndex].options.some(option => option.isSelected());
  }

}
