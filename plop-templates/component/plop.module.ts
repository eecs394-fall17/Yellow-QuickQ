import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { {{properCase name}}Component } from './{{camelCase name}}.component';
import { {{properCase name}}RoutingModule } from './{{camelCase name}}-routing.module';

@NgModule({
  imports: [CommonModule, {{properCase name}}RoutingModule],
  declarations: [{{properCase name}}Component],
  exports: [{{properCase name}}Component]
})
export class {{properCase name}}Module { }
