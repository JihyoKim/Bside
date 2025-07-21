import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App/App'    // App.jsx에서 라우팅 처리
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
