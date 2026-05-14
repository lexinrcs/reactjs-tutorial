import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// ✅ ADD THIS
import '@manulife/mux-tokens/fonts/fonts.css';
import '@manulife/mux-tokens/fonts/fonts.css';
import '@manulife/mux/styles/index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
