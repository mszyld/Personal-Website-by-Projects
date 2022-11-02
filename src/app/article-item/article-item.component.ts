import { Component, OnInit, Input } from '@angular/core';



interface PersonalItem {
  name: string;
}

interface PersonalWorkItem extends PersonalItem{
  year: number;
}

interface Article extends PersonalWorkItem {
  description: string;
  collab: string;
  published: boolean;
  url: string;
  arXiv: string;
  ref: string;
  proj: string;
}




@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss','../home/home.page.scss'],
})






export class ArticleItemComponent implements OnInit {
  
  @Input('value') item: Article;

  constructor() {
   }

  ngOnInit() {
    
  }

}
