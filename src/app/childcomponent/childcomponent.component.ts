import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrl: './childcomponent.component.css'
})
export class ChildcomponentComponent {
@Input('nihal') message:string=''
@Output() dataFromEvent=new EventEmitter<string>()
dataToSend="hello from child"
onclick(){
window.alert(`${this.message}: shown in child`)
}
sendData(){
  this.dataFromEvent.emit(this.dataToSend)
}
}
