// Demander à l'aide d'un formulaire les 5 dernières notes d'un élève.
// Calculer sa moyenne et déterminer son appréciation.

// Si la moyenne de l'élève est supérieure ou égale à 0 et inférieure à 10, il aura comme appréciation : En dessous de la moyenne.
// Si la moyenne de l'élève est supérieure ou égale à 10 et inférieure à 13, il aura comme appréciation : Moyen.
// Si la moyenne de l'élève est supérieure ou égale à 13 et inférieure à 16, il aura comme appréciation : Bien.
// Si la moyenne de l'élève est supérieure ou égale à 16 et inférieure à 20, il aura comme appréciation : Très bien.
// Si la moyenne de l'élève est égale à 20, il aura comme appréciation : Excellent.
// Afficher la moyenne et l'appréciation de l'élève.


/*créer un formulaire avec 5 champs à chiffre avec des nombre limiter entre 0 et 20 dans le html
il faut créer un evenement qui permettra de calculer la moyenne des 5 notes et de déterminer son apréciation

récuperer la valeur de chaque champs
faire le calcul pour récuperer la moyenne general
créer des conditions pour chaques tranches 
 si moyenne >= 0 et moyenne <10 message tu as .... tu es en dessous de moyenne
 si moyenne >=10 et moyenne <13 message tu as .... tu es moyen
 si moyenne >=13 et moyenne <16 message tu as .... tu es bien
 si moyenne >=16 et moyenne <20 message tu as .... tu es tres bien
 si moyenne ==20 tu as 20 tu es exellent*/
 
//  le document html est pret je vais pouvoir mettre en place du jquery
$(function() { 

    
$('#average').click(function(){
    var number1 = parseFloat($('#note1').val());/*on met les var ici car c'est à partir du clique que l'on récupere les champs */
    var number2 = parseFloat($('#note2').val());/*parseFloat La fonction parseFloat() permet de transformer une chaîne de caractères en un nombre flottant après avoir analysée celle-ci */
    var number3 = parseFloat($('#note3').val());
    var number4 = parseFloat($('#note4').val());
    var number5 = parseFloat($('#note5').val());
    var resultat = (number1 + number2 + number3 + number4 + number5) /5 /*on calcule la moyenne des 5 note c'est elle qui apparaitra dans les conditions */

if(resultat >= 0 && resultat <10){/* si le resultat est sup ou egal à 0 ET resultat es en dessous de 10 alerte en dessous de la moyenne */
    alert('ta moyenne est de '+ resultat +' tu es en dessous de la moyenne');
}
else if(resultat >=10 && resultat <13){/* si le resultat est sup ou egal à 10 ET resultat es en dessous de 13 alerte dans la moyenne */
    alert('ta moyenne est de '+ resultat + 'tu es dans la moyenne');
}
else if(resultat >=13 && resultat <16){/* si le resultat est sup ou egal à 13 ET resultat es en dessous de 16 alerte tu es bien */
    alert('ta moyenne est de '+ resultat + 'tu es es bien dans la moyenne');
}
else if(resultat >=16 && resultat <20){/* si le resultat est sup ou egal à 16 ET resultat es en dessous de 20 alerte tu es tres bien */
    alert('ta moyenne est de '+ resultat +'tu es très bien dans la moyenne');
}
else if(resultat == 20){/* si le resultat est egal à 20  alerte  */
    alert('ta moyenne est de '+ resultat +'elle est Exellente');
}

});
});
