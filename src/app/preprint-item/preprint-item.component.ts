import { Component, OnInit, Input } from '@angular/core';
import {PersonalItem, PersonalWorkItem, Project, Article, Talk} from '../interfaces'


@Component({
  selector: 'app-preprint-item',
  templateUrl: './preprint-item.component.html',
  styleUrls: ['./preprint-item.component.scss','../home/home.page.scss'],
})
export class PreprintItemComponent implements OnInit {

  @Input('value') item: Article;

  constructor() { }

  ngOnInit() {}

}