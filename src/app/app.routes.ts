import { Routes } from '@angular/router';
import {TestComponent} from "./core/pages/test/test.component";
import {CreateTestComponent} from "./core/pages/create-test/create-test.component";

export const routes: Routes = [
  { path: '', component: CreateTestComponent },
  { path: 'test', component: TestComponent }
];
