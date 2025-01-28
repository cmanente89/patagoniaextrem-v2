import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";




//!api key enviada por privado!

// const firebaseConfig = {
//     apiKey: "",
//     authDomain: "patagoniaextrem-9b708.firebaseapp.com",
//     projectId: "patagoniaextrem-9b708",
//     storageBucket: "patagoniaextrem-9b708.firebasestorage.app",
//     messagingSenderId: "1056762619376",
//     appId: "1:1056762619376:web:be019b8ab679abf6522935"
// };


const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;