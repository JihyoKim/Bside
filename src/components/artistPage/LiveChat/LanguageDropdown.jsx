import React, { useEffect, useRef } from 'react';
import './LanguageDropdown.css';
import checkIcon from '../../../assets/live/checkPink.png';
import xBTN from '../../../assets/live/xBTN.png';

const LanguageDropdown = ({ language, setLanguage, onClose }) => {
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'off', label: '자막 끄기' },
    { code: 'kr', label: '한국어 (자동 생성)' },
    { code: 'en', label: 'English (자동 생성)' },
    { code: 'jp', label: '日本語 (자동 생성)' },
    { code: 'cn', label: '中文(简体) (자동 생성)' },
    { code: 'vi', label: 'Tiếng Việt (자동 생성)' },
    { code: 'id', label: 'Indonesia (자동 생성)' },
    { code: 'es', label: 'español (자동 생성)' },
    { code: 'th', label: 'ไทย (자동 생성)' },
  ];

  // ✅ 외부 클릭 시 닫히도록 처리
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleSelect = (code) => {
    setLanguage(code === 'off' ? null : code);
    // onClose() 제거 → 클릭 시 닫히지 않음
  };

  return (
    <div className={`language-dropdown-container ${language}`} ref={dropdownRef}>
      <img
        src={xBTN}
        alt="닫기"
        className="language-dropdown-close"
        onClick={onClose}
      />

      <div className="language-dropdown-header">자막</div>
      <div className="language-dropdown-sub">
        B-side는 언어 장벽 없는 팬 활동을 응원합니다!
      </div>

      <ul className="language-dropdown-list">
        {languages.map((lang) => (
          <li
            key={lang.code}
            className={`language-item ${language === lang.code ? 'selected' : ''}`}
            onClick={() => handleSelect(lang.code)}
          >
            {lang.label}
            {language === lang.code && (
              <img src={checkIcon} alt="selected" className="check-icon" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageDropdown;
