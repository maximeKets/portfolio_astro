import { useEffect, useReducer, useState } from 'react';
import MacToolbar from '../components/global/MacToolbar';
import MacTerminal from '../components/global/MacTerminal';
import MobileDock from '../components/global/MobileDock';
import DesktopDock from '../components/global/DesktopDock';
import NotesApp from '../components/global/NotesApp';
import GitHubViewer from '../components/global/GitHubViewer';
import ResumeViewer from '../components/global/ResumeViewer';

interface AppLayoutProps {
  initialBg: string;
  backgroundMap: Record<string, string>;
}

type TutorialStep = {
  title: string;
  content: string;
  action?: () => void;
  buttonText?: string;
};

export default function Desktop({ initialBg, backgroundMap }: AppLayoutProps) {
  const [currentBg, setCurrentBg] = useState<string>(initialBg);
  type App = 'terminal' | 'notes' | 'github' | 'resume' | 'spotify';
  type State = { windows: Record<App, boolean> };
  type Action = { type: 'OPEN' | 'CLOSE' | 'TOGGLE'; app: App } | { type: 'CLOSE_ALL' };

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'OPEN':
        return { windows: { ...state.windows, [action.app]: true } };
      case 'CLOSE':
        return { windows: { ...state.windows, [action.app]: false } };
      case 'TOGGLE':
        return { windows: { ...state.windows, [action.app]: !state.windows[action.app] } };
      case 'CLOSE_ALL':
        return { windows: { terminal: false, notes: false, github: false, resume: false, spotify: false } };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    windows: { terminal: false, notes: false, github: false, resume: false, spotify: false },
  });
  const [currentTutorialStep, setCurrentTutorialStep] = useState(0);
  const [showTutorial, setShowTutorial] = useState(false);

  const activeApps = state.windows;

  useEffect(() => {
    const lastBg = localStorage.getItem('lastBackground');
    const hasCompletedTutorial = localStorage.getItem('hasCompletedTutorial') === 'true';

    if (lastBg === initialBg) {
      const bgKeys = Object.keys(backgroundMap);
      const availableBgs = bgKeys.filter((bg) => bg !== lastBg);
      const newBg =
        availableBgs[Math.floor(Math.random() * availableBgs.length)];
      setCurrentBg(newBg);
    }

    // Only show tutorial if user hasn't completed it before
    if (!hasCompletedTutorial) {
      setShowTutorial(true);
    }

    localStorage.setItem('lastBackground', currentBg);
  }, [initialBg, backgroundMap]);

  // Add this function to reset tutorial
  const resetTutorial = () => {
    setCurrentTutorialStep(0);
    setShowTutorial(true);
    localStorage.setItem('hasCompletedTutorial', 'false');
  };

  const tutorialSteps: TutorialStep[] = [
    {
      title: "Welcome to My Portfolio! 👋",
      content: "This is a macOS-inspired portfolio where you can explore my work and experience. Let me guide you through some of the features!",
      action: () => handleAppOpen('notes'),
      buttonText: "Let's Begin"
    },
    {
      title: "Notes App",
      content: "This is my Notes app where you can find detailed information about my education, experience, and skills. Feel free to explore!",
      action: () => {
        handleAppClose('notes');
        handleAppOpen('github');
      },
      buttonText: "Next: Projects"
    },
    {
      title: "GitHub Projects",
      content: "Here you can browse through my projects, see their structure, and check out the code. Each project has screenshots and links to the repository.",
      action: () => {
        handleAppClose('github');
        handleAppOpen('terminal');
      },
      buttonText: "Next: Terminal"
    },
    {
      title: "Terminal",
      content: "The terminal is an interactive way to learn more about me. Try asking questions like 'What are your skills?' or 'Tell me about your experience'",
      action: () => {
        handleAppClose('terminal');
      },
      buttonText: "Next: Explore"
    },
    {
      title: "Explore",
      content: "Now that you've seen the basics, feel free to explore the rest of the portfolio from the dock below. I've got some cool projects and information waiting for you!",
      action: () => {
        setShowTutorial(false);
      },
      buttonText: "Thanks! I Got it from here!"
    }
  ];

  const handleTutorialAction = () => {
    if (tutorialSteps[currentTutorialStep].action) {
      tutorialSteps[currentTutorialStep].action!();
    }

    if (currentTutorialStep < tutorialSteps.length - 1) {
      setCurrentTutorialStep(prev => prev + 1);
    } else {
      setShowTutorial(false);
      localStorage.setItem('hasCompletedTutorial', 'true');
    }
  };

  const handleAppOpen = (app: App) => dispatch({ type: 'OPEN', app });
  const handleAppClose = (app: App) => dispatch({ type: 'CLOSE', app });

  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${backgroundMap[currentBg]})` }}
      />

      <div className='relative z-10'>
        <MacToolbar 
          onTerminalClick={() => handleAppOpen('terminal')} 
          onShowTutorial={resetTutorial}
        />
      </div>

      <div className='relative z-0 flex items-center justify-center h-[calc(100vh-10rem)] md:h-[calc(100vh-1.5rem)] pt-6'>
      </div>

      <MobileDock
        onGitHubClick={() => {
          handleAppOpen('github');
        }}
        onNotesClick={() => {
          handleAppOpen('notes');
        }}
        onResumeClick={() => {
          handleAppOpen('resume');
        }}
        onTerminalClick={() => {
          handleAppOpen('terminal');
        }}
      />
      <DesktopDock
        onTerminalClick={() => {
          handleAppOpen('terminal');
        }}
        onNotesClick={() => {
          handleAppOpen('notes');
        }}
        onGitHubClick={() => {
          handleAppOpen('github');
        }}
        activeApps={activeApps}
      />

      <NotesApp isOpen={state.windows.notes} onClose={() => {
        handleAppClose('notes');
      }} />
      <GitHubViewer isOpen={state.windows.github} onClose={() => {
        handleAppClose('github');
      }} />
      <ResumeViewer isOpen={state.windows.resume} onClose={() => {
        handleAppClose('resume');
      }} />
      <MacTerminal isOpen={state.windows.terminal} onClose={() => {
        handleAppClose('terminal');
      }} />
      {showTutorial && (
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
          <div className="bg-gray-800/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-xl max-w-xs animate-fade-in">
            <h3 className="text-lg font-semibold mb-2">{tutorialSteps[currentTutorialStep].title}</h3>
            <p className="text-sm text-gray-300 mb-4">
              {tutorialSteps[currentTutorialStep].content}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">
                {currentTutorialStep + 1} of {tutorialSteps.length}
              </span>
              <button
                onClick={handleTutorialAction}
                className="text-sm text-blue-400 hover:text-blue-300"
              >
                {tutorialSteps[currentTutorialStep].buttonText}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
