import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


 import { ArticleItemComponent } from '../article-item/article-item.component';
 import { PreprintItemComponent } from '../preprint-item/preprint-item.component';
 import { TalkItemComponent } from '../talk-item/talk-item.component';
 import { ProjectItemComponent } from '../project-item/project-item.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage,ArticleItemComponent,PreprintItemComponent,TalkItemComponent,ProjectItemComponent],
  // exports: [ArticleItemComponent],
  //bootstrap: [ArticleItemComponent,PreprintItemComponent,TalkItemComponent,ProjectItemComponent]
})
export class HomePageModule {}
