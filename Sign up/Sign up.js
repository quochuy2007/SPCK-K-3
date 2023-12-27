import { auth } from "./config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const usernameInput= document.getElementById('username')
const emailInput= document.getElementById('email')
const passwordInput= document.getElementById('password')
const button= document.getElementById('Signinbutton')
const xulyDangky= ()=>{
    const username=usernameInput.value
    const email=emailInput.value
    const password=passwordInput.value
    createUserWithEmailAndPassword(auth, username, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert('Dang ky thành công')
    window.location='../index.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}
button.addEventListener('click',xulyDangky)