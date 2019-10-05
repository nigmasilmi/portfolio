import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from './../app/components/projects/projects.component';
import {ProjectDetailComponent} from './../app/components/project-detail/project-detail.component';
import {SkillsComponent} from './../app/components/skills/skills.component';
import {SandboxComponent} from './../app/components/sandbox/sandbox.component';
import {EnduranceComponent} from './../app/components/endurance/endurance.component';
import {ContactComponent} from './../app/components/contact/contact.component';



const routes: Routes = [
  {path:'projects', component: ProjectsComponent},
  {path:'project/:id', component:ProjectDetailComponent},
  {path:'skills', component:SkillsComponent},
  {path:'sandbox', component:SandboxComponent},
  {path:'endurance', component:EnduranceComponent},
  {path:'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
