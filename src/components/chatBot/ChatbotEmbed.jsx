import { useEffect } from 'react';

const ChatbotEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//code.tidio.co/8viqwi9qs2kf77ggmldwd0c5ijj4drpu.js';
    script.async = true;

    // 스크립트 로딩 완료 후 Tidio API 사용할 수 있도록 대기
    script.onload = () => {
      const checkTidioReady = () => {
        if (window.tidioChatApi) {
          // 위젯 열릴 때 자동으로 채팅 탭으로 이동
          window.tidioChatApi.on("widgetOpened", function () {
            window.tidioChatApi.open();
            window.tidioChatApi.setVisitorData({
              tab: 'chat'
            });
          });
        } else {
          setTimeout(checkTidioReady, 300);
        }
      };
      checkTidioReady();
    };

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
};

export default ChatbotEmbed;
