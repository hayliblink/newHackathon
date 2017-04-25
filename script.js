var btn = document.getElementById("burger");
btn.addEventListener("click", btnClicked);


function btnClicked(){
    document.getElementById("nav").style.top = "0";
    document.getElementById("nav").setAttribute("class", "open");

}

var nav = document.getElementById("nav");
nav.addEventListener("click", navClicked);


function navClicked(){
    document.getElementById("nav").style.top = "100%";
    document.getElementById("nav").setAttribute("class", "close");
    
}


document.addEventListener('DOMContentLoaded', function () {


    var btn = document.getElementById("burger");
    var bar1 = document.getElementById("bar1");
    var bar2 = document.getElementById("bar2");
    var bar3 = document.getElementById("bar3");

    btn.addEventListener("click", AffNav);
    bar1.style.transform = "rotate(180deg)"

    function AffNav() {

        if (bar1.style.transform == "rotate(180deg)") {
            bar1.style.top = "10px";
            bar3.style.top = "-10px";
            bar2.style.top = "0";

            bar2.style.opacity = "0";
            bar1.style.transform = "rotate(45deg)"
            bar3.style.transform = "rotate(-45deg)"

        }
        
        else {
            bar1.style.top = 0;
            bar3.style.top = 0;
            bar2.style.top = 0;
            bar3.style.transform = "rotate(-180deg)"
            bar1.style.transform = "rotate(180deg)"
            bar2.style.opacity = "1";

        }
    }
}, false);

