import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddDataToProjectsService {

  constructor() { }

  addData (projects,articles,talks,talks_by_others) {
    for (let this_art of articles) {
      for (let this_proj of projects) {
        if (this_proj.name == this_art.proj ) {
          this_proj.items.push( this_art );
          if (this_art.published) this_proj.has[2]++;
          else this_proj.has[1]++;
        }
      }
    }
    for (let this_talk of talks) {
      for (let this_proj of projects) {
        if (this_proj.name == this_talk.proj ) {
          this_proj.items.push( this_talk );
          this_proj.has[0]++;
        }
      }
    }
    for (let this_talk of talks_by_others) {
      for (let this_proj of projects) {
        if (this_proj.name == this_talk.proj ) {
          this_proj.items.push( this_talk );
          this_proj.has[0]++;
        }
      }
    }
    


    for (let this_proj of projects) {
      this_proj.items = this_proj.items.sort((a, b) => (a.year > b.year) ? -1 : 1);
    }
  }
}
