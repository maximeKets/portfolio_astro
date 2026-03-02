import { atom } from 'nanostores';

export type Language = 'en' | 'fr';

// Initialiser avec la langue du navigateur si possible, sinon anglais
export const languageStore = atom<Language>('en');

if (typeof window !== 'undefined') {
    const storedLang = localStorage.getItem('language') as Language;
    if (storedLang === 'en' || storedLang === 'fr') {
        languageStore.set(storedLang);
    } else {
        const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
        languageStore.set(browserLang);
    }

    // Écouter les changements pour sauvegarder
    languageStore.listen((lang) => {
        localStorage.setItem('language', lang);
    });
}

// Dictionnaire de traductions
export const translations = {
    en: {
        'contact.title': 'Contact me',
        'contact.subtitle': 'Have a question or opportunity? Send me a message below.',
        'contact.success': "Thanks! Your message has been sent. I'll get back to you at ",
        'contact.name': 'Name',
        'contact.namePlaceholder': 'Your name',
        'contact.email': 'Email',
        'contact.emailPlaceholder': 'you@example.com',
        'contact.message': 'Message',
        'contact.messagePlaceholder': 'How can I help?',
        'contact.btnSending': 'Sending…',
        'contact.btnSend': 'Send message',
        'contact.emailDirectly': 'Email me directly',
        'contact.errFillFields': 'Please fill in your name, email, and message.',
        'contact.errInvalidEmail': 'Please enter a valid email address.',
        'contact.errFailed': 'Failed to send message',
        'contact.errDefault': 'Something went wrong. Please try again.',
    },
    fr: {
        'contact.title': 'Contactez-moi',
        'contact.subtitle': 'Une question ou une opportunité ? Envoyez-moi un message ci-dessous.',
        'contact.success': "Merci ! Votre message a été envoyé. Je vous répondrai à l'adresse ",
        'contact.name': 'Nom',
        'contact.namePlaceholder': 'Votre nom',
        'contact.email': 'Email',
        'contact.emailPlaceholder': 'vous@exemple.com',
        'contact.message': 'Message',
        'contact.messagePlaceholder': 'Comment puis-je vous aider ?',
        'contact.btnSending': 'Envoi en cours…',
        'contact.btnSend': 'Envoyer',
        'contact.emailDirectly': 'M\'envoyer un email directement',
        'contact.errFillFields': 'Veuillez remplir votre nom, email et message.',
        'contact.errInvalidEmail': 'Veuillez entrer une adresse email valide.',
        'contact.errFailed': 'Échec de l\'envoi du message',
        'contact.errDefault': 'Une erreur est survenue. Veuillez réessayer.',
    }
} as const;

import { useStore } from '@nanostores/react';

export type TranslationKey = keyof typeof translations.en;

// Hook simplifié pour les composants React
export function useI18n() {
    const lang = useStore(languageStore);

    return function t(key: TranslationKey): string {
        return translations[lang][key] || translations.en[key] || key;
    };
}
