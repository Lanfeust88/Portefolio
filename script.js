let selec = document.getElementById("selection");
let main = document.getElementById("profil");
let contenuwordpress = document.getElementById("wordpress");
let imageuniv = document.getElementById("univ");
let imagemars = document.getElementById("mars");
let image8bits = document.getElementById("bits");
let javascript = document.getElementById("javascript");
let zonemobile = document.getElementById("promptmobile")
javascript.style.display="none";
let textuniv = document.getElementById("textuniv");
let textunivmobile = document.getElementById("textunivmobile");
let textmarsmobile = document.getElementById("textmarsmobile");
let textbitsmobile = document.getElementById("textbitsmobile");
textuniv.style.display="none";
let textmars = document.getElementById("textmars");
textmars.style.display="none";
textbits.style.display="none";
textunivmobile.style.display="none";
textmarsmobile.style.display="none";
textbitsmobile.style.display="none";

let lieu = document.createElement("h4");
lieu.classList.add("bulle");
lieu.textContent=("Lyon et sa métropole");
let temps = document.createElement("h4");
temps.classList.add("bulle1");
temps.textContent=("A partir de fin septembre");
let duree = document.createElement("h4");
duree.classList.add("bulle2");
duree.textContent=("Pour 12 mois environ");

function info (){
    setTimeout(function time (){main.appendChild(lieu)},500);
    setTimeout(function time (){main.appendChild(temps)},1000);
    setTimeout(function time (){main.appendChild(duree)},1500);
}

function closemobile(){
    zonemobile.style.display= "none";

}
imageuniv.addEventListener(("mouseenter"), (event)=>{
    textuniv.style.display='';
    imageuniv.addEventListener(("mouseout"), (event)=>{
        textuniv.style.display="none";
    });

});
imagemars.addEventListener(("mouseenter"), (event)=>{
    textmars.style.display='';
    imagemars.addEventListener(("mouseout"), (event)=>{
        textmars.style.display="none";
    });

});
image8bits.addEventListener(("mouseenter"), (event)=>{
    textbits.style.display='';
    image8bits.addEventListener(("mouseout"), (event)=>{
        textbits.style.display="none";
    });

});
function portefolio(){
let choix = selec.value;

    if (choix == "wordpress"){
    main.classList.replace("profil","profilmove");
    imageuniv.classList.replace("imagewp","wordpressimgmove");
    imagemars.classList.replace("imagewp","wordpressimgmove");
    textunivmobile.style.display='';
    textmarsmobile.style.display='';


    }
    else{
        javascript.style.display='';
        main.classList.replace("profil","profilmove");
        image8bits.classList.replace("imagewp","javascriptimgmove");
        textbitsmobile.style.display='';

    }

    selec.addEventListener("change",()=>{
        choix=selec.value;
        console.log(choix)
        if (choix == "wordpress"){
            contenuwordpress.style.display='';
            javascript.style.display="none";
            main.classList.replace("profil","profilmove");
            textunivmobile.style.display='';
            textmarsmobile.style.display='';

            }
            else{
                javascript.style.display='';
                image8bits.classList.replace("javascriptimgmove","javascriptimgmove2");
                contenuwordpress.style.display="none";


            } 
    })
}

