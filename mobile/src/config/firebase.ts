import firebase from "@react-native-firebase/app";
import { Platform } from "react-native";

const androidCredentials = {
  apiKey: "AIzaSyDti1K3ISI1ozxWpGbmJ4a6Nl5WQfY7Haw",
  authDomain: "little-market-ad0db.firebaseapp.com",
  databaseURL: "",
  projectId: "little-market-ad0db",
  storageBucket: "little-market-ad0db.appspot.com",
  messagingSenderId: "309188770290",
  appId: "1: 309188770290: android: b6cb961705233c6bc0536b",
  measurementId: "",
};

export const config = {
  name: "mercadin",
};

firebase.initializeApp(androidCredentials, config);
