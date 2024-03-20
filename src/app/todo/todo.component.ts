import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
todo1="understanding binding"
enabled=true
onClick(){
  this.enabled=false
  window.alert("You clicked on the button")
}
getColor(){
  return (this.enabled)? "green":"red"
}
}
