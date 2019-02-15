import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditComponent} from './edit/edit.component';
import {ListComponent} from './list/list.component';
import {NewComponent} from './new/new.component';
import {ViewComponent} from './view/view.component';
import { ScheduleComponent } from './schedule/schedule.component';
import {GenerateComponent} from './generate/generate.component';
import {RequestsComponent} from './requests/requests.component';
import {AboutComponent} from './about/about.component';
// import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {path: 'employees/new', component: NewComponent},
  {path: 'employees/:id', component: ViewComponent},
  {path: 'employees', component: ListComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'delete/:id', component: EditComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'requests', component: RequestsComponent},
  {path: 'about', component: AboutComponent},
  //{path: 'schedule/:mondayAM/:mondayPM/:tuesdayAM/:tuesdayPM/:wednesdayAM/:wednesdayPM/:thursdayAM/:thursdayPM/:fridayAM/:fridayPM/:saturdayAM/:saturdayPM/:sundayAM/:sundayPM', component: ScheduleComponent},
  {path: '', component: GenerateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
