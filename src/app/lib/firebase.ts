import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDozov1g_PhHpwQE_P4Y23SaWS-jHAD90U",
  authDomain: "sasa-pet-shop.firebaseapp.com",
  projectId: "sasa-pet-shop",
  storageBucket: "sasa-pet-shop.appspot.com",
  messagingSenderId: "993107671305",
  appId: "1:993107671305:web:62a2f7d8c776517dbcfbd8",
  measurementId: "G-T3G4P93NWS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

