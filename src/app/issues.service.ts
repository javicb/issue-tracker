import { Injectable } from '@angular/core';
import { Issue } from './issue';
// import { issues } from '../assets/mock-issues';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


const getObservable = (collection: AngularFirestoreCollection<Issue>) => {
  const subject = new BehaviorSubject<Issue[]>([]);
  collection.valueChanges({ idField: 'id' }).subscribe((val: Issue[]) => {
    subject.next(val);
  });
  return subject;
};

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  issues: Issue[] = [];

  constructor(private store: AngularFirestore) {
    this.getPendingIssues()
      .subscribe(res => this.issues = res)
  }

  getPendingIssues() {
    return getObservable(this.store.collection('issues')) as Observable<Issue[]>;
  }

  createIssue(issue: Issue) {
    issue.issueNo = this.issues.length + 1;
    this.store.collection('issues').add(issue);
  }

  completeIssue(issue: Issue) {
    issue.completed = new Date();
    this.store.collection('issues').doc(issue.id).update(issue);
  }

  getSuggestions(title: string): Issue[] {
    if (title.length > 3) {
      return this.issues.filter(issue =>
        issue.title.indexOf(title) !== -1);
    }
    return [];
  }

  updateIssue(issue: Issue) {
    this.store.collection('issues').doc(issue.id).update(issue);
  }
}
