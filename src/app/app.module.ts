import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { FormsModule } from '@angular/forms';
import { TodonewComponent } from './todonew/todonew.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AssignmentComponent,
    TodonewComponent,
    ChildcomponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
