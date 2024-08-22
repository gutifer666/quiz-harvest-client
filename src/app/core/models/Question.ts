import { Option } from './Option';

export class Question {
  private id: number;
  private textQuestion: string;
  private options: Option[];
  private subject: string;
  private evaluation: string;

  constructor(id: number, textQuestion: string, options: Option[], subject: string, evaluation: string) {
    this.id = id;
    this.textQuestion = textQuestion;
    this.options = options;
    this.subject = subject;
    this.evaluation = evaluation;
  }
}
