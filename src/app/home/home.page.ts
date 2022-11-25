import { Component } from '@angular/core';

import {Project, Article, Talk} from '../interfaces';

import { projects, articles, talks, talks_by_others } from '../userData';

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
  public talks_by_others = talks_by_others;

  public selectedSegment = -1;
  public added_stuff = false;
  public selectedProject = "";

  constructor(private service: AddDataToProjectsService ) {
  }

  segmentHasChanged(value) {
    this.selectedSegment = value.detail.value;
    
    // The first time value changes, create the list of items of each project:
    if (this.added_stuff == false) {

      this.service.addData (projects,articles,talks,talks_by_others);

      this.added_stuff = true;
    }

  }

  
  selectProjectByName(project) {
    this.selectedSegment = 0;
    //this.segmentHasChanged(projects);
    this.selectedProject = project;
    //console.log(project);
    setTimeout(() => {
      const projectElement = document.getElementById(project);
      projectElement.scrollIntoView();  
    }, 350);
  } 


  gotoProject () {
    this.selectedSegment = 0;
    console.log("XXXXX");
  }


  // getDetails(item: Article | Project) {
  //     return this.isArticle(item) ? [item.description, item.collab, item.published, item.url]: item.description;
  // }




}
