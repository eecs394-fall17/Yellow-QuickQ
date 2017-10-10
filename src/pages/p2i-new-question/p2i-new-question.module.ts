/**
 * Created by Encode_X on 07/10/2017.
 */
import { NgModule } from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {P2iNewQuestionPage} from "./p2i-new-question";

@NgModule({
  declarations: [
    P2iNewQuestionPage,
  ],
  imports: [
    IonicModule.forRoot(P2iNewQuestionPage)
  ],
  entryComponents: [
    P2iNewQuestionPage
  ]
})
export class P2iNewQuestionModule {}
