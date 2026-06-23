import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App, {LrahosSlider} from './App.jsx' 
import './index.css'        
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 

createRoot(document.getElementById('swp')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
createRoot(document.getElementById(`lrahosswiper`)).render(
    <StrictMode>
    <LrahosSlider />
  </StrictMode>,
)

