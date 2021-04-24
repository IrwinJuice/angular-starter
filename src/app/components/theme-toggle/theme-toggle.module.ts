import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from './theme-toggle.component';
import {MaterialModule} from '../../material.module';



@NgModule({
  declarations: [
    ThemeToggleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ThemeToggleComponent
  ]
})
export class ThemeToggleModule { }
