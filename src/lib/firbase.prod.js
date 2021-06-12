import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBma4tI-VYXCcl3esXUmfytmMIGbaMMQ38',
  authDomain: 'netflix-clone-1f386.firebaseapp.com',
  databaseURL: 'https://netflix-clone-1f386.firebaseio.com',
  projectId: 'netflix-clone-1f386',
  storageBucket: 'netflix-clone-1f386.appspot.com',
  messagingSenderId: '602280916507',
  appId: '1:602280916507:web:de482262f5c949b0de6abe',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
