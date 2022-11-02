
import { Component, OnInit, Input } from '@angular/core';


interface PersonalItem {
  name: string;
}

interface PersonalWorkItem extends PersonalItem{
  year: number;
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
  selector: 'app-talk-item',
  templateUrl: './talk-item.component.html',
  styleUrls: ['./talk-item.component.scss','../home/home.page.scss'],
})
export class TalkItemComponent implements OnInit {

  @Input('value') item: Talk;

  constructor() { }

  ngOnInit() {}

}

