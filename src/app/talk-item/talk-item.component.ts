
import { Component, OnInit, Input } from '@angular/core';
import {PersonalItem, PersonalWorkItem, Project, Article, Talk} from '../home/DataDefinitions'

@Component({
  selector: 'app-talk-item',
  templateUrl: './talk-item.component.html',
  styleUrls: ['./talk-item.component.scss','../home/home.page.scss'],
})
export class TalkItemComponent implements OnInit {

  @Input('value') item: Talk;

  constructor() { }

  ngOnInit() {}

}

