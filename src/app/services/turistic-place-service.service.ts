import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class TuristicPlaceServiceService {

  constructor(private fireStore : AngularFirestore) { }

  getAllTouristicPlaces() {
    return this.fireStore.collection<any>('destinos')
    .snapshotChanges();
  }
}
