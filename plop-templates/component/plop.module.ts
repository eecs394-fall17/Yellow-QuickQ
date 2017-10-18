import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { {{properCase name}}Component } from "./{{camelCase name}}";

@NgModule({
  declarations: [
    {{properCase name}}Component,
  ],
  imports: [
    IonicModule.forRoot({{properCase name}}Component)
  ],
  entryComponents: [
    {{properCase name}}Component
  ]
})
export class {{properCase name}}CompModule {}
