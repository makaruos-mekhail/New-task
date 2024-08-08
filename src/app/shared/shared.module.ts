import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ScreenLoadarComponent } from './components/screen-loadar/screen-loadar.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [HeaderComponent,ScreenLoadarComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule 
  ],
  exports: [
    HeaderComponent,
    ScreenLoadarComponent,
    CardComponent
  ],
})
export class SharedModule { }
