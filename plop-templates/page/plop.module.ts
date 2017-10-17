import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { {{properCase name}}Page } from "./{{kabobCase name}}";

@NgModule({
  declarations: [
    {{properCase name}}Page,
  ],
  imports: [
    IonicModule.forRoot({{properCase name}}Page)
  ],
  entryComponents: [
    {{properCase name}}Page
  ]
})
export class {{properCase name}}PageModule {}
