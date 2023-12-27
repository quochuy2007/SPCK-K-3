import { auth } from "./config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const emailInput= document.getElementById('email')
const passwordInput= document.getElementById('password')
const button= document.getElementById('Signinbutton')
const xulyDangnhap= ()=>{
    const email=emailInput.value
    const password=passwordInput.value
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert('Đăng nhập thành công')
  })
  window.location='../index.html'
  .catch((error) => {
    const errorCode = error.code;   
    const errorMessage = error.message;
    alert(errorMessage)
  });
}
button.addEventListener('click',xulyDangnhap)