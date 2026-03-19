import { useState, useEffect, useRef } from 'react';
import { userConfig } from '../../config';
import DraggableWindow from './DraggableWindow';
import { useI18n } from '../../store/i18n';

type Message = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

type ChatHistory = {
  messages: Message[];
  input: string;
};

interface MacTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MacTerminal({ isOpen, onClose }: MacTerminalProps) {
  const t = useI18n();

  // Customize these placeholder messages for the input field
  const PLACEHOLDER_MESSAGES = [
    t('terminal.placeholder.1'),
    t('terminal.placeholder.2'),
    t('terminal.placeholder.3'),
    t('terminal.placeholder.4'),
  ];
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const computedAge = currentDate.getFullYear() - userConfig.yearOfBirth;

  const [chatHistory, setChatHistory] = useState<ChatHistory>({
    messages: [],
    input: '',
  });
  const [isTyping, setIsTyping] = useState(false);
  const [placeholder, setPlaceholder] = useState('');
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentMessage = PLACEHOLDER_MESSAGES[currentPlaceholderIndex];

    const animatePlaceholder = () => {
      if (isDeleting) {
        if (placeholder.length === 0) {
          setIsDeleting(false);
          setCurrentPlaceholderIndex(
            (prev) => (prev + 1) % PLACEHOLDER_MESSAGES.length
          );
          timeout = setTimeout(animatePlaceholder, 400);
        } else {
          setPlaceholder((prev) => prev.slice(0, -1));
          timeout = setTimeout(animatePlaceholder, 80);
        }
      } else {
        if (placeholder.length === currentMessage.length) {
          timeout = setTimeout(() => setIsDeleting(true), 1500);
        } else {
          setPlaceholder(currentMessage.slice(0, placeholder.length + 1));
          timeout = setTimeout(animatePlaceholder, 120);
        }
      }
    };

    timeout = setTimeout(animatePlaceholder, 100);

    return () => clearTimeout(timeout);
  }, [placeholder, isDeleting, currentPlaceholderIndex]);

  // Customize this welcome message with your information
  const welcomeMessage = `${t('terminal.welcome.title')}

${t('terminal.welcome.name')}: ${userConfig.name}
${t('terminal.welcome.role')}: ${userConfig.role}
${t('terminal.welcome.location')}: ${userConfig.location}

${t('terminal.welcome.contact')}: ${userConfig.contact.email}
GitHub: ${userConfig.social.github}

${t('terminal.welcome.ask')}
`;

  // Customize the system prompt with your personal information
  const systemPrompt = `Tu es ${userConfig.name}. Tu interagis avec les visiteurs de ton site web. 
Ton but est de présenter ton parcours, tes compétences et tes services de manière humaine et passionnée.

## TA PERSONNALITÉ ET TON TON (TRÈS IMPORTANT) :
- Tutoie TOUJOURS l'interlocuteur ("tu", et non "vous"). Sois amical, direct et pro.
- Tu as une mentalité axée "Business et Tech" : tu n'es pas juste un codeur, tu es un partenaire de croissance (grâce à tes 5 ans d'expérience en vente). Tu adores le contact humain.
- Tu aimes l'humour, l'art, la musique, et tu es un grand passionné de hockey sur glace, de sports de combat, de rando et  d'échecs.

## TES OBJECTIFS PROS :
- Tu cherches principalement des missions Freelance pour automatiser les process des PME/Startups avec l'IA.
- Tu es également ouvert aux belles opportunités en CDI ou Alternance en tant qu'AI Engineer.

## RÈGLES DE CONVERSATION ET UTILISATION DES OUTILS :
- Si le visiteur semble avoir un projet concret, une idée à automatiser ou cherche à recruter, propose-lui chaleureusement d'en discuter de vive voix ou par écrit. Demande-lui son adresse email et utilise l'outil \`record_user_details\` pour l'enregistrer. Amène cela naturellement, comme une suite logique à la discussion.
- Si tu ne connais pas la réponse à une question (même triviale), sois honnête, dis que tu vas te renseigner, et utilise IMPÉRATIVEMENT l'outil \`record_unknown_question\` pour la noter.

## TON CV ET RÉSUMÉ POUR LE CONTEXTE :

{{CV_CONTENT}}

Reste toujours dans ton personnage de ${userConfig.name}, sois naturel, concis (ne fais pas de monologues trop longs) et réponds en français (sauf si on te parle dans une autre langue).`;

  useEffect(() => {
    setChatHistory((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        { role: 'assistant', content: welcomeMessage },
      ],
    }));
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory.messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatHistory((prev) => ({ ...prev, input: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userInput = chatHistory.input.trim();

    if (!userInput) return;

    setChatHistory((prev) => ({
      messages: [...prev.messages, { role: 'user', content: userInput }],
      input: '',
    }));

    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemPrompt },
            ...chatHistory.messages,
            { role: 'user', content: userInput },
          ],
        }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();

      setChatHistory((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          { role: 'assistant', content: data.message },
        ],
      }));
    } catch (error) {
      setChatHistory((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          {
            role: 'assistant',
            content: `${t('terminal.error')} ${userConfig.contact.email}`,
          },
        ],
      }));
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) return null;

  return (
    <DraggableWindow
      title={`${userConfig.website} ⸺ zsh`}
      onClose={onClose}
      initialPosition={{
        x: Math.floor(window.innerWidth * 0.1),
        y: Math.floor(window.innerHeight * 0.1)
      }}
      initialSize={{ width: 700, height: 500 }}
      className="bg-black/90 backdrop-blur-sm"
    >
      <div className='p-1 text-gray-200 font-mono text-sm h-full flex flex-col overflow-hidden'>
        <div className='flex-1 overflow-y-auto rounded-lg p-1' aria-live="polite" aria-atomic="false">
          {chatHistory.messages.map((msg, index) => (
            <div key={index} className='mb-2'>
              {msg.role === 'user' ? (
                <div className='flex items-start space-x-2'>
                  <span className='text-green-400 font-bold'>{'>'}</span>
                  <pre className='whitespace-pre-wrap'>{msg.content}</pre>
                </div>
              ) : (
                <div className='flex items-start space-x-2'>
                  <span className='text-green-400 font-bold'>${userConfig.website}</span>
                  <pre className='whitespace-pre-wrap'>{msg.content}</pre>
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className='flex items-center space-x-1'>
              <div className='w-2 h-2 bg-green-400 rounded-full animate-bounce' style={{ animationDelay: '0ms' }}></div>
              <div className='w-2 h-2 bg-green-400 rounded-full animate-bounce' style={{ animationDelay: '150ms' }}></div>
              <div className='w-2 h-2 bg-green-400 rounded-full animate-bounce' style={{ animationDelay: '300ms' }}></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className='mt-2 rounded-lg p-2'>
          <div className='flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2'>
            <span className='whitespace-nowrap text-green-400 font-bold'>{userConfig.website} root %</span>
            <input
              type='text'
              value={chatHistory.input}
              onChange={handleInputChange}
              className='w-full sm:flex-1 bg-transparent outline-none text-white placeholder-gray-400'
              placeholder={placeholder}
              aria-label={t('terminal.inputAria')}
              name="terminal-input"
              autoComplete="off"
            />
          </div>
        </form>
      </div>
    </DraggableWindow>
  );
}
