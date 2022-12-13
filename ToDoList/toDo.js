const form=document.querySelector('#Shopping-form');
const item=document.querySelector('#userInput');
const button=document.querySelector('#addButton');
const ul = document.querySelector('#outputList');


form.addEventListener('submit', (e) => {
      e.preventDefault();   
      
      let input=e.target[0].value;
      let input2 = item.value;

      console.log(input);
      console.log(input2)
    //   output.innerHTML+=
    //   `<ul>
    //   <li>${input2}</li>
    //   </ul>`
        
    let li = document.createElement("LI");
    let liText = document.createTextNode(input);
    li.appendChild(liText);
    ul.appendChild(li);
// skap nytt <li> element
// lägg till input som dess value
// addera <li> elementet till <ul> som childnode 

      //`<p>${input}</p>`          
      //output.innerHTML += `<p>${e.target[0].value}</p>`;
     // e.target.reset();       
})


  ul.addEventListener('click', (e) => {
      
      if(e.target.tagName === 'LI'){
        console.log(e.target);
        e.target.classList.toggle('done');
      }
    //   e.target.classList.add('done');      
      
     // e.target.remove();
    })





/*let counter=1;
  button.addEventListener('click', (e) => {
    e.preventDefault();
    output.innerHTML += `
    <div>
    <p>Hej: ${counter++} </p>
  </div>
  `
})*/





