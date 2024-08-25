import { Option } from './Option';

export class Question {
  id: number;
  textQuestion: string;
  options: Option[];
  private subject: string;
  private evaluation: string;

  constructor(id: number, textQuestion: string, options: Option[], subject: string, evaluation: string) {
    this.id = id;
    this.textQuestion = textQuestion;
    this.options = options;
    this.subject = subject;
    this.evaluation = evaluation;
  }
  getTextQuestion(): string {
    return this.textQuestion;
  }

  getOptions(): Option[] {
    return this.options;
  }
}
