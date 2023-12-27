import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC_bSoIDv9WVgV5cZY_Tdvt93voaF72B8c",
    authDomain: "buoi6-49472.firebaseapp.com",
    projectId: "buoi6-49472",
    storageBucket: "buoi6-49472.appspot.com",
    messagingSenderId: "534474845673",
    appId: "1:534474845673:web:b376d265cf113230856f78"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth=getAuth(app);