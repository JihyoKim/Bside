import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom';

// ✅ 처음 로딩 시 max-width 값 복원
const savedWidth = localStorage.getItem('app-max-width');
if (savedWidth) {
  document.documentElement.style.setProperty('--max-width', savedWidth);
}


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

