import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  { //implements OnDestroy
  title = 'Course List';
  // courseList !: any[];
  // subscription !: Subscription;
  courses$ !: Observable<any[]>;
  authors$ !: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    //using Observable
    this.courses$ = db.list('/courses').valueChanges();
    this.authors$ = db.list('/authors').valueChanges();

    // this.subscription = db.list('courses').valueChanges()
    //   .subscribe(courses => {
    //     this.courseList = courses;
    //     console.log(this.courseList);
    //   });
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
