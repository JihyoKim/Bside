import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom';

// ✅ 모바일 주소창 대응용 --vh 변수 설정
const setVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
setVh();
window.addEventListener('resize', setVh);

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
