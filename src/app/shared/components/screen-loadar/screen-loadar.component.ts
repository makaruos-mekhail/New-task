import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-screen-loadar',
  templateUrl: './screen-loadar.component.html',
  styleUrls: ['./screen-loadar.component.scss']
})
export class ScreenLoadarComponent {
  constructor(public sharedService:SharedService){    
  }
}
