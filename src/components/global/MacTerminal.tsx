import { useState, useEffect, useRef } from 'react';
import { FaRegFolderClosed } from 'react-icons/fa6';
import { userConfig } from '../../config/userConfig';

type Message = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

type ChatHistory = {
  messages: Message[];
  input: string;
};

interface MacTerminalProps {
  onClose: () => void;
}

// Customize these placeholder messages for the input field
const PLACEHOLDER_MESSAGES = [
  'Type your question...',
  'What are your skills?',
  'Where are you located?',
  'What projects have you worked on?',
];

export default function MacTerminal({ onClose }: MacTerminalProps) {
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
  const welcomeMessage = `Welcome to My Portfolio

Name: ${userConfig.name}
Role: ${userConfig.role}
Location: ${userConfig.location}

Contact: ${userConfig.contact.email}
GitHub: ${userConfig.social.github}

Ask me anything!
`;

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // Customize the system prompt with your personal information
  const systemPrompt = `IMPORTANT: You ARE ${userConfig.name} themselves. You must always speak in first-person ("I", "my", "me"). Never refer to "${userConfig.name}" in third-person.
CURRENT DATE: ${formattedDate} - Always use this exact date when discussing the current date/year.

Example responses:
Q: "Where do you live?"
A: "I live in ${userConfig.location}"

Q: "What's your background?"
A: "I'm a ${userConfig.role} with a focus for ${userConfig.roleFocus}"

Q: "How old are you?"
A: "I'm ${userConfig.age} years old"

Core details about me:
- I'm ${userConfig.age} years old
- I live in ${userConfig.location}
- I'm a ${userConfig.role}
- My email is ${userConfig.contact.email}
- I was born in ${userConfig.location}

My technical expertise:
${userConfig.skills.map(skill => `- ${skill}`).join('\n')}

My education:
- ${userConfig.education[0].degree} in ${userConfig.education[0].major}
- ${userConfig.education[0].institution}, ${userConfig.education[0].location} (${userConfig.education[0].year})

My professional experience:
${userConfig.experience.map(exp => `- ${exp.title} at ${exp.company}, ${exp.location} (${exp.period})`).join('\n')}

My projects:
${userConfig.projects.map(project => `- ${project.title}: ${project.description}`).join('\n')}

My achievements and competitions:
${userConfig.competitions.map(comp => `- ${comp.title} (${comp.year}): ${comp.achievement}`).join('\n')}

Response rules:
1. ALWAYS use first-person (I, me, my)
2. Never say "${userConfig.name}" or refer to myself in third-person
3. Keep responses concise and professional
4. Use markdown formatting when appropriate
5. Maintain a friendly, conversational tone

If a question is unrelated to my work or portfolio, say: "That's outside my area of expertise. Feel free to email me at ${userConfig.contact.email} and we can discuss further!"`;

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
            content: `I'm having trouble processing that. Please email me at ${userConfig.contact.email}`,
          },
        ],
      }));
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className='bg-black/85 w-[700px] h-[500px] rounded-lg overflow-hidden shadow-lg mx-4 sm:mx-0'>
      <div className='bg-gray-800 h-6 flex items-center space-x-2 px-4 sticky top-0 left-0 right-0 z-10'>
        <button
          onClick={onClose}
          className='w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors'
        />
        <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
        <div className='w-3 h-3 rounded-full bg-green-500'></div>
        <span className='text-sm text-gray-500 flex-grow text-center font-semibold flex items-center justify-center gap-2'>
          <FaRegFolderClosed size={14} className='text-gray-300' />
          {userConfig.website.replace('https://', '')} ⸺ zsh
        </span>
      </div>
      <div className='p-4 text-gray-200 font-mono text-s h-[calc(500px-1.5rem)] flex flex-col overflow-hidden'>
        <div className='flex-1 overflow-y-auto'>
          {chatHistory.messages.map((msg, index) => (
            <div key={index} className='mb-2'>
              {msg.role === 'user' ? (
                <div className='flex items-start space-x-2'>
                  <span className='text-green-400'>{'>'}</span>
                  <pre className='whitespace-pre-wrap'>{msg.content}</pre>
                </div>
              ) : (
                <pre className='whitespace-pre-wrap'>{msg.content}</pre>
              )}
            </div>
          ))}
          {isTyping && <div className='animate-pulse'>...</div>}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className='mt-2'>
          <div className='flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2'>
            <span className='whitespace-nowrap'>{userConfig.contact.email} root %</span>
            <input
              type='text'
              value={chatHistory.input}
              onChange={handleInputChange}
              className='w-full sm:flex-1 bg-transparent outline-none text-white placeholder-gray-400'
              placeholder={placeholder}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
