import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';
import {Question} from "../../models/Question";
import {Option} from "../../models/Option";

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of Question objects', () => {
    const questions = service.get();
    expect(questions).toBeInstanceOf(Array);
    expect(questions.length).toBeGreaterThan(0);
    expect(questions[0]).toBeInstanceOf(Question);
  });

  it('should correctly map JSON data to Question and Option objects', () => {
    const questions = service.get();
    const question = questions[0];
    expect(question.id).toBeDefined();
    expect(question.textQuestion).toBeDefined();
    expect(question.options).toBeInstanceOf(Array);
    expect(question.options[0]).toBeInstanceOf(Option);
    expect(question.options[0].getTextOption()).toBeDefined();
  });
});
