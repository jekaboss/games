// Строгий режим
"use strict"
// Language data
const languageData = {
    'en': {
        'heading': 'Hello, World!',
        'paragraph': 'This is a sample paragraph.'
    },
    'ru': {
        'heading': 'Привет, мир!',
        'paragraph': 'Это пример параграфа.'
    }
};

// Function to change language
function changeLanguage(selectedLanguage) {
    const elements = Object.keys(languageData[selectedLanguage]);
    elements.forEach(element => {
        document.getElementById(element).innerText = languageData[selectedLanguage][element];
    });
}

// Initialize content with default language
changeLanguage('en');
