import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public name = "Martin";
  public articles = ["Awesome Article 1", "Great Article 2"];
  public projects = ["Awesome Project 9000", "I buillt my own page"];
  public currentList: string[] = this.projects;

  constructor() {}

  itemCLicked(item) {
    console.log("Maigc!!!", item);
  }

  segmentHasChanged(value) {
    this.currentList = value.detail.value;
  }

}
