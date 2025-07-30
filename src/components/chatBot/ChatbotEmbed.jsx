// src/components/chatBot/ChatbotEmbed.jsx
import { useEffect } from 'react';
import './ChatbotEmbed.css';

const ChatbotEmbed = () => {
  useEffect(() => {
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...args) => {
        if (!window.chatbase.q) window.chatbase.q = [];
        window.chatbase.q.push(args);
      };
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") return target.q;
          return (...args) => target(prop, ...args);
        }
      });

      const onLoad = () => {
        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = "vAlTjnAGDPEYSt55Ea_lA"; // ✅ 너의 Chatbase ID
        script.domain = "www.chatbase.co";
        document.body.appendChild(script);
      };

      if (document.readyState === "complete") {
        onLoad();
      } else {
        window.addEventListener("load", onLoad);
      }
    }
  }, []);

  return null; // 챗봇은 DOM에 직접 삽입되므로 리턴 컴포넌트 없음
};

export default ChatbotEmbed;
