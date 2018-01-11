import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable} from 'rxjs/Rx';

@Injectable()
export class VoteService {

  constructor(private afs: AngularFirestore) { }

  saveEntry(survey): void {
    this.afs.collection('surveys').add(survey);
  }

  getAllEntries(): Observable<any> {
    return this.afs.collection('surveys').valueChanges();
  }

}
