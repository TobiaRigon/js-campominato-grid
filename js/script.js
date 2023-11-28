// seleziona elemento contenitore
 const gridElement = document.querySelector(".grid");


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

//  funzioni

function createMyElement (tagtype , classname) {
    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);
    return currentElement ;
}