import { Component, OnInit } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

interface Subject {
  name: string;
}

interface Evaluation {
  name: string;
}

@Component({
  selector: 'app-create-show-test',
  standalone: true,
  imports: [DropdownModule, FormsModule, ButtonModule],
  templateUrl: './create-test.component.html',
  styleUrl: './create-test.component.css'
})
export class CreateTestComponent implements OnInit {
  subjects: Subject[] | undefined;
  evaluations: Evaluation[] | undefined;
  selectedSubject: Subject | undefined;
  selectedEvaluation: Evaluation | undefined;

  ngOnInit() {
    this.subjects = [
      {name: 'Databases'},
      {name: 'Environments'},
      {name: 'Workplace'},
      {name: 'Markup'},
      {name: 'Programming'},
      {name: 'Systems'},
      {name: 'Client'},
      {name: 'Server'},
      {name: 'Deployment'},
      {name: 'Interface'},
      {name: 'Business'},
      {name: 'Elective'}
    ];

    this.evaluations = [
      { name: 'First'},
      { name: 'Second'}
    ];
  }

  createTest() {
    if (this.selectedSubject && this.selectedEvaluation) {
      console.log('Test created for subject: ' + this.selectedSubject.name + ' and evaluation: ' + this.selectedEvaluation.name);
    }
  }
}
