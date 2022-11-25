export interface PersonalItem {
  name: string;
}

export  interface PersonalWorkItem extends PersonalItem{
  year: number;
}

export  interface Project extends PersonalItem{
  description: string;
  items: Array<PersonalWorkItem>;
  has: number[];
  collaborators: string;
}

export interface Article extends PersonalWorkItem {
  description: string;
  collab: string;
  published: boolean;
  url: string;
  arXiv: string;
  ref: string;
  proj: string;
}

export interface Talk extends PersonalWorkItem {
  given_by: string;
  at: string;
  url_at: string;
  url_abs: string;
  url_video: string;
  url_slides: string;
  date: string;
  proj: string;
}