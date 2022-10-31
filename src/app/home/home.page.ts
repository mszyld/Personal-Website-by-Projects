import { Component } from '@angular/core';

interface PersonalWorkItem {
  name: string;
}

interface Project extends PersonalWorkItem {
  description: string;
}

interface Article extends PersonalWorkItem {
  description: string;
  collab: string;
  published: boolean;
  url: string;
  year: number;
  arXiv: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public name = "Papers and Talks by Projects";
  public articles: Article[] = [{ name: "Article", description: "XX", published: false, url: "http", collab: "Dorette", year: 2022, arXiv: "arx"},
  { name: "Model bicategories and their homotopy bicategories", description: "We give the definitions of model bicategory and q-homotopy, which are natural generalizations of the notions of model category and homotopy to the context of bicategories. We prove that the 2-dimensional localization of a model bicategory C at the weak equivalences can be computed as a bicategory Ho(C) whose 2-cells are classes of q-homotopies up to an equivalence relation.", published: true, url: "https://www.sciencedirect.com/science/article/abs/pii/S0001870822002729", collab: "M.E. Descotte and E.J. Dubuc", year: 2022, arXiv:"https://arxiv.org/abs/1805.07749"} ];
  public projects: Project[] = [{ name: "Project", description: "ProjectXX"}];
  public currentList: PersonalWorkItem[] = this.projects;

  constructor() {}

  itemCLicked(item) {
    console.log("Maigc!!!", item);
  }

  segmentHasChanged(value) {
    this.currentList = value.detail.value;
  }

  getDetails(item: Article | Project) {
      return this.isArticle(item) ? [item.description, item.collab, item.published, item.url]: item.description;
  }

  isArticle(item: Article | Project): item is Article {
    return (item as Article).collab !== undefined;
  }

}
