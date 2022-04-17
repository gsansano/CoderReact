import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDmVHGt2RTP-pBKZ9_hU-2XEExJ864DgKk",
  authDomain: "coderreact-f382a.firebaseapp.com",
  projectId: "coderreact-f382a",
  storageBucket: "coderreact-f382a.appspot.com",
  messagingSenderId: "897371408862",
  appId: "1:897371408862:web:4ee4972ed69cd1dcf7354f"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}
