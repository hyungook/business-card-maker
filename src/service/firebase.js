import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

import dotenv from 'dotenv';

// env 설치
dotenv.config();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  };
  // Initialize Firebase
  // 이니셜라이징 앱을 하게 되면 이 앱이 리턴이 된다.  // 필수 !!
  // auth 문서 확인!! 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // export default firebaseApp;
  export const firebaseAuth = firebaseApp.auth();
  export const firebaseDatabase = firebaseApp.database();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  export const githubProvider = new firebase.auth.GithubAuthProvider();

  export const storageService = firebase.storage();