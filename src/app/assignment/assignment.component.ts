import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})
export class AssignmentComponent {
input=""
disabled(){
if(this.input==="")
return true
else
return false
}
reset(){
  this.input=""
}
}
