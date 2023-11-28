// seleziona elemento contenitore
 const gridElement = document.querySelector(".grid");

//  seleziona tasto
const playButton = document.getElementById("play");

// seleziona difficoltà
const difficolta = document.getElementById("difficolta");





playButton.addEventListener("click",

function(){

    gridElement.innerHTML = "";

    
    if (difficolta.value === "Difficile"){
    
            for ( let i = 0; i < 49 ; i++){
    
                const newElement = createMyElement("div" , "cell-3");
                newElement.append(i + 1);
            
            
            
                newElement.addEventListener("click",
            
                    function () {
                        newElement.classList.add("clicked");
                    }
                );
            
                gridElement.append(newElement);
            
             }
    
            
        
    
    } else if ( difficolta.value === "Medio") {
    
    
            for ( let i = 0; i < 81 ; i++){
    
                const newElement = createMyElement("div" , "cell-2");
                newElement.append(i + 1);
            
            
            
                newElement.addEventListener("click",
            
                    function () {
                        newElement.classList.add("clicked");
                    }
                );
            
                gridElement.append(newElement);
            
             }
    
            
        
    
    } else{
    
    
    
            for ( let i = 0; i < 100 ; i++){
    
                const newElement = createMyElement("div" , "cell");
                newElement.append(i + 1);
            
            
            
                newElement.addEventListener("click",
            
                    function () {
                        newElement.classList.add("clicked");
                    }
                );
            
                gridElement.append(newElement);
            
             }
    
            
        
    }


}




   
);

console.log(difficolta.value)


 




//  funzioni

function createMyElement (tagtype , classname) {
    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);
    return currentElement ;
}