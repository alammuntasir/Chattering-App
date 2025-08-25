import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCwKPhSlvBOTDYtZWj_dy8aoLhGWIOyS-k",
  authDomain: "chatteringapp.firebaseapp.com",
  projectId: "chatteringapp",
  storageBucket: "chatteringapp.firebasestorage.app",
  messagingSenderId: "435774590054",
  appId: "1:435774590054:web:2caaca8d5ced528f00b1a7",
};

// const auth = getAuth();
const app = initializeApp(firebaseConfig);
// export{auth} ;
export default firebaseConfig;