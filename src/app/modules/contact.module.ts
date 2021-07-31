import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ContactModule {
  name!: string;
  email!: string;
  subject!: string;
  message!: string;
 }
