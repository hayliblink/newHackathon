

tempsRestan('06/08/2017 03:1 PM', 'countdown');

function tempsRestan(deadline, id) {

    //initialisation de dealine avec la variable end
    var end = new Date(deadline);

    //initialisation des valeurs pour calculer le temps;
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    //timer sert a définir le temps d'appel de la fonction
    var timer;
    //Pour ne pas avoir de temps d'attente d'une seconde
    showRemaining();

    //Calcul la difference entre temps actuelle et temps avenir
    function showRemaining() {
        var now = new Date();
        //soustraction du temps 
        var distance = end - now;
        //Condition si distance est inférieur à 0

        if (distance < 0) {
            //Stop l'appel de la fonction
            clearInterval(timer);
            //On écrit c'est fini;
            document.getElementById(id).innerHTML = "<div class='dash hours_dash'><p class='dash_title' style='font-size: 350%;'>C'est fini</p></div>";
            return;
        }
        //Remets les bonnes valeur en arrondissant grace a math.foor
        var days = Math.floor(distance / day);
        var hours = Math.floor((distance % day) / hour);
        var minutes = Math.floor((distance % hour) / minute);
        var seconds = Math.floor((distance % minute) / second);

        //ajout à la div jour/heure/minute/secondes le += ajout àprès
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }

    timer = setInterval(showRemaining, 1000);
 
}



