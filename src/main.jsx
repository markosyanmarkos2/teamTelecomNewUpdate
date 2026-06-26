import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import {App,LrahosSlider,Apps} from './App.jsx' 
import './index.css'        
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Apps/>
    </BrowserRouter>
  </StrictMode>
);
