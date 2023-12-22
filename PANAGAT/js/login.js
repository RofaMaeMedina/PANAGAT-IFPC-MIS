import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtjOei5CUtrS7jSdRpB8t5rOtSDd-uOJM",
  authDomain: "lloyd-db-ddd40.firebaseapp.com",
  projectId: "lloyd-db-ddd40",
  storageBucket: "lloyd-db-ddd40.appspot.com",
  messagingSenderId: "1007103811380",
  appId: "1:1007103811380:web:d100d26d18ecda88ef0f61"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("loginPassword").value;

  const usersRef = ref(db, "users");
  const newUserRef = push(usersRef);

  // Save user information to the database
  set(newUserRef, {
    email: email,
    loginpassword: password,
  })
  .then(() => {
    console.log("User information saved successfully");
    window.location.href = "Admin.html";
  })
  .catch((error) => {
    console.error("Error saving user information:", error);

  });

  alert('Registration successful!');
});

document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault();


  const owner = document.getElementById('owner').value;
  const captain = document.getElementById('captain').value;
  const contactNumber = document.getElementById('contactNumber').value;
  const vesselType = document.getElementById('vesselType').value;
  const modelYear = document.getElementById('modelYear').value;
  const hullId = document.getElementById('hullId').value;
  const purpose = document.querySelector('input[name="purpose"]:checked').value;

 
  db.ref('registrations').push({
    owner,
    captain,
    contactNumber,
    vesselType,
    modelYear,
    hullId,
    purpose
  });

  alert('Registration successful!');
});
