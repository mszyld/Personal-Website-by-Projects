
import { Component, OnInit, Input } from '@angular/core';



interface PersonalItem {
  name: string;
}

interface PersonalWorkItem extends PersonalItem{
  year: number;
}

interface Project extends PersonalItem{
  description: string;
  items: Array<PersonalWorkItem>;
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

interface Talk extends PersonalWorkItem {
  given_by: string;
  at: string;
  url_at: string;
  url_abs: string;
  url_video: string;
  url_slides: string;
  date: string;
  proj: string;
}



@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss','../home/home.page.scss'],
  //declarations: [ArticleItemComponent,PreprintItemComponent,TalkItemComponent],
  // exports: [ArticleItemComponent],
  //bootstrap: [ArticleItemComponent,PreprintItemComponent,TalkItemComponent]
})
export class ProjectItemComponent implements OnInit {
  @Input('value') item: Project;

  constructor() { }

  ngOnInit() {}


  isArticle(item: Article | Project | Talk): item is Article {
    return (item as Article).collab !== undefined;
  }
  
  isTalk(item: Article | Project | Talk): item is Talk {
    return (item as Talk).given_by !== undefined;
  }
}

