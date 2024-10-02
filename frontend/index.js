import { backend } from 'declarations/backend';

let apiKey;

// Mock translation function (replace with actual API call in a real scenario)
async function translateText(text, targetLang) {
    // Simulating API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock translations
    const translations = {
        de: "Deutsch: " + text,
        fr: "Français: " + text,
        es: "Español: " + text
    };
    
    return translations[targetLang] || "Translation not available";
}

async function init() {
    try {
        apiKey = await backend.getApiKey();
        console.log("API Key retrieved successfully");
    } catch (error) {
        console.error("Failed to retrieve API key:", error);
    }

    const inputText = document.getElementById('inputText');
    const targetLanguage = document.getElementById('targetLanguage');
    const translationOutput = document.getElementById('translationOutput');
    const speakButton = document.getElementById('speakButton');

    let translationTimeout;

    async function updateTranslation() {
        const text = inputText.value;
        const lang = targetLanguage.value;
        
        if (text) {
            const translation = await translateText(text, lang);
            translationOutput.textContent = translation;
        } else {
            translationOutput.textContent = '';
        }
    }

    inputText.addEventListener('input', () => {
        clearTimeout(translationTimeout);
        translationTimeout = setTimeout(updateTranslation, 300);
    });

    targetLanguage.addEventListener('change', updateTranslation);

    speakButton.addEventListener('click', () => {
        const text = translationOutput.textContent;
        if (text) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = targetLanguage.value;
            speechSynthesis.speak(utterance);
        }
    });
}

init();
