import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { {{properCase name}}Component } from './{{camelCase name}}.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '{{camelCase name}}', component: {{properCase name}}Component }
    ])
  ],
  exports: [RouterModule]
})
export class {{properCase name}}RoutingModule { }
