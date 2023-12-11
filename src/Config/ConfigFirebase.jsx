import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBEiYYgFqLXgfjIlkjOaVaONnXxLZ8_Ea4",
    authDomain: "coderhouse-ecommerce-b00aa.firebaseapp.com",
    projectId: "coderhouse-ecommerce-b00aa",
    storageBucket: "coderhouse-ecommerce-b00aa.appspot.com",
    messagingSenderId: "229360568317",
    appId: "1:229360568317:web:3f09039cc6c6c5f08fbb94"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);