const languageSwitcher = document.getElementById('language-switcher');
const languageImage = document.getElementById('language-image');

let currentLanguage = 'english';

languageSwitcher.addEventListener('click', function() {
  if (currentLanguage === 'english') {
    languageImage.src = 'img/translate.svg';
    currentLanguage = 'russian';
  } else {
    languageImage.src = 'img/translate.svg';
    currentLanguage = 'english';
  }
});
