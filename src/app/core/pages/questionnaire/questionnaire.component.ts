import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {TestService} from "../../services/test/test.service";
import {Question} from "../../models/Question";
import {QuestionComponent} from "./question/question.component";

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [NgForOf, QuestionComponent],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.css'
})
export class QuestionnaireComponent {
  test: Question[];
  constructor(testService: TestService) {
    this.test = testService.get();
  }

  updateQuestion(updatedQuestion: Question) {
    const index = this.test.findIndex(q => q.id === updatedQuestion.id);
    if (index !== -1) {
      this.test[index] = updatedQuestion;
    }
  }
}
