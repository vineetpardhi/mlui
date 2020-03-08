import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {Requestservice} from '../service/request.service';
// For MDB Angular Free
import { AngularFireStorage } from '@angular/fire/storage';
import { CollapseModule, WavesModule, DropdownModule} from 'angular-bootstrap-md';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 

    private event;
    selected="Resnet";
  panelOpenState =false;
  collapsed1=true;
  collapsed2=true;



  collapse1(){
      if(this.collapsed1==true){
          this.collapsed1=false;
      }
      else{
          this.collapsed1=true;
      }
  }

  collapse2(){
    if(this.collapsed2==true){
        this.collapsed2=false;
    }
    else{
        this.collapsed2=true;
    }
}




sett(event){
console.log("HERE");
console.log(event);
}

set(e){
    e.preventDefault();
    var author=((document.getElementById('author') as HTMLInputElement).value);
    var dataset=((document.getElementById('dataset') as HTMLInputElement).value);
    //var model=((document.getElementById('clientValue') as HTMLInputElement).value);
    var epoch=((document.getElementById('epoch') as HTMLInputElement).value);
    var lr=((document.getElementById('lr') as HTMLInputElement).value);
    var bs=((document.getElementById('bs') as HTMLInputElement).value);

    console.log(author);
    console.log(dataset);
    //console.log(model);
    console.log(epoch);
    console.log(lr);
    console.log(bs);

    this.demo_service.postData(epoch,lr,bs).subscribe((res)=>
      {
          console.log(JSON.stringify(res));
      })

      
}

trainmodel(){
    var epoch=((document.getElementById('epoch') as HTMLInputElement).value);
    var lr=((document.getElementById('lr') as HTMLInputElement).value);
    var bs=((document.getElementById('bs') as HTMLInputElement).value);

    this.demo_service.train(epoch,lr,bs).subscribe((res)=>{
        console.log(JSON.stringify(res));
    })
}

  

  

  constructor(private demo_service:Requestservice,private storage:AngularFireStorage) { }

  ngOnInit() {
      
      
  }


  
  saveEvent(event){
    this.event=event;
}
uploadFile() {
  const file = this.event.target.files[0];
  const filePath = '/images/ml_dataset/';
  const task = this.storage.upload(filePath, file);

}


}
