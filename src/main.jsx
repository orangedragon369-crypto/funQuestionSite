import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//import { AuthProvider } from '/src/context/AuthContext.jsx'
//import '../firebase/firebase.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)