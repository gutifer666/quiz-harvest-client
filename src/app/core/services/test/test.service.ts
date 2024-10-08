import { Injectable } from '@angular/core';
import testJson from '../../../.././/assets/data/test.json';
import {Question} from "../../models/Question";
import {Option} from "../../models/Option";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  test = testJson;
  constructor() { }

  get(): Question[] {
    return this.test.questions.map((q: any) => new Question(
      q.id,
      q.textQuestion,
      q.options.map((o: any) => new Option(o.id, o.textOption, o.correct, o.selected)),
      q.subject,
      q.evaluation
    ));
  }
}
