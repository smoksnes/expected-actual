import firebase from "firebase";
import { Firestore } from "@google-cloud/firestore";

class FireBaseUtils {
  static getFirestore(): firebase.firestore.Firestore {
    var firebaseConfig = {
      apiKey: "AIzaSyAL-gtXNqEXHqW4asWYHMDwTGiuCDVLvA0",
      authDomain: "expected-actual.firebaseapp.com",
      databaseURL: "https://expected-actual.firebaseio.com",
      projectId: "expected-actual",
      storageBucket: "",
      messagingSenderId: "167205523492",
      appId: "1:167205523492:web:2ba0aa40e3b201e6"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    var store = firebase.firestore();
    return store;
  }
}

export default FireBaseUtils;
