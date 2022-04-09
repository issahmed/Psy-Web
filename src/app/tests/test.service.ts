import { Injectable } from '@angular/core';
import { Test } from './test.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  // gerer les testes 

  extraversionResult : string ="Plus votre score est faible (au moins inférieur à 15) "
+"plus vous êtes introverti(e) et peu expansif(ve). Vous avez tendance à être calme , "
+"modéré(e) et peu impliqué(e) dans la vie des autres. Plutôt timide, effacé(e) et silencieux(se)"
+"en groupe, vous préférez le plus souvent vous consacrer à des activités solitaires et être seul(e)."
+"Si votre score est élevé, vous êtes plein(e) d’énergie et éprouvez des émotions positives."
+" Vous avez tendance à être loquace, actif(ve), voire exubérant(e). Vous êtes très à l’aise en groupe et"
+" puisez votre dynamisme dans l’interaction avec les autres. Vous parlez et vous affirmez facilement"
+"et attirez l’attention sur vous. Vous vous montrez enthousiaste pour des projets excitants.";
  extraversionQuestions =[
    "► J’aime pratiquer des activités variées et nouvelles" ,
    "► J’aime faire la fête avec beaucoup de gens autour de moi ",
    "► J’aime plaisanter et m’amuser avec les autres. ",
    "► Je fais généralement les choses avec enthousiasme et excitation.",
    "► J’aime lorsque le rythme de ma vie est intense et rapide",
    "► J’aime me trouver au cœur de l’action. ",
    "► Je suis très sociable et me fais facilement des amis.",
    "► Je dis aux autres ce que je pense.",
    "► Je parle facilement, même avec des inconnus.",
    "► Je suis une personne optimiste et généralement de bonne humeur" ,
    ];


  AgréabilitéResult : string ="Si votre score est faible (au moins inférieur à 15), vous avez tendance à être sceptique et à douter des"
+"intentions d’autrui. Vous préférez entrer en compétition plutôt que de coopérer, et défendez davantage "
+"vos intérêts que ceux du groupe. Vous êtes en général distant(e) et peu sensible au bien-être d’autrui, "
+"ce qui donne parfois l’impression que vous êtes centré(e) sur vous. "
+"Plus votre score est élevé, plus vous êtes prévenant(e), serviable et disposé(e) à trouver un terrain "
+"d’entente en cas de conflit. Honnête et droit(e), vous êtes digne de confiance et foncièrement "
+"généreux(se) et altruiste. Sympathique, respectueux(se) et amical(e), vous vous entendez bien avec "
+"les autres. Vous acceptez les autres dans leurs différences, sans critique. Sensible, indulgent(e) de "
+"nature, vous êtes doué(e) de compassion et pensez que les autres le sont également.";

AgréabilitéQuestion=[ 
      "► J’ai tendance à faire confiance aux autres." ,
      "► J’aide les autres quand ils ont besoin de moi." ,
      "► Je suis honnête et ne pourrais pas tromper les autres." ,    
      "► Je suis de nature généreuse.",
      "► J’ai tendance à pardonner et ne suis pas rancunier(ère)." ,    
      "► J’aime faire plaisir à ma famille et mes amis.",
      "► Je préfère valoriser les autres que moi-même. " ,
      "► Je suis poli(e) et respectueux(se) quand je parle aux autres. ",
      "► Je pense que la plupart des personnes sont honnêtes et gentilles.",
      "► Je partage mes affaires avec mes amis. ", 
      ]

  CarconsciencieuxResult :string =
"  Si votre score est faible (au moins inférieur à 15), vous éprouvez beaucoup de plaisir à pratiquer des"
+"activités de courte durée, et avez des difficultés à rester concentré(e) sur vos objectifs. Impulsif(ve),"
+"vous êtes perçu(e) comme une personne amusante et boute-en-train en société. Vous ne savez pas "
+"toujours respecter les limites, ce qui peut vous rendre irréfléchi(e), dispersé(e), voire imprudent(e)."
+"Vous ne pensez parfois pas aux conséquences de vos paroles, de vos actes, ce qui peut entraver votre "
+"réussite, notamment au travail. "
+"Si votre score est élevé, vous êtes prudent(e), réfléchi(e), fiable et savez éviter les difficultés. Vous "
+"atteignez facilement vos objectifs grâce à vos capacités d’anticipation et d’organisation. Vous êtes "
+"perspicace et déterminé(e). Parfois, vous êtes très perfectionniste, soucieux(se) de l’ordre dans vos "
+"tâches et au travail." ;

CarconsciencieuxQuestions =[
        "► Je suis quelqu’un de prudent(e) et j’ai les pieds sur terre",
        "► Je suis fidèle aux engagements que je prends. ",
        "► Je suis quelqu’un de méthodique et de très organisé." ,
        "► Je n’agis jamais sans réfléchir aux conséquences.",
        "► Je m’investis beaucoup dans tout ce que j’entreprends. ",
        "► Je travaille dur jusqu’à ce que j’obtienne ce que je souhaite. ",
        "► Je suis soucieux(se) de respecter mes principes moraux. ",
        "► Je suis respectueux(se) des règles et des interdits.",
        "► Je fais les choses avec soin et vérifie que mon travail est bien fait.",
        "► Je recherche le meilleur et la perfection dans tout ce que je fais." ,
        ]

  NévrosismeResult : string =
"Plus votre score est faible (au moins inférieur à 15), plus vous êtes émotionnellement stable. Vous êtes "
+"en général calme, d’humeur égale et détendu(e). Vous affrontez les situations stressantes sans vous "
+"déstabiliser, sans inquiétude et avec confiance. Vous prenez le temps d’interpréter les événements "
+"avec discernement et agissez de façon raisonnée, non impulsive. Vous avez tendance à éprouver peu "
+"d’émotions négatives. "
+"Si votre score est élevé, vous éprouvez souvent de l’anxiété, de la colère ou de la peur. Vous êtes très "
+"réactif(ve) sur le plan émotionnel, voire instable, avec une humeur changeante et négative. Vous avez "
+"tendance à interpréter des situations ordinaires comme menaçantes, et des événements mineurs "
+"comme insurmontables. Vous êtes souvent tendu(e) et avez en général beaucoup de difficultés à gérer "
+"le stress de la vie quotidienne. Vos émotions peuvent entraver votre capacité à raisonner et votre "
+"lucidité, d’où parfois des prises de décisions inadaptées. Vous avez aussi tendance à être triste et "
+"déprimé(e)." ;

  NévrosismeQuestions =[
          "► J’ai tendance à être anxieux(se), tendu(e)" ,
          "► Je n’ai pas une bonne opinion de moi-même. ",
          "► Je m’inquiète et m’angoisse très facilement, même pour des choses sans importance.",
          "► J’ai tendance à me sentir inférieur(e) aux autres. ",
          "► Je me mets facilement en colère.",
          "► Je me vexe souvent.",
          "► Je suis impulsif(ve) et contrôle mal mes émotions et mes sentiments.",
          "► Je me dispute facilement avec les autres pour des choses sans importance.",
          "► Je suis souvent de mauvaise humeur.",
          "► Je me sens souvent triste.",        
          ];

  OuvertureResult : string =
"Si votre score est faible (au moins inférieur à 15), vous avez tendance à être terre à terre, "
+"conventionnel(le) et fuyez l’originalité, l’extravagance. Vous écoutez assez peu vos sentiments et "
+"émotions, vous êtes plutôt centré(e) sur vos objectifs. Vous privilégiez les aspects pratiques et les "
+"choses qui ont déjà fait leurs preuves. Vous avez peu de centres d’intérêt et portez assez peu d’attention "
+"aux activités artistiques, esthétiques, scientifiques et métaphysiques. Vous appréciez davantage un "
+"environnement familier et êtes routinier(ère). Vos habitudes vous rassurent, alors que le changement "
+"et la nouveauté peuvent vous inquiéter."
+"Plus votre score est élevé, plus vous êtes curieux(se), inventif(ve) et imaginatif(ve). Vous appréciez l’art, "
+"les activités diversifiées et non conventionnelles. Vous êtes davantage attiré(e) par la complexité, le sens "
+"caché des événements, l’ambiguïté, que par les évidences. Vous aimez jouer avec les idées, avoir des "
+"discussions profondes et existentielles avec vos amis. La nouveauté, le changement ainsi que la différence "
+"chez autrui guident vos intérêts et vos actions. Vous écoutez vos sentiments et avez tendance à penser "
+"et à agir de façon personnelle, voire non conformiste (vous êtes indépendant(e) dans vos jugements)." ;

OuvertureQuestions =[
            "►Je prends du plaisir à me laisser aller à des rêveries.", 
            "► Je ressens parfois des frissons lorsque j’écoute de la musique. ",
            "► J’accorde une grande importance à mes sentiments et à ceux des autres.",
            "► Je me cultive en lisant, en regardant des émissions scientifiques ou culturelles à la télévision.",
            "► J’ai beaucoup d’imagination. ",
            "► J’aime me tenir informé(e) et savoir ce qui se passe dans le monde. ",
            "► Je prends du plaisir à réfléchir sur de grandes questions existentielles portant sur l’homme, la nature, l’Univers.",
            "► J’aimerais beaucoup voyager et découvrir les coutumes,",
            "► habitudes de vie des autres pays.",
            "► Je cherche à rompre la monotonie et les habitudes.",
            "► J’aime connaître et apprendre des choses nouvelles.",
            ]

  // les tests a faire 

  
  private tests : Test[] = [
    new Test("Extraversion","this the description of the test ","../../assets/img1.jfif",this.extraversionQuestions,this.extraversionResult ),
    new Test("Agréabilité","this the description of the te ","../../assets/img2.jfif",this.AgréabilitéQuestion,this.AgréabilitéResult),
    new Test(" Caractère consciencieux ","this the description of the","../../assets/img3.jfif",this.CarconsciencieuxQuestions,this.CarconsciencieuxResult),
    new Test("Névrosisme","this the description of the test ","../../assets/img1.jfif",this.NévrosismeQuestions,this.NévrosismeResult),
    new Test("Ouverture à l’expérience","this the description of the te ","../../assets/img2.jfif",this.OuvertureQuestions,this.OuvertureResult),
    // new Test("test 3 ","this the description of the","../../assets/img3.jfif",[],{}),
    // new Test("test1","this the description of the test ","../../assets/img1.jfif",[],{}),
    // new Test("test2","this the description of the te ","../../assets/img2.jfif",[],{}),
    // new Test("test 3 ","this the description of the","../../assets/img3.jfif",[],{}),
    // new Test("test1","this the description of the test ","../../assets/img1.jfif",[],{}),
    // new Test("test2","this the description of the te ","../../assets/img2.jfif",[],{}),
    // new Test("test 3 ","this the description of the","../../assets/img3.jfif",[],{}),
    
  ];



  constructor() { }

  getTests(){
    return this.tests.slice();
  }
  getTest(index : number){
    return this.tests[index];
  }
}


/* 




*/