//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyCDEn1jx9FTTDUwM7D7SG6UHiVnrCBVCHo",
    authDomain: "comp1800-202410-3763e.firebaseapp.com",
    projectId: "comp1800-202410-3763e",
    storageBucket: "comp1800-202410-3763e.appspot.com",
    messagingSenderId: "33032147247",
    appId: "1:33032147247:web:62b095d642746af83651da"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
