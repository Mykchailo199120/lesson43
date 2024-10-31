import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {CounterProvider} from "./context/CounterContext.jsx";
import App from './App.jsx'
import './styles/main.scss'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CounterProvider>
          <App />
      </CounterProvider>
  </StrictMode>
);
