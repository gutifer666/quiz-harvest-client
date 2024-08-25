import { Component } from '@angular/core';
import test from '../../../../assets/data/test.json';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-show-test',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './show-test.component.html',
  styleUrl: './show-test.component.css'
})
export class ShowTestComponent {
  test = test;
  title = 'Test Page';
}
