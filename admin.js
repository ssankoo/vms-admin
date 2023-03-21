import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyB-O37SWu_j7-b37sj57jfxL8fmBlFbf6o",

    authDomain: "vms-db-4f8bb.firebaseapp.com",

    projectId: "vms-db-4f8bb",

    storageBucket: "vms-db-4f8bb.appspot.com",

    messagingSenderId: "64225214546",

    appId: "1:64225214546:web:f61fe76c8154c18295df8b"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);


document.getElementById('login-btn').addEventListener('click', function () {
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {

            const user = userCredential.user;
            document.getElementById('test').style.display = "inline";

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
})



