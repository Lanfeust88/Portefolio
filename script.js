let selec = document.getElementById("selection");
let main = document.getElementById("profil");
let contenuwordpress = document.getElementById("wordpress");
let imageuniv = document.getElementById("univ");
let imagemars = document.getElementById("mars");
let image8bits = document.getElementById("bits");
let javascript = document.getElementById("javascript");
javascript.style.display="none";
let textuniv = document.getElementById("textuniv");
textuniv.style.display="none";
let textmars = document.getElementById("textmars");
textmars.style.display="none";
textbits.style.display="none";

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

    }
    else{
        javascript.style.display='';
        main.classList.replace("profil","profilmove");
        image8bits.classList.replace("imagewp","javascriptimgmove");

    }

    selec.addEventListener("change",()=>{
        choix=selec.value;
        console.log(choix)
        if (choix == "wordpress"){
            contenuwordpress.style.display='';
            javascript.style.display="none";
            main.classList.replace("profil","profilmove");

            }
            else{
                javascript.style.display='';
                image8bits.classList.replace("javascriptimgmove","javascriptimgmove2");
                contenuwordpress.style.display="none";


            } 
    })
}

