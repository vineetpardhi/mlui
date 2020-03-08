
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
      
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*"
})
};

@Injectable({
  providedIn: 'root'
})
export class Requestservice {

   
  apiURL1: string = 'http://34.93.196.209:5000/parameters';
  apiURL2: string = 'http://34.93.196.209:5000/train';

  constructor(private http:HttpClient) { }


  public postData(epoch,lr,bs){
    let formData = new FormData();
    formData.append('epoch', epoch);
    formData.append('lr', lr);
    formData.append('bs', bs);

    return this.http.post(`${this.apiURL1}`, formData, httpOptions);
  }
  
  public train(epoch,lr,bs){
    return this.http.post(`${this.apiURL2}`,{epochs:epoch,batch_size:bs,lr:lr},httpOptions);
  }
}