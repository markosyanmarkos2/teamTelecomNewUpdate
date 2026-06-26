import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Տեղադրեք Ձեր իրական կոնֆիգուրացիան Firebase Console-ից
const firebaseConfig = {
  apiKey: "AIzaSyChG97-VGgGYtnGbGHALo5HXOREYt6KcQk",
  authDomain: "teamnewproject-f5104.firebaseapp.com",
  projectId: "teamnewproject-f5104",
  storageBucket: "teamnewproject-f5104.firebasestorage.app",
  messagingSenderId: "206941959854",
  appId: "1:206941959854:web:f211ef4ea1e878cacb1f3f",
  measurementId: "G-M2BHW8J1FT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);