let body = document.getElementById("body");
let divpop = document.createElement("div");
divpop.classList.add("divpopup");
let bullecyril = document.createElement("img");
bullecyril.src='/images/bullecyril.png' ;
divpop.appendChild(bullecyril);
let bgpopup = document.createElement("div");
bgpopup.classList.add("bgpopup");

let fermeture = document.createElement("button");
fermeture.textContent="Fermer";
fermeture.classList.add("boutonclose");
fermeture.onclick= function close () {
    bgpopup.style.display="none";
    divpop.style.display="none";
}
let talk = document.createElement("button");
talk.textContent="Ok, discutons !";
talk.classList.add("boutontalk");
talk.onclick= function talk2 () {
    window.open("https://www.linkedin.com/in/cyril-plou/");
}
divpop.appendChild(fermeture);
divpop.appendChild(talk)

setTimeout(function ouverture(){
    body.appendChild(bgpopup);
    body.appendChild(divpop);},300)