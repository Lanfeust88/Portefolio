let selec = document.getElementById("selection");

let contenuwordpress = document.getElementById("wordpress2");
contenuwordpress.style.display="none";
let javascript = document.getElementById("javascript");
javascript.style.display="none";

function portefolio(){
let choix = selec.value;

    if (choix == "wordpress"){
    contenuwordpress.style.display='';
    }
    else{
        javascript.style.display='';
    }

    selec.addEventListener("change",()=>{
        choix=selec.value;
        console.log(choix)
        if (choix == "wordpress"){
            contenuwordpress.style.display='';
            javascript.style.display="none";
            }
            else{
                javascript.style.display='';
                contenuwordpress.style.display="none";

            } 
    })
}

