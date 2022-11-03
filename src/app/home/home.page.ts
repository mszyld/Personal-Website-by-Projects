import { Component } from '@angular/core';

import {Project, Article, Talk} from '../interfaces';

import { projects, articles, talks } from '../userData';

import { AddDataToProjectsService } from '../add-data-to-projects.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public name = "Papers and Talks by Projects";

  public articles = articles;
  public projects = projects;
  public talks = talks;

  public selectedSegment = 1;
  public added_stuff = false;

  constructor(private service: AddDataToProjectsService ) {
  }

  segmentHasChanged(value) {
    this.selectedSegment = value.detail.value;
    
    // The first time value changes, create the list of items of each project:
    if (this.added_stuff == false) {

      this.service.addData (projects,articles,talks);

      this.added_stuff = true;
    }

  }

  // getDetails(item: Article | Project) {
  //     return this.isArticle(item) ? [item.description, item.collab, item.published, item.url]: item.description;
  // }




}
