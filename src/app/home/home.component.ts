import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from "@angular/fire/database";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Course List';
  // courseList !: any[];
  // subscription !: Subscription;
  courses$ !: Observable<any>;
  authors$ !: Observable<any>;

  constructor(db: AngularFireDatabase, private router: Router) {
    //using Observable
    this.courses$ = db.list('/courses').valueChanges();
    this.authors$ = db.object('/authors/1').valueChanges();

    // this.subscription = db.list('courses').valueChanges()
    //   .subscribe(courses => {
    //     this.courseList = courses;
    //     console.log(this.courseList);
    //   });
  }

  ngOnInit(): void {
  }
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  goToNextPage() {
    this.router.navigateByUrl('/add');
  }
}
