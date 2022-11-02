import { Component, OnInit, Input } from '@angular/core';


interface PersonalItem {
  name: string;
}

interface PersonalWorkItem extends PersonalItem{
  year: number;
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