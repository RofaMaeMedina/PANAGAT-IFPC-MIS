// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyCtjOei5CUtrS7jSdRpB8t5rOtSDd-uOJM",
  authDomain: "lloyd-db-ddd40.firebaseapp.com",
  projectId: "lloyd-db-ddd40",
  storageBucket: "lloyd-db-ddd40.appspot.com",
  messagingSenderId: "1007103811380",
  appId: "1:1007103811380:web:d100d26d18ecda88ef0f61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(); 


function displayAllProducts() {
    const productsContainer = document.getElementById('products-container');
  
    // Check if the container exists
    if (!productsContainer) {
      console.error("Products container not found");
      return;
    }
  
    const productsRef = ref(db, "products");
  
    onValue(productsRef, (snapshot) => {
      // Clear the container
      productsContainer.innerHTML = "";

      // Create a single row to hold all product columns
    const row = document.createElement('div');
    row.classList.add('row', 'g-4');
  
      snapshot.forEach((userSnapshot) => {
        const userData = userSnapshot.val();
        const productID = userSnapshot.key;
        const productName = userData.name;
        const productPrice = userData.price;
        const productImage = userData.image;
        const productDescription = userData.description; 
       
        
         // Create a column for each product card
      const col = document.createElement('div');
      col.classList.add('col-md-4'); // Adjust the column size as needed

      // Create and populate HTML elements for each product card
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');

    //Create and populate HTML elements
      cardElement.classList.add('col');
      cardElement.classList.add('card');

      const imageElement = document.createElement('img');
      imageElement.src = productImage;
      imageElement.classList.add('card-img-top');
      imageElement.alt = productName;

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title', 'text-capitalize');
      cardTitle.textContent = productName;

      const cardDescription = document.createElement('p');
      cardDescription.classList.add('card-description');
      cardDescription.textContent = `${productDescription}`;


      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = `(Price: $${productPrice})`;

      const buttonGroup = document.createElement('div');
      buttonGroup.classList.add('d-grid', 'gap-2', 'd-md-block');

      const editButton = document.createElement('a');
      editButton.href = 'edit-product.html';
      editButton.classList.add('btn', 'btn-primary', 'me-2');
      editButton.textContent = 'Edit';

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('btn', 'btn-danger');
      deleteButton.textContent = 'Delete';

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(buttonGroup);

      buttonGroup.appendChild(editButton);
      buttonGroup.appendChild(deleteButton);

      cardElement.appendChild(imageElement);
      cardElement.appendChild(cardBody);

      
      productsContainer.appendChild(cardElement);

     
      col.appendChild(cardElement);

      row.appendChild(col);

      });
      
    productsContainer.appendChild(row);
    });
  }
  
  window.addEventListener('load', displayAllProducts);
