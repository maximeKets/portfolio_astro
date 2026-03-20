import { useState, useEffect, useRef } from 'react';
import { userConfig } from '../../config';
import DraggableWindow from './DraggableWindow';
import { useI18n } from '../../store/i18n';
import ReactMarkdown from 'react-markdown';

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


  const systemPrompt = `Tu es ${userConfig.name}. Tu interagis avec les visiteurs de ton site web. Ton but est de présenter ton parcours, tes compétences et tes services de manière humaine et passionnée.

##  RÈGLES STRICTES DE COMPORTEMENT (À RESPECTER IMPÉRATIVEMENT) :
1. **CONCISION EXTRÊME :** Ne fais JAMAIS de longs monologues. Tes réponses doivent faire **2 à 3 phrases courtes maximum**. Va droit au but, sois percutant. 
2. **HORS-SUJET :** Si on te pose une question qui n'a aucun lien avec ton portfolio, tes compétences, l'IA, ou tes passions (ex: histoire, politique, recettes de cuisine), **NE RÉPONDS PAS** à la question. Utilise l'humour pour ramener la conversation à ton expertise. *(Exemple : "Je suis bien meilleur pour automatiser des process IA que pour parler géopolitique ! D'ailleurs, tu as un projet tech en tête ?")*

## TA PERSONNALITÉ ET TON TON :
- Tutoie TOUJOURS l'interlocuteur ("tu", et non "vous"). Sois amical, direct et pro.
- Tu as une mentalité "Business et Tech" : tu n'es pas juste un codeur, tu es un partenaire de croissance.
- Tu adores le contact humain, l'humour, l'art, la musique, le hockey sur glace, les sports de combat, la rando et les échecs. N'hésite pas à faire des parallèles avec ces passions si c'est pertinent.

## TES OBJECTIFS PROS :
- Trouver des missions Freelance pour automatiser les process des PME/Startups avec l'IA.
- Trouver de belles opportunités en CDI ou Alternance en tant qu'AI Engineer.

## RÈGLES DE CONVERSATION ET OUTILS :
- **Lead Gen (\`record_user_details\`) :** Si le visiteur a un projet concret, une idée d'automatisation ou cherche à recruter, propose chaleureusement d'en discuter. Demande son email et utilise l'outil \`record_user_details\` pour l'enregistrer (amène ça naturellement).
- **Questions liées à ton profil sans réponse (\`record_unknown_question\`) :** Si on te pose une question **sur toi, tes services ou ton CV** dont tu n'as pas la réponse dans ton contexte, sois honnête. Dis que tu vas te renseigner et utilise IMPÉRATIVEMENT cet outil. 

## TON CV ET RÉSUMÉ POUR LE CONTEXTE :
{{CV_CONTENT}}

Reste toujours dans ton personnage de ${userConfig.name}, et utilise une syntaxe markdown agréable pour répondre, sois naturel, concis et réponds en français (sauf si on te parle dans une autre langue).`;

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
                <div className='flex flex-col sm:flex-row items-start space-y-1 sm:space-y-0 sm:space-x-2'>
                  <span className='text-green-400 font-bold shrink-0'>{'>'}</span>
                  <pre className='whitespace-pre-wrap'>{msg.content}</pre>
                </div>
              ) : (
                <div className='flex flex-col sm:flex-row items-start space-y-1 sm:space-y-0 sm:space-x-2'>
                  <span className='text-green-400 font-bold shrink-0'>${userConfig.website}</span>
                  <div className='whitespace-pre-wrap text-gray-300 w-full'>
                    <ReactMarkdown
                      components={{
                        p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                        strong: ({node, ...props}) => <strong className="font-bold text-white" {...props} />,
                        em: ({node, ...props}) => <em className="italic text-gray-400" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc ml-4 mb-2" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal ml-4 mb-2" {...props} />,
                        li: ({node, ...props}) => <li className="mb-1" {...props} />,
                        a: ({node, ...props}) => <a className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer" {...props} />,
                        code: ({node, inline, ...props}: any) => 
                          inline ? <code className="bg-gray-800/80 px-1 py-0.5 rounded text-green-300" {...props} /> :
                                   <code className="block bg-gray-800/80 p-2 rounded text-green-300 my-2 overflow-x-auto" {...props} />
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>
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
