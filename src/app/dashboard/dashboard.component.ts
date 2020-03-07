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
import {MatGridListModule} from '@angular/material/grid-list';

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
  panelOpenState = false;

  foods: Food[] = [
    {value: 'trans', viewValue: 'Transfer'},
    {value: 'arch', viewValue: 'Architecture'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
