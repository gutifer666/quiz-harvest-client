import { Routes } from '@angular/router';
import {QuestionnaireComponent} from "./core/pages/questionnaire/questionnaire.component";
import {CreateTestComponent} from "./core/pages/create-test/create-test.component";

export const routes: Routes = [
  { path: '', component: CreateTestComponent },
  { path: 'test', component: QuestionnaireComponent }
];
