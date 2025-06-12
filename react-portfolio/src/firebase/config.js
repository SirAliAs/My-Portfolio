import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
// IMPORTANT: Replace with your actual Firebase config values
const firebaseConfig = {
  apiKey: 'AIzaSyBktk9tMsYzCKnaw4S2qBVo8vkCe6iacuc', // From original HTML
  authDomain: 'portfolio-contact-data-ad2e9.firebaseapp.com', // From original HTML
  databaseURL: 'https://portfolio-contact-data-ad2e9-default-rtdb.firebaseio.com', // From original HTML
  projectId: 'portfolio-contact-data-ad2e9', // From original HTML
  storageBucket: 'portfolio-contact-data-ad2e9.appspot.com', // From original HTML
  messagingSenderId: '204505141088', // From original HTML
  appId: '1:204505141088:web:00afbea26309b100bcd805', // From original HTML
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
