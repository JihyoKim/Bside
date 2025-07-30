import { useEffect } from 'react';
import './ChatbotEmbed.css';

const ChatbotEmbed = () => {
  useEffect(() => {
    // ✅ Chatbase 중복 삽입 방지
    const existingScript = document.getElementById('vAlTjnAGDPEYSt55Ea_lA');
    if (existingScript) return;

    // ✅ 스크립트 생성
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.id = 'vAlTjnAGDPEYSt55Ea_lA';
    script.dataset.chatbotId = 'vAlTjnAGDPEYSt55Ea_lA';
    script.dataset.domain = 'www.chatbase.co';
    script.defer = true;

    document.body.appendChild(script);

    // ✅ 페이지 떠날 때 관련 요소 제거
    return () => {
      const bubble = document.getElementById('chatbase-bubble-window');
      const bubbleBtn = document.getElementById('chatbase-bubble-button');
      const loadedScript = document.getElementById('vAlTjnAGDPEYSt55Ea_lA');

      if (bubble) bubble.remove();
      if (bubbleBtn) bubbleBtn.remove();
      if (loadedScript) loadedScript.remove();
    };
  }, []);

  return null;
};

export default ChatbotEmbed;
