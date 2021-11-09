import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AgeOfEmpires';
  pageTitle = '';

  constructor(private router: Router,
              private http: HttpClient,
              private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.pageTitle = this.activatedRoute.snapshot.firstChild?.data['title'];
      }
    });
  }
}
