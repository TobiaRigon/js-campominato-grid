// seleziona elemento contenitore
 const gridElement = document.querySelector(".grid");

//  seleziona tasto
const playButton = document.getElementById("play");




playButton.addEventListener("click",


    function () {

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

);


 




//  funzioni

function createMyElement (tagtype , classname) {
    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);
    return currentElement ;
}