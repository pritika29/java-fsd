import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'course',component:CourseComponent},
  {path:'log-in',component:LogInComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }