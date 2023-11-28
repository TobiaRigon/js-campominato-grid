// seleziona elemento contenitore
 const gridElement = document.querySelector(".grid");

//  seleziona tasto
const playButton = document.getElementById("play");

// seleziona difficoltà
const difficolta = document.getElementById("difficolta");





playButton.addEventListener("click",

function(){

    gridElement.innerHTML = "";
    let numCelle = 100;
    let difficoltaSelezionata = "cell" ;

    if (difficolta.value === "Difficile"){
        numCelle = 49;
        difficoltaSelezionata = "cell-3";
    } else if (difficolta.value === "Medio"){
        numCelle = 81;
        difficoltaSelezionata ="cell-2";
    }

    for ( let i = 0; i < numCelle ; i++){
    
        const newElement = createMyElement("div" , difficoltaSelezionata);
        newElement.append(i + 1);
    
    
    
        newElement.addEventListener("click",
    
            function () {
                newElement.classList.add("clicked");
            }
        );
    
        gridElement.append(newElement);
    
     }
}




   
);

//  funzioni

function createMyElement (tagtype , classname) {
    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);
    return currentElement ;
}