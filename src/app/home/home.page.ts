import { Component } from '@angular/core';

import {PersonalItem, PersonalWorkItem, Project, Article, Talk} from './DataDefinitions' //, isArticle,  DataFunctions
//import { isArticle, isTalk, isProject } from './DataDefinitions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public name = "Papers and Talks by Projects";

  public articles: Article[] = [
    
    { 
      name: "Model bicategories and their homotopy bicategories", 
      description: "We give the definitions of model bicategory and q-homotopy, which are natural generalizations of the notions of model category and homotopy to the context of bicategories. We prove that the 2-dimensional localization of a model bicategory C at the weak equivalences can be computed as a bicategory Ho(C) whose 2-cells are classes of q-homotopies up to an equivalence relation.", 
      published: true, 
      url: "https://www.sciencedirect.com/science/article/abs/pii/S0001870822002729", 
      collab: "M.E. Descotte and E.J. Dubuc", 
      year: 2022, 
      arXiv:"https://arxiv.org/abs/1805.07749", 
      ref: "Advances in Mathematics, Volume 404, Part B, 6 August 2022, 108455",
      proj: "Model Bicategories"
    },

    { 
      name: "A localization of bicategories via homotopies", 
      description: "Given a bicategory C and a family W of arrows of C, we give conditions on the pair (C,W) that allow us to construct the bicategorical localization with respect to W by dealing only with the 2-cells, that is without adding objects or arrows to C. This localization result has a natural application to the construction of the homotopy bicategory of a model bicategory.", 
      published: true, 
      url: "http://www.tac.mta.ca/tac/volumes/35/23/35-23.pdf", 
      collab: "M.E. Descotte and E.J. Dubuc", 
      year: 2020, 
      arXiv:"https://arxiv.org/abs/1805.05248", 
      ref: "Theory and Applications of Categories 35, 23, p.845-874",
      proj: "Model Bicategories"
    },

    { 
      name: "Lifting PIE limits with strict projections", 
      description: "We give a unified direct proof of the lifting of PIE limits to the 2-category of algebras and (pseudo) morphisms, which specifies precisely which of the projections of the lifted limit are strict and detect strictness. In the literature, these limits had to be lifted one by one, so as to keep track of these projections in each case.", 
      published: true, 
      url: "http://www.tac.mta.ca/tac/volumes/34/1/34-01abs.html", 
      collab: "", 
      year: 2019, 
      arXiv:"https://arxiv.org/abs/1809.04712", 
      ref: "Theory and Applications of Categories 34, 1, p.1-12",
      proj: "Sigma Limits"
    },

    { 
      name: "A general limit lifting theorem for 2-dimensional monad theory", 
      description: "We give a definition of weak morphism of T-algebras, for a 2-monad T, with respect to an arbitrary family Ω of 2-cells of the base 2-category.  These concepts allow us to prove a limit lifting theorem which unifies and generalizes three different previously known results of 2-dimensional monad theory.", 
      published: true, 
      url: "https://www.sciencedirect.com/science/article/abs/pii/S0022404917302244", 
      collab: "", 
      year: 2018, 
      arXiv:"https://arxiv.org/abs/1702.03303", 
      ref: "Journal of Pure and Applied Algebra 222, 8, p.2359-2373",
      proj: "Sigma Limits"
    },

    { 
      name: "Sigma limits in 2-categories and flat pseudofunctors", 
      description: "In this paper we introduce sigma limits (which we write σ-limits), a concept that interpolates between lax and pseudolimits: for a fixed family Σ of arrows of a 2-category A, a σ-cone for a 2-functor F:A→B is a lax cone such that the structural 2-cells corresponding to the arrows of Σ are invertible. We develop the theory of σ-limits and σ-bilimits, whose importance relies on the following key fact: any weighted σ-limit (or σ-bilimit) can be expressed as a conical one. As an application, we establish the 2-dimensional theory of flat pseudofunctors.", 
      published: true, 
      url: "http://www.sciencedirect.com/science/article/pii/S0001870818301968", 
      collab: "M.E. Descotte and E.J. Dubuc",
      year: 2018, 
      arXiv:"https://arxiv.org/abs/1610.09429", 
      ref: "Advances in Mathematics 333, p. 266-313",
      proj: "Sigma Limits"
    },

    { 
      name: "A construction of certain weak colimits and an exactness property of the 2-category of categories", 
      description: "We give an explicit construction of σ-filtered σ-colimits of categories, a construction which allows computations with these colimits. We then state and prove a basic exactness property of the 2-category of categories, namely, that σ-filtered σ-colimits commute with finite weighted pseudo (or bi) limits.", 
      published: true, 
      url: "http://www.tac.mta.ca/tac/volumes/33/8/33-08abs.html", 
      collab: "M.E. Descotte and E.J. Dubuc",
      year: 2018, 
      arXiv:"https://arxiv.org/abs/1610.02453", 
      ref: "Theory and Applications of Categories 33, 8, p.192-215",
      proj: "Sigma Limits"
    },

    { 
      name: "Tannaka theory over sup-lattices and descent for topoi", 
      description: "We consider locales B as algebras in the tensor category sl of sup-lattices. We show the equivalence between the Joyal-Tierney descent theorem for open localic surjections q : shB → E in Galois theory and a Tannakian recognition theorem over sl for the sl-functor Rel (q*). Thus, a new Tannaka recognition theorem is obtained, essentially different from those known so far.", 
      published: true, 
      url: "http://www.tac.mta.ca/tac/volumes/31/31/31-31abs.html", 
      collab: "E.J. Dubuc",
      year: 2016, 
      arXiv:"https://arxiv.org/abs/1510.01775", 
      ref: "Theory and Applications of Categories 31, p.852-906",
      proj: "Tannaka-Galois"
    },

    { 
      name: "A Tannakian Context For Galois Theory", 
      description: "Strong similarities have been long observed between the Galois and Tannaka theories of the representation of groups. In this paper we construct an explicit (neutral) Tannakian context for the Galois theory of atomic topoi and prove equivalence for the fundamental theorem.", 
      published: true, 
      url: "http://www.sciencedirect.com/science/article/pii/S0001870812004094", 
      collab: "E.J. Dubuc",
      year: 2013, 
      arXiv:"https://arxiv.org/abs/1110.6411", 
      ref: "Advances In Mathematics 234, p. 528-549",
      proj: "Tannaka-Galois"
    },

    

    { 
      name: "Double Fibrations", 
      description: "This paper defines double fibrations (fibrations of double categories) and describes their key examples and properties. In particular, it shows how double fibrations relate to existing fibrational notions such as monoidal fibrations and discrete double fibrations, proves a representation theorem for double fibrations, and shows how double fibrations are a type of internal fibration.", 
      published: false, 
      url: "", 
      collab: "Geoffrey Cruttwell, Michael Lambert, and Dorette Pronk",
      year: 2022, 
      arXiv:"https://arxiv.org/abs/2205.15240", 
      ref: "",
      proj: "Fibrations for Double Categories"
    },

    { 
      name: "The Three F's for Bicategories I: Localization by Fractions is Exact", 
      description: "We study the interaction between the notions of filteredness, fractions and fibrations in the theory of bicategories, generalizing classical results for categories. We give an explicit formula for filtered pseudo-colimits of categories indexed by a bicategory, and we use it to compute the hom-categories of a bicategory of fractions. As a consequence, we show that the canonical pseudo-functor into a bicategory of fractions is exact.", 
      published: false, 
      url: "", 
      collab: "Pablo Bustillo Vazquez and Dorette Pronk",
      year: 2021, 
      arXiv:"https://arxiv.org/abs/2112.00205", 
      ref: "",
      proj: "Minimal Fractions"
    },

    { 
      name: "The homotopy relation in a category with weak equivalences", 
      description: "We define a homotopy relation between arrows of a category with weak equivalences, and give a condition under which the quotient by the homotopy relation yields the homotopy category. In the case of the fibrant-cofibrant objects of a model category this condition holds, and we show that our notion of homotopy coincides with the classical one. We deduce from our work the saturation of model categories.", 
      published: false, 
      url: "", 
      collab: "",
      year: 2018, 
      arXiv:"https://arxiv.org/abs/1804.04244", 
      ref: "",
      proj: "Model Bicategories"
    }

  ];

  public talks: Talk[] = [

    {
      name: "On Tannaka Recognition and Descent for Topoi",
      given_by: "me",
      at: "2022 CMS Summer Meeting",
      url_at: "https://summer22.cms.math.ca/",
      url_abs: "https://www2.cms.math.ca/Events/summer22/abs/pdf/dma-ms.pdf",
      url_video: "",
      url_slides: "",
      year: 2022,
      date: "June 4",
      proj: "Tannaka-Galois",
    },

    {
      name: "An invitation to double categories and double fibrations",
      given_by: "me",
      at: "Algebra, Logic and Topology Seminar, Centre For Mathematics, Univ. of Coimbra",
      url_at: "http://cmuc.mat.uc.pt › ppresearchgroupseminars",
      url_abs: "https://www.mathstat.dal.ca/~mszyld/abstract_coimbra_2022.pdf",
      url_video: "",
      url_slides: "",
      year: 2022,
      date: "May 24",
      proj: "Fibrations for Double Categories",
    },

    {
      name: "Double Fibrations (or functors are categories)",
      given_by: "me",
      at: "ATCAT Seminar",
      url_at: "https://www.mathstat.dal.ca/~fu/atcat/",
      url_abs: "https://www.mathstat.dal.ca/~fu/atcat/",
      url_video: "",
      url_slides: "",
      year: 2022,
      date: "March 1",
      proj: "Fibrations for Double Categories",
    },

    {
      name: "Categories for the Learning Mathematician",
      given_by: "me",
      at: "Dalhousie Honours Seminar",
      url_at: "https://www.dal.ca/faculty/science/math-stats/news-events/colloquium.html",
      url_abs: "https://www.mathstat.dal.ca/~mszyld/abstract_szyld_honours_seminar.pdf",
      url_video: "",
      url_slides: "",
      year: 2021,
      date: "October 20",
      proj: "Outreach",
    },

    {
      name: "Minimal Bicategories of Fractions and Colimits of Bicategories",
      given_by: "me",
      at: "ATCAT Seminar",
      url_at: "https://www.mathstat.dal.ca/~mamy/atcat/",
      url_abs: "https://www.mathstat.dal.ca/~mamy/atcat/",
      url_video: "",
      url_slides: "",
      year: 2021,
      date: "October 12",
      proj: "Minimal Fractions",
    },

  ];

  public projects: Project[] = [{ name: "Minimal Fractions", description: "Minimal Fractions description", items: []},
  { name: "Outreach", description: "Outreach description", items: []},
  { name: "Fibrations for Double Categories", description: "Fibrations for Double Categories description", items: []},
  { name: "Tannaka-Galois", description: "Tannaka-Galois description", items: []},
  { name: "Model Bicategories", description: "Model Bicategories description", items: []},
  { name: "Sigma Limits", description: "Sigma Limits description", items: []}];


  public currentList: PersonalItem[] = this.articles;

  public added_stuff = false;

  constructor( ) {
  }

  segmentHasChanged(value) {
    this.currentList = value.detail.value;
    
    // The first time value changes, create the list of items of each project:
    if (this.added_stuff == false) {
      for (let this_art of this.articles) {
        for (let this_proj of this.projects) {
          if (this_proj.name == this_art.proj ) {
            this_proj.items.push( this_art );
          }
        }
      }
      for (let this_talk of this.talks) {
        for (let this_proj of this.projects) {
          if (this_proj.name == this_talk.proj ) {
            this_proj.items.push( this_talk );
          }
        }
      }

      for (let this_proj of this.projects) {
        this_proj.items = this_proj.items.sort((a, b) => (a.year > b.year) ? -1 : 1);
      }

      this.added_stuff = true;
    }

  }

  // getDetails(item: Article | Project) {
  //     return this.isArticle(item) ? [item.description, item.collab, item.published, item.url]: item.description;
  // }

  isArticle(item: Article | Project | Talk): item is Article {
    return (item as Article).collab !== undefined;
  }

  isTalk(item: Article | Project | Talk): item is Talk {
      return (item as Talk).given_by !== undefined;
  }
      
  isProject (item: Article | Project | Talk): item is Project {
      return (item as Project).items !== undefined;
  }

}
