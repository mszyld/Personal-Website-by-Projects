import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PersonalItem, PersonalWorkItem, Project, Article, Talk} from '../interfaces'
 import {HomePage} from '../home/home.page'

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss','../home/home.page.scss'],
})

export class ArticleItemComponent implements OnInit {
  
  @Input('value') item: Article;
  @Input('showProject') showProject: boolean;
  @Output() public onProjectClick = new EventEmitter<string>();

  constructor() {
   }
   
   gotoProject( ) {
    this.onProjectClick.emit(this.item.proj)
   }

  ngOnInit() {
    
  }
}
