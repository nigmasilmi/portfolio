import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import {ProjectsComponent} from './../app/components/projects/projects.component';
import {ProjectDetailComponent} from './../app/components/project-detail/project-detail.component';
import {SkillsComponent} from './../app/components/skills/skills.component';
import {SandboxComponent} from './../app/components/sandbox/sandbox.component';
import {EnduranceComponent} from './../app/components/endurance/endurance.component';
import {ContactComponent} from './../app/components/contact/contact.component';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};



const routes: Routes = [
  {path: 'projects', component: ProjectsComponent, data: {animation: 'Projects'}},
  {path: 'project/:id', component: ProjectDetailComponent},
  {path: 'skills', component: SkillsComponent , data: {animation: 'Skills'}},
  {path: 'sandbox', component: SandboxComponent, data: {animation: 'SandBox'}},
  {path: 'endurance', component: EnduranceComponent, data: {animation: 'Endurance'}},
  {path: 'contact', component: ContactComponent, data: {animation: 'Contact'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

