import { Component } from '@angular/core';
import test from '../../../../assets/data/test.json';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  test = test;
  title = 'Test Page';
}
