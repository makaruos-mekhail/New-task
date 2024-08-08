import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'New Project';

  lang: any = 'en';

  constructor(private router: Router, private translate: TranslateService) {
    if (sessionStorage.getItem('Accept-Language')) {
      this.lang = sessionStorage.getItem('Accept-Language') as string;
    } else {
      this.lang = 'en';
      sessionStorage.setItem('Accept-Language', 'en');
    };
    this.translate.use(this.lang);
    this.translate.setDefaultLang(this.lang);

    //  to access the url from router
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const currentUrl = event.url;
        if (currentUrl.split('/')[1] == '') {
          this.router.navigate(['/home']);
        }
      });
  }
}
