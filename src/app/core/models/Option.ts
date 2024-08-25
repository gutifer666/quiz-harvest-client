export class Option {
  private id: number;
  private textOption: string;
  private readonly correct: boolean;
  private selected: boolean;

  constructor(id: number, name: string, correct: boolean, selected: boolean) {
    this.id = id;
    this.textOption = name;
    this.correct = correct;
    this.selected = selected;
  }

  isSelectedAsCorrect() {
    this.selected = true;
  }

  isCorrect(): boolean {
    return this.correct;
  }

  getTextOption(): string {
    return this.textOption;
  }
}
