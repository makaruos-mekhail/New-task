import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  dataUser: any;
  activeUserId: string = '';


  constructor(@Inject(DOCUMENT) private documents: any, private sharedService: SharedService, private route: ActivatedRoute) {

    this.route.params.subscribe((params: any) => {
      this.activeUserId = params['id'];
      console.log(this.activeUserId);
    });

  }

  ngOnInit(): void {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });

    this.sharedService.geUserByID(this.activeUserId).pipe().subscribe({
      next: (data) => {
        this.dataUser = data.data;
        console.log(this.dataUser);
       },
    });

  }

}
