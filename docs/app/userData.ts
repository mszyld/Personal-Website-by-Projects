import {Project, Article, Talk} from './interfaces' 

export const articles : Article[] = [

     

  { 
    name: "Double Fibrations", 
    description: "This paper defines double fibrations (fibrations of double categories) and describes their key examples and properties. In particular, it shows how double fibrations relate to existing fibrational notions such as monoidal fibrations and discrete double fibrations, proves a representation theorem for double fibrations, and shows how double fibrations are a type of internal fibration.", 
    published: true, 
    url: "http://www.tac.mta.ca/tac/volumes/38/35/38-35abs.html", 
    collab: "Geoffrey Cruttwell, Michael Lambert, and Dorette Pronk",
    year: 2022, 
    arXiv:"https://arxiv.org/abs/2205.15240", 
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

  export const talks_by_others: Talk[] = [
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
    



    
    

    

    
  ]

  export const talks: Talk[] = [

 

    


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

  export const projects: Project[] = [
  { name: "Minimal Fractions", description: "", items: [], has: [0,0,0], collaborators: "Dorette Pronk and Pablo Bustillo Vasquez"},
  { name: "Fibrations for Double Categories", description: "", items: [], has: [0,0,0], collaborators: "Dorette Pronk, Marzieh Bayeh, Geoffrey Cruttwell, Michael Lambert, and Zachary Murray"},
  { name: "Model Bicategories", description: "", items: [], has: [0,0,0], collaborators: "Eduardo Dubuc and M. Emilia Descotte"},
  { name: "Sigma Limits", description: "", items: [], has: [0,0,0], collaborators: "Eduardo Dubuc and M. Emilia Descotte"},
  { name: "Tannaka-Galois", description: "", items: [], has: [0,0,0], collaborators: "Eduardo Dubuc"},
  { name: "Outreach", description: "", items: [], has: [0,0,0], collaborators: ""},
];

