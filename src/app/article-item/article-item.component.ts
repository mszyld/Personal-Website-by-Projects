import { Component, OnInit, Input } from '@angular/core';
import {PersonalItem, PersonalWorkItem, Project, Article, Talk} from '../home/interfaces'

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
