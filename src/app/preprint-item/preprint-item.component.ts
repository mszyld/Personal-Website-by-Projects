import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PersonalItem, PersonalWorkItem, Project, Article, Talk} from '../interfaces'


@Component({
  selector: 'app-preprint-item',
  templateUrl: './preprint-item.component.html',
  styleUrls: ['./preprint-item.component.scss','../home/home.page.scss'],
})
export class PreprintItemComponent implements OnInit {

  @Input('value') item: Article;
  @Input('showProject') showProject: boolean;
  @Output() public onProjectClick = new EventEmitter<string>();

  constructor() {
   }
   
   gotoProject( ) {
    this.onProjectClick.emit(this.item.proj)
   }
  ngOnInit() {}

}