import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database'
import {AngularFireAction} from 'angularfire2/database'
import * as firebase from 'firebase';
import {Upload} from '../shared/upload';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private db:AngularFireDatabase) { }

  private basepath:string='/uploads';
  private uploadTask:firebase.storage.UploadTask;


  pushUpload(upload:Upload){
    let storageRef=firebase.storage().ref();


  this.uploadTask=storageRef.child(`${this.basepath}/$(upload.file.name}`).put(upload.file);

  this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,(snapshot)=>{
    upload.progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100
  },
  (error)=>{
      console.log(error)
  },
  ()=>{
    upload.url=this.uploadTask.snapshot.downloadURL
    upload.name=upload.file.name
    //this.saveFileData(upload)
  })
  }
}
