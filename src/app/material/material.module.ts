import { NgModule } from '@angular/core';
import { MatIconModule, MatProgressSpinnerModule } from '@angular/material';
const MaterialComponents = [
  MatIconModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})


export class MaterialModule { }
