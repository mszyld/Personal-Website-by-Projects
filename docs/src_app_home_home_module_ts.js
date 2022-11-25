"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 5416:
/*!*************************************************!*\
  !*** ./src/app/add-data-to-projects.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddDataToProjectsService": () => (/* binding */ AddDataToProjectsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let AddDataToProjectsService = class AddDataToProjectsService {
    constructor() { }
    addData(projects, articles, talks, talks_by_others) {
        for (let this_art of articles) {
            for (let this_proj of projects) {
                if (this_proj.name == this_art.proj) {
                    this_proj.items.push(this_art);
                    if (this_art.published)
                        this_proj.has[2]++;
                    else
                        this_proj.has[1]++;
                }
            }
        }
        for (let this_talk of talks) {
            for (let this_proj of projects) {
                if (this_proj.name == this_talk.proj) {
                    this_proj.items.push(this_talk);
                    this_proj.has[0]++;
                }
            }
        }
        for (let this_talk of talks_by_others) {
            for (let this_proj of projects) {
                if (this_proj.name == this_talk.proj) {
                    this_proj.items.push(this_talk);
                    this_proj.has[0]++;
                }
            }
        }
        for (let this_proj of projects) {
            this_proj.items = this_proj.items.sort((a, b) => (a.year > b.year) ? -1 : 1);
        }
    }
};
AddDataToProjectsService.ctorParameters = () => [];
AddDataToProjectsService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], AddDataToProjectsService);



/***/ }),

/***/ 6723:
/*!********************************************************!*\
  !*** ./src/app/article-item/article-item.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleItemComponent": () => (/* binding */ ArticleItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _article_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-item.component.html?ngResource */ 1551);
/* harmony import */ var _article_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-item.component.scss?ngResource */ 7031);
/* harmony import */ var _home_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





let ArticleItemComponent = class ArticleItemComponent {
    constructor() {
        this.onProjectClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    gotoProject() {
        this.onProjectClick.emit(this.item.proj);
    }
    ngOnInit() {
    }
};
ArticleItemComponent.ctorParameters = () => [];
ArticleItemComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['value',] }],
    showProject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['showProject',] }],
    onProjectClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
ArticleItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-article-item',
        template: _article_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_article_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__, _home_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
    })
], ArticleItemComponent);



/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _article_item_article_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article-item/article-item.component */ 6723);
/* harmony import */ var _preprint_item_preprint_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../preprint-item/preprint-item.component */ 1715);
/* harmony import */ var _talk_item_talk_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../talk-item/talk-item.component */ 2303);
/* harmony import */ var _project_item_project_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../project-item/project-item.component */ 9076);











let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _article_item_article_item_component__WEBPACK_IMPORTED_MODULE_2__.ArticleItemComponent, _preprint_item_preprint_item_component__WEBPACK_IMPORTED_MODULE_3__.PreprintItemComponent, _talk_item_talk_item_component__WEBPACK_IMPORTED_MODULE_4__.TalkItemComponent, _project_item_project_item_component__WEBPACK_IMPORTED_MODULE_5__.ProjectItemComponent],
        // exports: [ArticleItemComponent],
        //bootstrap: [ArticleItemComponent,PreprintItemComponent,TalkItemComponent,ProjectItemComponent]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _userData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userData */ 7449);
/* harmony import */ var _add_data_to_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-data-to-projects.service */ 5416);






let HomePage = class HomePage {
    constructor(service) {
        this.service = service;
        this.name = "Papers and Talks by Projects";
        this.articles = _userData__WEBPACK_IMPORTED_MODULE_2__.articles;
        this.projects = _userData__WEBPACK_IMPORTED_MODULE_2__.projects;
        this.talks = _userData__WEBPACK_IMPORTED_MODULE_2__.talks;
        this.talks_by_others = _userData__WEBPACK_IMPORTED_MODULE_2__.talks_by_others;
        this.selectedSegment = -1;
        this.added_stuff = false;
        this.selectedProject = "";
    }
    segmentHasChanged(value) {
        this.selectedSegment = value.detail.value;
        // The first time value changes, create the list of items of each project:
        if (this.added_stuff == false) {
            this.service.addData(_userData__WEBPACK_IMPORTED_MODULE_2__.projects, _userData__WEBPACK_IMPORTED_MODULE_2__.articles, _userData__WEBPACK_IMPORTED_MODULE_2__.talks, _userData__WEBPACK_IMPORTED_MODULE_2__.talks_by_others);
            this.added_stuff = true;
        }
    }
    selectProjectByName(project) {
        this.selectedSegment = 0;
        //this.segmentHasChanged(projects);
        this.selectedProject = project;
        //console.log(project);
        setTimeout(() => {
            const projectElement = document.getElementById(project);
            projectElement.scrollIntoView();
        }, 350);
    }
    gotoProject() {
        this.selectedSegment = 0;
        console.log("XXXXX");
    }
};
HomePage.ctorParameters = () => [
    { type: _add_data_to_projects_service__WEBPACK_IMPORTED_MODULE_3__.AddDataToProjectsService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1715:
/*!**********************************************************!*\
  !*** ./src/app/preprint-item/preprint-item.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreprintItemComponent": () => (/* binding */ PreprintItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _preprint_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preprint-item.component.html?ngResource */ 6422);
/* harmony import */ var _preprint_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preprint-item.component.scss?ngResource */ 2769);
/* harmony import */ var _home_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





let PreprintItemComponent = class PreprintItemComponent {
    constructor() {
        this.onProjectClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    gotoProject() {
        this.onProjectClick.emit(this.item.proj);
    }
    ngOnInit() { }
};
PreprintItemComponent.ctorParameters = () => [];
PreprintItemComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['value',] }],
    showProject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['showProject',] }],
    onProjectClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
PreprintItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-preprint-item',
        template: _preprint_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_preprint_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__, _home_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
    })
], PreprintItemComponent);



/***/ }),

/***/ 9076:
/*!********************************************************!*\
  !*** ./src/app/project-item/project-item.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectItemComponent": () => (/* binding */ ProjectItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _project_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-item.component.html?ngResource */ 9555);
/* harmony import */ var _project_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-item.component.scss?ngResource */ 3848);
/* harmony import */ var _home_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





let ProjectItemComponent = class ProjectItemComponent {
    constructor() { }
    ngOnInit() { }
    isArticle(item) {
        return item.collab !== undefined;
    }
    isTalk(item) {
        return item.given_by !== undefined;
    }
};
ProjectItemComponent.ctorParameters = () => [];
ProjectItemComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['value',] }],
    selectedProject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['sel',] }]
};
ProjectItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-project-item',
        template: _project_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_project_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__, _home_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
    })
], ProjectItemComponent);



/***/ }),

/***/ 2303:
/*!**************************************************!*\
  !*** ./src/app/talk-item/talk-item.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TalkItemComponent": () => (/* binding */ TalkItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _talk_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./talk-item.component.html?ngResource */ 6935);
/* harmony import */ var _talk_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./talk-item.component.scss?ngResource */ 2242);
/* harmony import */ var _home_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





let TalkItemComponent = class TalkItemComponent {
    constructor() {
        this.onProjectClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    gotoProject() {
        this.onProjectClick.emit(this.item.proj);
    }
    ngOnInit() { }
};
TalkItemComponent.ctorParameters = () => [];
TalkItemComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['value',] }],
    showProject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['showProject',] }],
    onProjectClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
TalkItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-talk-item',
        template: _talk_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_talk_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__, _home_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
    })
], TalkItemComponent);



/***/ }),

/***/ 7449:
/*!*****************************!*\
  !*** ./src/app/userData.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "articles": () => (/* binding */ articles),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "talks": () => (/* binding */ talks),
/* harmony export */   "talks_by_others": () => (/* binding */ talks_by_others)
/* harmony export */ });
const articles = [
    {
        name: "Double Fibrations",
        description: "This paper defines double fibrations (fibrations of double categories) and describes their key examples and properties. In particular, it shows how double fibrations relate to existing fibrational notions such as monoidal fibrations and discrete double fibrations, proves a representation theorem for double fibrations, and shows how double fibrations are a type of internal fibration.",
        published: true,
        url: "http://www.tac.mta.ca/tac/volumes/38/35/38-35abs.html",
        collab: "Geoffrey Cruttwell, Michael Lambert, and Dorette Pronk",
        year: 2022,
        arXiv: "https://arxiv.org/abs/2205.15240",
        ref: "Theory and Applications of Categories 38, p.1326-1394",
        proj: "Fibrations for Double Categories"
    },
    {
        name: "Model bicategories and their homotopy bicategories",
        description: "We give the definitions of model bicategory and q-homotopy, which are natural generalizations of the notions of model category and homotopy to the context of bicategories. We prove that the 2-dimensional localization of a model bicategory C at the weak equivalences can be computed as a bicategory Ho(C) whose 2-cells are classes of q-homotopies up to an equivalence relation.",
        published: true,
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0001870822002729",
        collab: "M.E. Descotte and E.J. Dubuc",
        year: 2022,
        arXiv: "https://arxiv.org/abs/1805.07749",
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
        arXiv: "https://arxiv.org/abs/1805.05248",
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
        arXiv: "https://arxiv.org/abs/1809.04712",
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
        arXiv: "https://arxiv.org/abs/1702.03303",
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
        arXiv: "https://arxiv.org/abs/1610.09429",
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
        arXiv: "https://arxiv.org/abs/1610.02453",
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
        arXiv: "https://arxiv.org/abs/1510.01775",
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
        arXiv: "https://arxiv.org/abs/1110.6411",
        ref: "Advances In Mathematics 234, p. 528-549",
        proj: "Tannaka-Galois"
    },
    {
        name: "The Three F's for Bicategories I: Localization by Fractions is Exact",
        description: "We study the interaction between the notions of filteredness, fractions and fibrations in the theory of bicategories, generalizing classical results for categories. We give an explicit formula for filtered pseudo-colimits of categories indexed by a bicategory, and we use it to compute the hom-categories of a bicategory of fractions. As a consequence, we show that the canonical pseudo-functor into a bicategory of fractions is exact.",
        published: false,
        url: "",
        collab: "Pablo Bustillo Vazquez and Dorette Pronk",
        year: 2021,
        arXiv: "https://arxiv.org/abs/2112.00205",
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
        arXiv: "https://arxiv.org/abs/1804.04244",
        ref: "",
        proj: "Model Bicategories"
    }
];
const talks_by_others = [
    // 0
    {
        name: "Implementing Double Categories in the Lean Proof Assistant",
        given_by: "Zach Murray",
        at: "Science Atlantic MSCS Conference",
        url_at: "https://mta.ca/current-students/department-mathematics-and-computer-science/science-atlantic-conference-2022",
        url_abs: "",
        url_video: "",
        url_slides: "https://www.mathstat.dal.ca/~mszyld/Zach_slides.pdf",
        year: 2022,
        date: "October 15",
        proj: "Fibrations for Double Categories",
    },
    // 1
    {
        name: "Colimits of Double Categories",
        given_by: "Dorette Pronk",
        at: "Groups, Rings, Lie and Hopf Algebras. IV, Memorial University",
        url_at: "https://www.mun.ca/aac/workshops/past-workshops/2022/",
        url_abs: "",
        url_video: "",
        url_slides: "https://www.mathstat.dal.ca/~mszyld/Dorette_slides_colim.pdf",
        year: 2022,
        date: "May 30",
        proj: "Fibrations for Double Categories",
    },
    // 2
    {
        name: "Doubly Lax Colimits of Double Categories with Applications",
        given_by: "Dorette Pronk",
        at: "Topos Institute Colloquium",
        url_at: "https://topos.site/topos-colloquium/2021/",
        url_abs: "",
        url_video: "https://topos.site/topos-colloquium/2021/",
        url_slides: "https://topos.site/topos-colloquium/2021/",
        year: 2021,
        date: "October 28",
        proj: "Fibrations for Double Categories",
    },
    // 3
    {
        name: "On localizations via homotopies",
        given_by: "Eduardo Dubuc",
        at: "Topos Institute Colloquium",
        url_at: "https://topos.site/topos-colloquium/",
        url_abs: "",
        url_video: "https://topos.site/topos-colloquium/",
        url_slides: "https://topos.site/topos-colloquium/",
        year: 2022,
        date: "September 15",
        proj: "Model Bicategories",
    },
    // 4
    {
        name: "Doubly Lax Colimits of Double Categories",
        given_by: "Dorette Pronk",
        at: "CT 20->21, International Category Theory Meeting Genoa (Italy)",
        url_at: "https://sites.google.com/view/ct2021",
        url_abs: "https://www.mathstat.dal.ca/~mszyld/Dorette_Abs_CT2021",
        url_video: "",
        url_slides: "https://sites.google.com/view/ct2021/programme-speakers",
        year: 2021,
        date: "August 30",
        proj: "Fibrations for Double Categories",
    },
    // 5
    {
        name: "Colimits in bicategories, fibrations, fractions and filteredness",
        given_by: "Pablo Bustillo Vazquez",
        at: "CT 20->21, International Category Theory Meeting Genoa (Italy)",
        url_at: "https://sites.google.com/view/ct2021",
        url_abs: "https://www.mathstat.dal.ca/~mszyld/Pablo_Abs_CT2021",
        url_video: "https://www.youtube.com/watch?v=n9CNqloTpC4",
        url_slides: "",
        year: 2021,
        date: "August 30",
        proj: "Minimal Fractions",
    },
    // 6
    {
        name: "Transfer of lax and pseudo functor structure",
        given_by: "Eduardo J. Dubuc",
        at: "CT 20->21, International Category Theory Meeting Genoa (Italy)",
        url_at: "https://sites.google.com/view/ct2021",
        url_abs: "",
        url_video: "",
        url_slides: "https://sites.google.com/view/ct2021/programme-speakers",
        year: 2021,
        date: "September 3",
        proj: "Model Bicategories",
    },
    // 7      
    {
        name: "Model bicategories and their homotopy bicategories",
        given_by: "M. Emilia Descotte",
        at: "CT2018 - International Category Theory Meeting, at UAc in Ponta Delgada, Portugal",
        url_at: "http://www.mat.uc.pt/~ct2018/",
        url_abs: "http://www.mat.uc.pt/~ct2018/abstracts/descotte.pdf",
        url_video: "",
        url_slides: "http://www.mat.uc.pt/~ct2018/slides/M_Descotte.pdf",
        year: 2018,
        date: "July 13",
        proj: "Model Bicategories",
    },
    // 8
    {
        name: "Quillen's model categories revisited",
        given_by: "Eduardo Dubuc",
        at: "CT2018 - International Category Theory Meeting, at UAc in Ponta Delgada, Portugal",
        url_at: "http://www.mat.uc.pt/~ct2018/",
        url_abs: "http://www.mat.uc.pt/~ct2018/abstracts/dubuc.pdf",
        url_video: "",
        url_slides: "http://www.mat.uc.pt/~ct2018/slides/E_Dubuc.pdf",
        year: 2018,
        date: "July 13",
        proj: "Model Bicategories",
    },
    // 9
    {
        name: "The Grothendieck Construction in the Lax Setting of Bicategory Theory",
        given_by: "Pablo Bustillo Vazquez",
        at: "MCA 2021, Categories and Topology special session",
        url_at: "https://www.mca2021.org/es/special-sessions/item/34-categories-and-topology",
        url_abs: "https://www.mca2021.org/tools/view-abstract?code=3480",
        url_video: "https://www.youtube.com/watch?v=X74_pjo9XIs",
        url_slides: "",
        year: 2021,
        date: "July 16",
        proj: "Minimal Fractions",
    },
];
const talks = [
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
        url_at: "https://www.mat.uc.pt/",
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
    {
        name: "Lifting PIE limits with strict projections",
        given_by: "me",
        at: "CT 20->21, International Category Theory Meeting Genoa (Italy)",
        url_at: "https://sites.google.com/view/ct2021",
        url_abs: "https://www.mathstat.dal.ca/~mszyld/Abstract_ct2021_szyld.pdf",
        url_video: "https://www.youtube.com/watch?v=qKK_1WJnIpA&t=5s",
        url_slides: "",
        year: 2021,
        date: "August 30",
        proj: "Sigma Limits",
    },
    {
        name: "The three F's in bicategory theory",
        given_by: "me",
        at: "UNAM Seminar",
        url_at: "https://sites.google.com/im.unam.mx/seminario-de-categorias-unam/inicio",
        url_abs: "https://sites.google.com/im.unam.mx/seminario-de-categorias-unam/inicio",
        url_video: "",
        url_slides: "",
        year: 2021,
        date: "April 7",
        proj: "Minimal Fractions",
    },
    {
        name: "The three F's in bicategory theory",
        given_by: "me",
        at: "ATCAT Seminar",
        url_at: "https://www.mathstat.dal.ca/~mamy/atcat/",
        url_abs: "https://www.mathstat.dal.ca/~mamy/atcat/",
        url_video: "",
        url_slides: "",
        year: 2021,
        date: "March 23",
        proj: "Minimal Fractions",
    },
    {
        name: "Model bicategories and their homotopy bicategories",
        given_by: "me",
        at: "ATCAT Seminar",
        url_at: "https://www.mathstat.dal.ca/~mamy/atcat/",
        url_abs: "https://www.mathstat.dal.ca/~mamy/atcat/",
        url_video: "",
        url_slides: "https://www.mathstat.dal.ca/~mamy/atcat/",
        year: 2020,
        date: "October 27",
        proj: "Model Bicategories",
    },
    {
        name: "The Grothendieck Construction for Double Categories",
        given_by: "me",
        at: "uOttawa Logic Seminar",
        url_at: "https://www.uottawa.ca/en",
        url_abs: "https://www.mathstat.dal.ca/~mszyld/abstract_uOttawa_szyld.pdf",
        url_video: "",
        url_slides: "https://www.mathstat.dal.ca/~mszyld/slides_uOttawa_szyld.pdf",
        year: 2020,
        date: "October 22",
        proj: "Fibrations for Double Categories",
    },
    {
        name: "Sigma limits in 2-categories and applications",
        given_by: "me",
        at: "ATCAT Seminar",
        url_at: "https://mathstat.dal.ca/~neilr/atcat.html",
        url_abs: "https://mathstat.dal.ca/~neilr/atcat.html",
        url_video: "",
        url_slides: "https://www.mathstat.dal.ca/~mszyld/sigma_limits_atcat.html",
        //note it may take a while to load the slides
        year: 2020,
        date: "March 3",
        proj: "Sigma Limits",
    },
    {
        name: "Sigma limits and applications",
        given_by: "me",
        at: " CT OctoberFest 2018, CUNY in New York, USA",
        url_at: "http://ct-octoberfest.github.io/",
        url_abs: "https://www.mathstat.dal.ca/~mszyld/szyld_abstract_Oct18.pdf",
        url_video: "",
        url_slides: "https://www.mathstat.dal.ca/~mszyld/szyld_slides_Oct18.html",
        year: 2018,
        date: "October 27",
        proj: "Sigma Limits",
    },
    {
        name: "The homotopy relation in a category with weak equivalences",
        given_by: "me",
        at: "CT2018 - International Category Theory Meeting, at UAc in Ponta Delgada, Portugal",
        url_at: "http://www.mat.uc.pt/~ct2018/",
        url_abs: "https://www.mathstat.dal.ca/~mszyld/szyld_abstract_CT18.pdf",
        url_video: "",
        url_slides: "https://www.mathstat.dal.ca/~mszyld/szyld_slides_CT18.pdf",
        year: 2018,
        date: "July 8",
        proj: "Model Bicategories",
    },
    {
        name: "Homotopy for weak equivalences ",
        given_by: "me",
        at: "Categories superieures, polygraphes et homotopie seminar at Paris Diderot, France",
        url_at: "http://www.irif.fr/gt/cat/index",
        url_abs: "https://www.mathstat.dal.ca/~mszyld/szyld_homotopywe_abstract.pdf",
        url_video: "",
        url_slides: "",
        year: 2018,
        date: "April 6",
        proj: "Model Bicategories",
    },
    {
        name: "Homotopy for weak equivalences",
        given_by: "me",
        at: "Homotopie en Geometrie Algebrique seminar at the Institut de Mathematiques de Toulouse, France",
        url_at: "https://www.math.univ-toulouse.fr/?lang=fr",
        url_abs: "https://www.mathstat.dal.ca/~mszyld/szyld_homotopywe_abstract.pdf",
        url_video: "",
        url_slides: "",
        year: 2018,
        date: "March 25",
        proj: "Model Bicategories",
    },
    {
        name: "A general limit lifting theorem for 2-dimensional monad theory",
        given_by: "me",
        at: "CT2017 - International Category Theory Meeting, at UBC in Vancouver, Canada",
        url_at: "http://www.mat.uc.pt/~ct2017/",
        url_abs: "https://www.mathstat.dal.ca/~mszyld/szyld_lifting_abstract_CT17.pdf",
        url_video: "",
        url_slides: "https://www.mathstat.dal.ca/~mszyld/szyld_lifting_slides_CT17.pdf",
        year: 2017,
        date: "July 16",
        proj: "Sigma Limits",
    },
    {
        name: "Limit lifting",
        given_by: "me",
        at: "XXVI ERAG at ICAS in Buenos Aires, Argentina",
        url_at: "http://www.mate.unlp.edu.ar/erag/",
        url_abs: "https://www.mathstat.dal.ca/~mszyld/szyld_lifting_abstract_ERAG.pdf",
        url_video: "",
        url_slides: "https://www.mathstat.dal.ca/~mszyld/szyld_lifting_slides_ERAG.pdf",
        year: 2017,
        date: "December",
        proj: "Sigma Limits",
    },
    {
        name: "Limit lifting for 2-dimensional monad theory",
        given_by: "me",
        at: "5th Workshop on Categorical Methods in Non-Abelian Algebra, UCL in Louvain-la-Neuve, Belgium",
        url_at: "http://www.mat.uc.pt/~mmc/mcana/MCANAfifthworkshop.html",
        url_abs: "https://www.mathstat.dal.ca/~mszyld/szyld_liftingtheorem_abstract.pdf",
        url_video: "",
        url_slides: "https://www.mathstat.dal.ca/~mszyld/szyld_lifting_UCL.pdf",
        year: 2017,
        date: "June",
        proj: "Sigma Limits",
    },
    {
        name: "General limit lifting",
        given_by: "me",
        at: "Categories superieures, polygraphes et homotopie seminar at Paris Diderot, France",
        url_at: "http://www.irif.fr/gt/cat/index",
        url_abs: "https://www.mathstat.dal.ca/~mszyld/szyld_liftingtheorem_abstract.pdf",
        url_video: "",
        url_slides: "",
        year: 2017,
        date: "March",
        proj: "Sigma Limits",
    },
    {
        name: "On flat functors",
        given_by: "me",
        at: "OU Algebra and Representation Theory Seminar, Oklahoma, USA",
        url_at: "http://www.ou.edu/",
        url_abs: "https://www.mathstat.dal.ca/~mszyld/OU_abstract.pdf",
        url_video: "",
        url_slides: "",
        year: 2016,
        date: "October",
        proj: "Sigma Limits",
    },
    {
        name: "The universal properties that lie behind the objects",
        given_by: "me",
        at: "UCO Math club, Oklahoma, USA",
        url_at: "http://www.uco.edu/",
        url_abs: "https://www.mathstat.dal.ca/~mszyld/UCO_abstract.pdf",
        url_video: "",
        url_slides: "",
        year: 2016,
        date: "October",
        proj: "Outreach",
    },
    {
        name: "Classifying Topoi and Galois Theory (3-lectures course)",
        given_by: "me",
        at: "UNEMAT 2014 in Bogota, Colombia",
        url_at: "http://ciencias.bogota.unal.edu.co/",
        url_abs: "https://www.mathstat.dal.ca/~mszyld/UNEMAT_Cursillo_Szyld.pdf",
        url_video: "",
        url_slides: "",
        year: 2014,
        date: "July",
        proj: "Outreach",
    },
    {
        name: "Relations in a topos: a new example of a Tannakian category",
        given_by: "me",
        at: "UNEMAT 2014 in Bogota, Colombia",
        url_at: "http://ciencias.bogota.unal.edu.co/",
        url_abs: "https://www.mathstat.dal.ca/~mszyld/UNEMAT_Conferencia_Szyld.pdf",
        url_video: "",
        url_slides: "",
        year: 2014,
        date: "July",
        proj: "Tannaka-Galois",
    },
    {
        name: "Tannakian techniques in topos representation theory",
        given_by: "me",
        at: "IV Latin American Meeting at UNC in Cordoba, Argentina",
        url_at: "http://www.famaf.unc.edu.ar/~ciem/congresos/clam2012/index.html",
        url_abs: "https://www.mathstat.dal.ca/~mszyld/abstract_clam_szyld.pdf",
        url_video: "",
        url_slides: "",
        year: 2012,
        date: "August 6",
        proj: "Tannaka-Galois",
    },
    {
        name: "A Tannakian context for Galois",
        given_by: "me",
        at: "XXI Encuentro Rioplatense de Algebra y Geometria at CMAT in Montevideo, Uruguay",
        url_at: "http://www.cmat.edu.uy/",
        url_abs: "",
        url_video: "",
        url_slides: "https://www.mathstat.dal.ca/~mszyld/ERAG_2011.pdf",
        year: 2011,
        date: "August 6",
        proj: "Tannaka-Galois",
    },
    {
        name: "A Tannakian approach to Grothendieck Galois theory",
        given_by: "me",
        at: "elENA V, Cordoba, Argentina",
        url_at: "https://www.famaf.unc.edu.ar/~ciem/congresos/elenas/elenav/index.html",
        url_abs: "https://www.famaf.unc.edu.ar/~ciem/congresos/elenas/elenav/archivos/comunicaciones/abstract/ComunicacionMartin_Szyld.pdf",
        url_video: "",
        url_slides: "",
        year: 2011,
        date: "August 9",
        proj: "Tannaka-Galois",
    },
    {
        name: "A Tannakian approach to Grothendieck Galois theory",
        given_by: "me",
        at: "annual UMA reunion, Tandil, Argentina",
        url_at: "http://www.union-matematica.org.ar/ediciones-anteriores.html",
        url_abs: "",
        url_video: "",
        url_slides: "https://www.mathstat.dal.ca/~mszyld/UMA_2010.pdf",
        year: 2011,
        date: "August 9",
        proj: "Tannaka-Galois",
    },
];
const projects = [
    { name: "Minimal Fractions", description: "", items: [], has: [0, 0, 0], collaborators: "Dorette Pronk and Pablo Bustillo Vasquez" },
    { name: "Fibrations for Double Categories", description: "", items: [], has: [0, 0, 0], collaborators: "Dorette Pronk, Marzieh Bayeh, Geoffrey Cruttwell, Michael Lambert, and Zachary Murray" },
    { name: "Model Bicategories", description: "", items: [], has: [0, 0, 0], collaborators: "Eduardo Dubuc and M. Emilia Descotte" },
    { name: "Sigma Limits", description: "", items: [], has: [0, 0, 0], collaborators: "Eduardo Dubuc and M. Emilia Descotte" },
    { name: "Tannaka-Galois", description: "", items: [], has: [0, 0, 0], collaborators: "Eduardo Dubuc" },
    { name: "Outreach", description: "", items: [], has: [0, 0, 0], collaborators: "" },
];


/***/ }),

/***/ 7031:
/*!*********************************************************************!*\
  !*** ./src/app/article-item/article-item.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  margin: 0;\n  font-family: Tahoma;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container {\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 0px;\n  margin-top: 0px;\n  background-color: FloralWhite;\n  height: 100%;\n}\n\nion-content {\n  --background: var(--ion-background-color, FloralWhite);\n}\n\nh2 {\n  font-family: Tahoma, Verdana, Segoe, sans-serif;\n  font-size: 18px;\n}\n\n.project-list-item {\n  background-color: #f4f5f8;\n}\n\n.list-item {\n  background-color: #d7d8da;\n}\n\n.article-accordion {\n  padding: 1ex 5ex;\n}\n\n.my128icon {\n  height: 96px;\n  width: 96px;\n}\n\n.my64icon {\n  height: 64px;\n  width: 84px;\n}\n\n.my48icon {\n  height: 40px;\n  width: 80px;\n}\n\n.my48squareicon {\n  height: 48px;\n  width: 48px;\n}\n\nh2 {\n  text-align: center;\n}\n\n.div_img_labeling {\n  text-align: center;\n}\n\n.article-span {\n  display: inline-block;\n  width: 12.5%;\n  vertical-align: top;\n}\n\n.article-span-1 {\n  width: 75%;\n}\n\n.article-ref {\n  width: 100%;\n  text-align: left;\n  margin-top: 3px;\n}\n\n.article-proj {\n  width: 100%;\n  text-align: left;\n  margin-top: 3px;\n}\n\n.article-div-desc {\n  margin-bottom: 15px;\n}\n\n.article-div-1 {\n  vertical-align: top;\n}\n\n.article-div-coll {\n  font-style: italic;\n  margin-bottom: 15px;\n}\n\n.project_div {\n  scroll-margin-top: 75px;\n}\n\n.button_center {\n  vertical-align: middle;\n}\n\n.big_text_size {\n  font-size: larger;\n}\n\n.background_floral {\n  background-color: floralwhite;\n}\n\n.big_div {\n  display: block;\n}\n\n.inline_span {\n  display: inline;\n  height: 250px;\n}\n\n.left_span {\n  width: 75%;\n  vertical-align: top;\n  display: inline-block;\n}\n\n.right_span {\n  width: 25%;\n  display: inline-block;\n  padding-top: 10px;\n}\n\n.my_pic {\n  max-height: 250px;\n}\n\n.center_text {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXFBlcnNvbmFsJTIwV2Vic2l0ZSUyMGJ5JTIwUHJvamVjdHNcXHNyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREdBO0VBQ0Usc0RBQUE7QUNBRjs7QURHQTtFQUNFLCtDQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLFVBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsNkJBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBUYWhvbWE7XHJcbn1cclxuXHJcbiNjb250YWluZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBGbG9yYWxXaGl0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgRmxvcmFsV2hpdGUpO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1mYW1pbHk6IFRhaG9tYSwgVmVyZGFuYSwgU2Vnb2UsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1saXN0LWl0ZW0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY1Zjg7XHJcbn1cclxuXHJcbi5saXN0LWl0ZW0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2Q4ZGE7XHJcbn1cclxuXHJcbi5hcnRpY2xlLWFjY29yZGlvbntcclxuICBwYWRkaW5nOiAxZXggNWV4O1xyXG59XHJcblxyXG4ubXkxMjhpY29uIHtcclxuICBoZWlnaHQ6IDk2cHg7XHJcbiAgd2lkdGg6IDk2cHg7XHJcbn1cclxuXHJcbi5teTY0aWNvbiB7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIHdpZHRoOiA4NHB4O1xyXG59XHJcblxyXG4ubXk0OGljb24ge1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogODBweDtcclxufVxyXG5cclxuLm15NDhzcXVhcmVpY29uIHtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXZfaW1nX2xhYmVsaW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hcnRpY2xlLXNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTIuNSU7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLmFydGljbGUtc3Bhbi0xIHtcclxuICB3aWR0aDogNzUlO1xyXG59XHJcblxyXG4uYXJ0aWNsZS1yZWYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4uYXJ0aWNsZS1wcm9qIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLmFydGljbGUtZGl2LWRlc2N7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmFydGljbGUtZGl2LTEge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi5hcnRpY2xlLWRpdi1jb2xsIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnByb2plY3RfZGl2IHtcclxuICBzY3JvbGwtbWFyZ2luLXRvcDogNzVweDtcclxufVxyXG5cclxuLmJ1dHRvbl9jZW50ZXJ7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmJpZ190ZXh0X3NpemUge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZF9mbG9yYWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGZsb3JhbHdoaXRlO1xyXG59XHJcblxyXG4uYmlnX2RpdiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5pbmxpbmVfc3BhbiB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi5sZWZ0X3NwYW4ge1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5yaWdodF9zcGFuIHtcclxuICB3aWR0aDogMjUlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLm15X3BpYyB7XHJcbiAgbWF4LWhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi5jZW50ZXJfdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IiwiI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBUYWhvbWE7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBGbG9yYWxXaGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsIEZsb3JhbFdoaXRlKTtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogVGFob21hLCBWZXJkYW5hLCBTZWdvZSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucHJvamVjdC1saXN0LWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY4O1xufVxuXG4ubGlzdC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDhkYTtcbn1cblxuLmFydGljbGUtYWNjb3JkaW9uIHtcbiAgcGFkZGluZzogMWV4IDVleDtcbn1cblxuLm15MTI4aWNvbiB7XG4gIGhlaWdodDogOTZweDtcbiAgd2lkdGg6IDk2cHg7XG59XG5cbi5teTY0aWNvbiB7XG4gIGhlaWdodDogNjRweDtcbiAgd2lkdGg6IDg0cHg7XG59XG5cbi5teTQ4aWNvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi5teTQ4c3F1YXJlaWNvbiB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGl2X2ltZ19sYWJlbGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFydGljbGUtc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEyLjUlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uYXJ0aWNsZS1zcGFuLTEge1xuICB3aWR0aDogNzUlO1xufVxuXG4uYXJ0aWNsZS1yZWYge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uYXJ0aWNsZS1wcm9qIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmFydGljbGUtZGl2LWRlc2Mge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uYXJ0aWNsZS1kaXYtMSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5hcnRpY2xlLWRpdi1jb2xsIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ucHJvamVjdF9kaXYge1xuICBzY3JvbGwtbWFyZ2luLXRvcDogNzVweDtcbn1cblxuLmJ1dHRvbl9jZW50ZXIge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uYmlnX3RleHRfc2l6ZSB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG4uYmFja2dyb3VuZF9mbG9yYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcbn1cblxuLmJpZ19kaXYge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmlubGluZV9zcGFuIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuXG4ubGVmdF9zcGFuIHtcbiAgd2lkdGg6IDc1JTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucmlnaHRfc3BhbiB7XG4gIHdpZHRoOiAyNSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5teV9waWMge1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbn1cblxuLmNlbnRlcl90ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";

/***/ }),

/***/ 2769:
/*!***********************************************************************!*\
  !*** ./src/app/preprint-item/preprint-item.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVwcmludC1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 3848:
/*!*********************************************************************!*\
  !*** ./src/app/project-item/project-item.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = ".false_b {\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtaXRlbS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxQZXJzb25hbCUyMFdlYnNpdGUlMjBieSUyMFByb2plY3RzXFxzcmNcXGFwcFxccHJvamVjdC1pdGVtXFxwcm9qZWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWxzZV9iIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn0iLCIuZmFsc2VfYiB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59Il19 */";

/***/ }),

/***/ 2242:
/*!***************************************************************!*\
  !*** ./src/app/talk-item/talk-item.component.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWxrLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 1551:
/*!*********************************************************************!*\
  !*** ./src/app/article-item/article-item.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-accordion-group class=\"article-accordion\"  value={{item.name}} >\n  <ion-accordion  > \n    <ion-item slot=\"header\"  color=\"primary\" > \n      <ion-label class=\"big_text_size\">{{item.year}}. {{item.name}}</ion-label>\n    </ion-item>\n    <div class=\"ion-padding list-item\" slot=\"content\">\n        <div class=\"article-div-1\">\n            <span class=\"article-span article-span-1\">\n              <div class=\"article-div-desc\">\n                <p>{{item.description}}</p>\n              </div>\n              <div class=\"article-div-coll\" *ngIf=\"item.collab != ''\">\n                <p>(with {{item.collab}})</p>\n              </div>\n            </span>\n            <span class=\"article-span\" > \n              <div class=\"div_img_labeling\">\n                <a href={{item.url}} target=\"_blank\"><img class=\"my128icon\" src=\"./assets/images/science_direct_icon_transp.png\"></a>  \n              </div>\n              <div class=\"div_img_labeling\">\n                Journal\n              </div>\n            </span>\n            <span class=\"article-span\"> \n              <div class=\"div_img_labeling\">\n                <a href={{item.arXiv}} target=\"_blank\"><img class=\"my128icon\" src=\"./assets/images/128x128.png\"></a> \n              </div>\n              <div class=\"div_img_labeling\">\n                arXiv\n              </div>\n            </span>\n      </div>\n\n      <div class=\"article-ref\">\n        <p>\n          Journal ref: {{item.ref}}, ({{item.year}}).\n        </p>\n      </div>\n\n      <div class=\"article-proj\" *ngIf=\"showProject\">\n        <p>\n          Part of project: \n          <ion-button color=\"light\" (click)=\"gotoProject()\">{{item.proj}}</ion-button>\n          \n        </p>\n      </div>\n    </div>\n  </ion-accordion>\n </ion-accordion-group> ";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n<ion-toolbar >\r\n  <ion-title class=\"background_floral\">\r\n    <ion-segment [value]=\"selectedSegment\" (ionChange)=\"segmentHasChanged($event)\" class=\"top_segment\">\r\n      <ion-segment-button class=\"top_button\" [value]=-1>\r\n        <ion-label>Main and News</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button class=\"top_button\" [value]=0>\r\n        <ion-label>Projects</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button class=\"top_button\" [value]=1>\r\n        <ion-label>Articles and Preprints</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button class=\"top_button\" [value]=2>\r\n        <ion-label>Talks</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-content class=\"background_floral\">\r\n  <div id=\"container\" [ngSwitch]=\"selectedSegment\">\r\n      \r\n    <div *ngSwitchCase=-1 class=\"big_div\">\r\n      <div class=\"top_div\">\r\n\r\n        <span class=\"left_span\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title class=\"center_text\">Welcome to my math research home page!</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <p> I'm a mathematician from Argentina working on Category Theory and living in Nova Scotia, Canada as a permanent resident.</p>\r\n              <p>I was a postdoc at <a href=\"https://www.dal.ca/\" target=\"_blank\">Dalhousie University</a> and at the \r\n              <a href=\"https://www.uba.ar/\" target=\"_blank\">University of Buenos Aires</a>, where I got my PhD.</p>\r\n              <p> Clicking the menu on top, you can access {{this.articles.length}} research papers, \r\n                  {{this.talks.length}} talks given by me,\r\n                  and {{this.talks_by_others.length}} talks given by my collaborators and students,\r\n                  organized in {{this.projects.length}} research projects.\r\n              </p>\r\n              <p>Do you want more info on any research item? Is there a broken link? You can contact me: <span class=\"button_center\"><a href=\"mailto:mszyld@dal.ca\"><img class=\"my48squareicon\" src=\"./assets/images/email-logo.png\"></a></span></p>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </span>\r\n\r\n        <span class=\"right_span\">\r\n          <img class=\"my_pic\"  alt=\"A picture of me, Martin Szyld\" src=\"./assets/images/martin.gif\" > \r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"middle_div\">\r\n        <h3 class=\"center_text\">Latest News</h3>\r\n        \r\n        <li>Nov 2022: Our <b>Double Fibrations</b> paper was published in TAC:</li>\r\n        <app-article-item [value]=\"articles[0]\" [showProject]=\"true\" (onProjectClick)=\"selectProjectByName($event)\">  </app-article-item>  \r\n        \r\n        <li>Oct 2022: Talk by Zachary Murray at Science Atlantic about our work with double categories and proof assistants:</li>\r\n        <app-talk-item  [value]=\"talks_by_others[0]\" [showProject]=\"true\" (onProjectClick)=\"selectProjectByName($event)\">  </app-talk-item>  \r\n\r\n        <li>Sep 2022: Talk by Eduardo Dubuc at the Topos Institute about localizations and homotopies:</li>\r\n        <app-talk-item  [value]=\"talks_by_others[3]\" [showProject]=\"true\" (onProjectClick)=\"selectProjectByName($event)\">  </app-talk-item>  \r\n\r\n        <li>Aug 2022: Our <b>Model Bicategories</b> paper was published in Advances in Mathematics:</li>\r\n        <app-article-item [value]=\"articles[1]\" [showProject]=\"true\" (onProjectClick)=\"selectProjectByName($event)\">  </app-article-item>  \r\n        \r\n        <li>June 2022: Talk by me at the 2022 CMS Summer Meeting about Tannaka and Galois theory:</li>\r\n        <app-talk-item  [value]=\"talks[0]\" [showProject]=\"true\" (onProjectClick)=\"selectProjectByName($event)\">  </app-talk-item>  \r\n\r\n        <li>May 2022: Talk by Dorette Pronk at Memorial University about our work with colimits of double categories:</li>\r\n        <app-talk-item  [value]=\"talks_by_others[1]\" [showProject]=\"true\" (onProjectClick)=\"selectProjectByName($event)\">  </app-talk-item>  \r\n\r\n        <li>May 2022: Talk by me at Univ. of Coimbra's ALT Seminar about double categories:</li>\r\n        <app-talk-item  [value]=\"talks[1]\" [showProject]=\"true\" (onProjectClick)=\"selectProjectByName($event)\">  </app-talk-item>  \r\n\r\n        <li>Oct 2021: Talk by Dorette Pronk at the Topos Institute about our doubly lax colimits:</li>\r\n        <app-talk-item  [value]=\"talks_by_others[2]\" [showProject]=\"true\" (onProjectClick)=\"selectProjectByName($event)\">  </app-talk-item>  \r\n\r\n        <li>Aug 2021: Talk by Pablo Bustillo Vazquez at CT 20->21 about our three F's for bicategories work:</li>\r\n        <app-talk-item  [value]=\"talks_by_others[5]\" [showProject]=\"true\" (onProjectClick)=\"selectProjectByName($event)\">  </app-talk-item>  \r\n        \r\n        <li>July 2021: Talk by Pablo Bustillo Vazquez at MCA 2021 about our bicategories work:</li>\r\n        <app-talk-item  [value]=\"talks_by_others[9]\" [showProject]=\"true\" (onProjectClick)=\"selectProjectByName($event)\">  </app-talk-item>  \r\n        \r\n        <li>2021: We organized a Special session at the Mathematical Congress of the Americas:</li>\r\n        <ion-accordion-group class=\"article-accordion\">\r\n          <ion-accordion> \r\n            <ion-item slot=\"header\"  color=\"light\" > \r\n              <ion-label class=\"big_text_size\"> 2021. Categories and Topology, Special session at the Mathematical Congress of the Americas</ion-label>\r\n            </ion-item>\r\n            <div class=\"ion-padding list-item\" slot=\"content\">\r\n              Co-organized with Eduardo Dubuc and Dorette Pronk. \r\n              <a href=\"https://www.mca2021.org/en/special-sessions/item/34-categories-and-topology\" target=\"_blank\"> Schedule and abstracts</a>, \r\n              <a href=\"https://www.youtube.com/channel/UC5po2sqHjuuxUcL66bWsuoA/videos\" target=\"_blank\">videos</a> of the 23 talks.  \r\n            </div>\r\n          </ion-accordion>\r\n        </ion-accordion-group>\r\n      </div>\r\n\r\n      <p>I built this page in 2022 as a first <em>webdev</em> project, using <span class=\"button_center\"><img class=\"my64icon\" src=\"./assets/images/angular-logo.png\"></span> \r\n        and <span class=\"button_center\"><img class=\"my48icon\" src=\"./assets/images/ionic-logo.png\"></span>. \r\n          Do you want to quickly build a similar webpage? Contact me! <span class=\"button_center\"><a href=\"mailto:mszyld@dal.ca\"><img class=\"my48squareicon\" src=\"./assets/images/email-logo.png\"></a></span>\r\n      </p>\r\n    </div>\r\n\r\n    <div *ngSwitchCase=0>\r\n      <h2>There are {{this.projects.length}} projects. Click on each project to see my collaborators, and a list of its \r\n        <span class=\"button_center\"><ion-button disabled color=\"success\">talks</ion-button></span>, \r\n      <span class=\"button_center\"><ion-button disabled color=\"secondary\">preprints</ion-button></span>, and\r\n      <span class=\"button_center\"><ion-button disabled color=\"primary\">articles</ion-button></span>.</h2>\r\n\r\n      <div *ngFor=\"let item of projects\">\r\n        <div class=\"project_div\" [id]=\"item.name\">\r\n          <app-project-item   [value]=\"item\" [sel]=\"selectedProject\">  </app-project-item>  \r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngSwitchCase=1>\r\n      <h2>There is a total of {{this.articles.length}} research papers. \r\n        Click on each published <span class=\"button_center\"><ion-button disabled color=\"primary\">article</ion-button></span>\r\n        or <span class=\"button_center\"><ion-button disabled color=\"secondary\">preprint</ion-button></span> below for its details. \r\n        Then, for each paper you can click on its <span class=\"button_center\"><ion-button disabled color=\"light\">project</ion-button></span> \r\n        button to see all the items on that same project.\r\n      </h2> \r\n      <div *ngFor=\"let item of articles\">\r\n        <app-article-item *ngIf=\"item.published\" [value]=\"item\" [showProject]=\"true\" (onProjectClick)=\"selectProjectByName($event)\">  </app-article-item>  \r\n        <app-preprint-item *ngIf=\"item.published===false\" [value]=\"item\" [showProject]=\"true\" (onProjectClick)=\"selectProjectByName($event)\">  </app-preprint-item>  \r\n      </div>\r\n    </div>\r\n\r\n    <div *ngSwitchCase=2>\r\n      <h2>There are {{this.talks.length}} talks given by me, and below there are {{this.talks_by_others.length}} talks given by my collaborators and students. Click on each \r\n        <span class=\"button_center\"><ion-button disabled color=\"success\">talk</ion-button></span> for its details. \r\n        Then, for each talk you can click on its <span class=\"button_center\"><ion-button disabled color=\"light\">project</ion-button></span> \r\n        button to see all the items on that same project.\r\n      </h2>\r\n      <div *ngFor=\"let item of talks\">\r\n        <app-talk-item  [value]=\"item\" [showProject]=\"true\" (onProjectClick)=\"selectProjectByName($event)\">  </app-talk-item>  \r\n      </div>\r\n      <h3 class=\"center_text\"> Talks given by my collaborators and students </h3> \r\n      <div *ngFor=\"let item of talks_by_others\">\r\n          <app-talk-item  [value]=\"item\" [showProject]=\"true\" (onProjectClick)=\"selectProjectByName($event)\">  </app-talk-item>  \r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 6422:
/*!***********************************************************************!*\
  !*** ./src/app/preprint-item/preprint-item.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-accordion-group  class=\"article-accordion\"  value={{item.name}} >\n      <ion-accordion  > \n        <ion-item slot=\"header\"  color=\"secondary\" > \n          <ion-label class=\"big_text_size\">{{item.year}}. {{item.name}}</ion-label>\n        </ion-item>\n        <div class=\"ion-padding list-item\" slot=\"content\">\n            <div class=\"article-div-1\">\n                <span class=\"article-span article-span-1\">\n                  <div class=\"article-div-desc\">\n                    <p>{{item.description}}</p>\n                  </div>\n                  <div class=\"article-div-coll\" *ngIf=\"item.collab != ''\">\n                    <p>(with {{item.collab}})</p>\n                  </div>\n                </span>\n                <span class=\"article-span\"> \n                  <div class=\"div_img_labeling\">\n                    <a href={{item.arXiv}} target=\"_blank\"><img class=\"my128icon\" src=\"./assets/images/128x128.png\"></a> \n                  </div>\n                  <div class=\"div_img_labeling\">\n                    arXiv\n                  </div>\n                </span>\n          </div>\n\n          <div class=\"article-proj\" *ngIf=\"showProject\">\n            <p>\n              Part of project: \n              <ion-button color=\"light\" (click)=\"gotoProject()\">{{item.proj}}</ion-button>\n            </p>\n          </div>\n        </div>\n      </ion-accordion>\n     </ion-accordion-group> ";

/***/ }),

/***/ 9555:
/*!*********************************************************************!*\
  !*** ./src/app/project-item/project-item.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-accordion-group class=\"article-accordion\" value={{this.selectedProject}}> \n  <!--  -->\n  <ion-accordion value={{item.name}}> \n    <ion-item slot=\"header\"  color=\"light\" >\n      <!--   -->\n      <ion-label class=\"big_text_size\">\n        {{item.name}}\n      </ion-label>\n    </ion-item>\n    \n    <div class=\"ion-padding project-list-item\" slot=\"content\">\n      \n      <div class=\"article-div-desc\">\n\n        <p *ngIf=\"item.collaborators!=''\"> This is a project in collaboration with {{item.collaborators}}. </p>\n\n        <p> This project has a total of {{item.items.length}} items: \n          {{item.has[0]}} talk<b class=\"false_b\" *ngIf=\"item.has[0]!=1\">s</b>, \n          {{item.has[1]}} preprint<b class=\"false_b\" *ngIf=\"item.has[1]!=1\">s</b>, and\n          {{item.has[2]}} article<b class=\"false_b\" *ngIf=\"item.has[2]!=1\">s</b>.</p>\n\n        <p>{{item.description}}</p>\n      </div>\n\n      <div *ngFor=\"let this_item of item.items\">\n        <div *ngIf=\"isArticle(this_item)\">\n          <!-- Option 1: published article   -->\n           <app-article-item *ngIf=\"this_item.published\" [showProject]=\"false\" [value]=\"this_item\">  </app-article-item>   \n          <!-- Option 2: unpublished article (preprint) -->\n           <app-preprint-item *ngIf=\"this_item.published==false\" [showProject]=\"false\" [value]=\"this_item\">  </app-preprint-item>   \n        </div>\n        <div *ngIf=\"isTalk(this_item)\">\n            <!-- Option 3: talk -->\n           <app-talk-item  [value]=\"this_item\" [showProject]=\"false\">  </app-talk-item>   \n        </div>\n\n      </div>\n      \n    </div>\n\n\n  </ion-accordion>\n</ion-accordion-group>\n";

/***/ }),

/***/ 6935:
/*!***************************************************************!*\
  !*** ./src/app/talk-item/talk-item.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-accordion-group class=\"article-accordion\"  value={{item.name}} >\n  <ion-accordion  > \n    <ion-item slot=\"header\" color=\"success\"  > \n      <ion-label class=\"big_text_size\">{{item.year}} ({{item.date}}). {{item.name}}</ion-label>\n    </ion-item>\n    <div class=\"ion-padding list-item\" slot=\"content\" color=\"tertiary\">\n        <div class=\"article-div-1\">\n            <span class=\"article-span article-span-1\">\n              <div class=\"article-div-desc\">\n                <p> Given by {{item.given_by}} at the <a href={{item.url_at}} target=\"_blank\">{{item.at}}</a>. </p>\n              </div>\n              <!-- <div class=\"article-div-coll\" *ngIf=\"item.collab != ''\">\n                <p>(with {{item.collab}})</p>\n              </div> -->\n              <div class=\"article-proj\" *ngIf=\"showProject\">\n               <p>\n                 Part of project:           \n                 <ion-button color=\"light\" (click)=\"gotoProject()\">{{item.proj}}</ion-button>\n               </p>\n             </div>\n            </span>\n            <span class=\"article-span\" *ngIf=\"item.url_slides != ''\"> \n              <div class=\"div_img_labeling\">\n                <a href={{item.url_slides}} target=\"_blank\"><img class=\"my128icon\" src=\"./assets/images/128x128.png\"></a>  \n              </div>\n              <div class=\"div_img_labeling\">\n                Slides\n              </div>\n            </span>\n            <span class=\"article-span\"  *ngIf=\"item.url_abs != ''\"> \n              <div class=\"div_img_labeling\" >\n                <a href={{item.url_abs}} target=\"_blank\"><img class=\"my128icon\" src=\"./assets/images/128x128.png\"></a> \n              </div>\n              <div class=\"div_img_labeling\">\n                Abstract\n              </div>\n            </span>\n            <span class=\"article-span\"  *ngIf=\"item.url_video != ''\"> \n              <div class=\"div_img_labeling\" >\n                <a href={{item.url_video}} target=\"_blank\"><img class=\"my128icon\" src=\"./assets/images/video-icon.png\"></a> \n              </div>\n              <div class=\"div_img_labeling\">\n                Video\n              </div>\n            </span>\n      </div>\n\n     \n    </div>\n  </ion-accordion>\n </ion-accordion-group>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map