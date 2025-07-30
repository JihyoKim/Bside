// src/pages/onboarding/Step5_Language.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Step5_Language.css';
import dropdownIcon from '../../assets/dropdown.png';
import languageImg from '../../assets/language.png';
import checkIcon from '../../assets/check.png';
import prevB from '../../assets/prevB.png';
import closeIcon from '../../assets/x.png';

const languages = [
  '한국어', 'English', '日本語', '中文 (简体)', '中文 (繁體)',
  'español', 'français', 'Deutsch'
];

const TEXTS = {
  '한국어': {
    header: '언어 설정',
    title: '언어를 선택해 주세요',
    subtitle: '앱 내 번역 기능에 사용할 언어를 선택해 주세요',
    dropdownTitle: '번역 언어',
    dropdownGuide: '번역 언어를 선택해 주세요.',
    nextBtn: '다음',
  },
  'English': {
    header: 'Language Settings',
    title: 'Please select your language',
    subtitle: 'Choose a language for translation.',
    dropdownTitle: 'Translation Language',
    dropdownGuide: 'Please select a translation language.',
    nextBtn: 'Next',
  },
  '日本語': {
    header: '言語設定',
    title: '言語を選択してください',
    subtitle: 'アプリ内翻訳に使用する言語を選んでください。',
    dropdownTitle: '翻訳言語',
    dropdownGuide: '翻訳言語を選択してください。',
    nextBtn: '次へ',
  },
  '中文 (简体)': {
    header: '语言设置',
    title: '请选择一种语言',
    subtitle: '请选择用于应用内翻译的语言。',
    dropdownTitle: '翻译语言',
    dropdownGuide: '请选择翻译语言。',
    nextBtn: '下一步',
  }
};

const Step5_Language = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState('한국어');
  const [showDropdown, setShowDropdown] = useState(false);
  const [animateStep, setAnimateStep] = useState(false);

  const text = TEXTS[selectedLanguage] || TEXTS['한국어'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateStep(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const containerClass = [
    'step5-container',
    selectedLanguage === '日本語' ? 'jp-font' : '',
    selectedLanguage.includes('中文') ? 'zh-font' : ''
  ].join(' ').trim();

  const handleLanguageClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelect = (lang) => {
    setSelectedLanguage(lang);
    setShowDropdown(false);
  };

  return (
    <div className="step5-wrapper">
      <div className={containerClass}>
        {/* ✅ 상단 헤더 */}
        <div className="step5-header">
          <img src={prevB} alt="뒤로가기" className="step5-icon-btn" onClick={() => navigate(-1)} />
          <span>{text.header}</span>
          <img src={closeIcon} alt="닫기" className="step5-icon-btn" onClick={() => navigate('/onboarding')} />
        </div>

        {/* ✅ 인디케이터 (헤더 아래로 이동) */}
        <div className="step5-indicator">
          {[2, 3, 4, 5, 6].map((step, idx) => {
            let width = '0%';
            let transition = 'none';

            if (idx < 3) {
              width = '100%';
            } else if (idx === 3) {
              width = animateStep ? '100%' : '0%';
              transition = 'width 0.6s ease-in-out';
            }

            return (
              <div className="step-bar" key={step}>
                <div
                  className="step-fill"
                  style={{ width, transition }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* ✅ 본문 */}
        <h2 className="step5-title">{text.title}</h2>
        <p className="step5-subtext">{text.subtitle}</p>
        <img src={languageImg} alt="언어 이미지" className="step5-image" />
        <p className="step5-fixed-label">Language (번역 언어)</p>

        <div className="step5-dropdown" onClick={handleLanguageClick}>
          <span>{selectedLanguage}</span>
          <img src={dropdownIcon} alt="드롭다운" className="step5-dropdown-icon" />
        </div>

        {showDropdown && (
          <div className="step5-dropdown-menu">
            <h4>{text.dropdownTitle}</h4>
            <p className="step5-guide">{text.dropdownGuide}</p>
            {languages.map((lang) => {
              const fontStyle =
                lang === '日本語' ? { fontFamily: "'Noto Sans JP', sans-serif" } :
                lang.includes('中文') ? { fontFamily: "'Noto Sans SC', sans-serif" } :
                {};

              const extraClass =
                lang === '日本語' ? 'lang-jp' :
                lang.includes('中文') ? 'lang-zh' : '';

              return (
                <div
                  key={lang}
                  className={`step5-dropdown-item ${lang === selectedLanguage ? 'selected' : ''} ${extraClass}`}
                  onClick={() => handleSelect(lang)}
                  style={fontStyle}
                >
                  {lang}
                  {lang === selectedLanguage && <img src={checkIcon} alt="선택됨" />}
                </div>
              );
            })}
          </div>
        )}

        <button className="step5-next-btn" onClick={() => navigate('/onboarding/addartists')}>
          {text.nextBtn}
        </button>
      </div>
    </div>
  );
};

export default Step5_Language;
