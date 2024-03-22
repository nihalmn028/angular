import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang2';
  data="data from parent"
  dataFromChild=""
  onClick(){
    window.alert(this.data)
  }
  recieveData(data:string){
    console.log('recieved data from child ',data);
    this.dataFromChild=data;
    window.alert(this.dataFromChild)
  }
}
