
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage , ref, uploadBytes} from "firebase/storage"
import { v4 } from "uuid";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEsbMBM2OZ45mXeYrVVwu2ePDoRfAmYZg",
  authDomain: "react-files-9494a.firebaseapp.com",
  projectId: "react-files-9494a",
  storageBucket: "react-files-9494a.appspot.com",
  messagingSenderId: "843126359096",
  appId: "1:843126359096:web:a89205de435c3ed9f012cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export const uploadFile = async (file) => {
    const storageRef = await ref(storage, v4())
    uploadBytes(storageRef, file )
    console.log(storageRef);
}
