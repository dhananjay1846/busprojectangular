import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { MyprofilesComponent } from './myprofiles/myprofiles.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';

const routes: Routes = [
  {path:'addprofile',component:MyprofilesComponent},
  {path:'addfeedback',component:FeedbacksComponent},
  {path:'updateprofile',component:UpdateprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
