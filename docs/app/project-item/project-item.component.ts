
import { Component, OnInit, Input } from '@angular/core';

import {PersonalItem, PersonalWorkItem, Project, Article, Talk} from '../interfaces'

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss','../home/home.page.scss'],
})

export class ProjectItemComponent implements OnInit {
  @Input('value') item: Project;
  @Input('sel') selectedProject: string;

  constructor() { }

  ngOnInit() {}


  isArticle(item: Article | Project | Talk): item is Article {
    return (item as Article).collab !== undefined;
  }
  
  isTalk(item: Article | Project | Talk): item is Talk {
    return (item as Talk).given_by !== undefined;
  }

}

