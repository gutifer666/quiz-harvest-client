import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {TestService} from "../../services/test/test.service";
import {Question} from "../../models/Question";

@Component({
  selector: 'app-show-test',
  standalone: true,
  imports: [ NgForOf ],
  templateUrl: './show-test.component.html',
  styleUrl: './show-test.component.css'
})
export class ShowTestComponent {
  test: Question[];
  constructor(testService: TestService) {
    this.test = testService.get();
  }
}
