import { Routes } from '@angular/router';
import {ShowTestComponent} from "./core/pages/show-test/show-test.component";
import {CreateTestComponent} from "./core/pages/create-test/create-test.component";

export const routes: Routes = [
  { path: '', component: CreateTestComponent },
  { path: 'test', component: ShowTestComponent }
];
