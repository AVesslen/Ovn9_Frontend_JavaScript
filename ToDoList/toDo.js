const form=document.querySelector('#Shopping-form');
const item=document.querySelector('#userInput');
const button=document.querySelector('#addButton');
const ul = document.querySelector('#outputList');


form.addEventListener('submit', (e) => {
      e.preventDefault();   
     
      let input = item.value;  
        
    let li = document.createElement("LI"); // skapa nytt <li> element
    let liText = document.createTextNode(input);  // lägg till input som dess value
    li.appendChild(liText);    // addera <li> elementet till <ul> som childnode 
    ul.appendChild(li);

    let deleteButton = document.createElement("button");
    let X=document.createTextNode("\u00D7");   
    deleteButton.classList.add('deleteButtonDesign');  //deleteButton.className="deleteButtonDesign"; funkar också
    deleteButton.appendChild(X);
    li.appendChild(deleteButton);
    ul.appendChild(li);     
})


  ul.addEventListener('click', (e) => {      
      if(e.target.tagName === 'LI'){        
        e.target.classList.toggle('done');
      }
    
      if(e.target.tagName==='BUTTON'){
        e.target.parentElement.remove();
      }    
    })








