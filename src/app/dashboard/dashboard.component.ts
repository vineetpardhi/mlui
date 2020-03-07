import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
// For MDB Angular Free
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

set(e){
    e.preventDefault();
    var author=((document.getElementById('author') as HTMLInputElement).value);
    var dataset=((document.getElementById('dataset') as HTMLInputElement).value);
    console.log(author);
    console.log(dataset);

}

  foods: Food[] = [
    {value: 'transfer', viewValue: 'Resnet'},
    {value: 'Architecture', viewValue: 'VGG'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
