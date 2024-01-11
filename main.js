
//create variables
const URL =
"https://iskarr.github.io/austindonovan.github.io/api/business.json";

let cards = document.querySelector("div.cards");
let para = document.createElement("p");

//fetch API
fetch(URL)
.then((response) => response.json())
.then((jsObject) => {

  //DROP ALL YOUR CODE HERE (BETWEEN CURLY BRACKET ABOVE TO THE LAST ONE BELOW)

  //BUSINESS 
  let business = jsObject.business;

  //CREATE LOOP SO IT BUILDS EACH CARD AND CREATE A DIV 
  for (let i = 0; i < business.length; i++) {
  // console.log(business[i].name);


  // You must include your javascript below to display the following information:
  // 1. business names, 2.business image,
  // 3. business locations, 4. business descriptions
  // Here is an example for the name to start you off.

  // Creates card and places business name in h2 element
  let card = document.createElement("section");

  // Adds a classname to the section element above
  card.className = "card";

  //CREATE BUSINESS  NAME
  let h2 = document.createElement("h2");
  h2.textContent = business[i].name;
  card.appendChild(h2);
  document.querySelector("div.cards").appendChild(card);

  //CREATE IMAGE LOCATION

  // Create the image location, you can look up how to add image using javascript
  
  let img = document.createElement("img");
  img.src = business[i].imageurl;
  card.appendChild(img);
  

  //CREATE BUSINESS LOCATION
  // Include a business location

  let address = document.createElement("p");
  address.textContent = business[i].address;
  card.appendChild(address);
  


  //CREATE BUSINESS DESCRIPTION
  // Include a business Description
  let description = document.createElement("p");
  description.textContent = business[i].description;
  card.appendChild(description);
  
    //NOW IF THE BRANCH IS EVER UPDATED THEY WILL AUTOMATICALLY BE ADDED IN.
  }
});