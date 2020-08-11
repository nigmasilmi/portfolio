import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Project } from './../shared/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private fb: AngularFirestore) { }


  getProjects() {
    // return this.fb.collection('proyectos').snapshotChanges();
    return this.fb.collection('proyectos', ref => ref.orderBy('date', 'desc'));
  }
}

