import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
    private event;
  constructor(private storage: AngularFireStorage) { }


  saveEvent(event){
      this.event=event;
  }
  uploadFile() {
    const file = this.event.target.files[0];
    const filePath = '/images/ml_dataset/';
    const task = this.storage.upload(filePath, file);

  }



}
