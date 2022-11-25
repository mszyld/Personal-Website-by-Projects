
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PersonalItem, PersonalWorkItem, Project, Article, Talk} from '../interfaces'

@Component({
  selector: 'app-talk-item',
  templateUrl: './talk-item.component.html',
  styleUrls: ['./talk-item.component.scss','../home/home.page.scss'],
})
export class TalkItemComponent implements OnInit {

  @Input('value') item: Talk;
  @Input('showProject') showProject: boolean;
  @Output() public onProjectClick = new EventEmitter<string>();

  constructor() {
   }
   
   gotoProject( ) {
    this.onProjectClick.emit(this.item.proj)
   }
  ngOnInit() {}

}

