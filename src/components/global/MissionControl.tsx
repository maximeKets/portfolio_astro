import React, { useEffect } from 'react';
import { BsGithub, BsStickyFill, BsFilePdf } from 'react-icons/bs';
import { RiTerminalFill } from 'react-icons/ri';
import { BsSpotify } from 'react-icons/bs';
import { useI18n } from '../../store/i18n';

interface MissionControlProps {
  isOpen: boolean;
  onClose: () => void;
  activeApps: {
    terminal: boolean;
    notes: boolean;
    github: boolean;
    resume: boolean;
    spotify: boolean;
  };
  onAppClick: (app: 'terminal' | 'notes' | 'github' | 'resume' | 'spotify') => void;
  onAppClose: (app: 'terminal' | 'notes' | 'github' | 'resume' | 'spotify') => void;
}

export default function MissionControl({ isOpen, onClose, activeApps, onAppClick, onAppClose }: MissionControlProps) {
  const t = useI18n();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const apps = [
    { id: 'github' as const, name: t('app.github'), icon: BsGithub, color: 'from-black to-black/60', active: activeApps.github },
    { id: 'notes' as const, name: t('app.notes'), icon: BsStickyFill, color: 'from-yellow-600 to-yellow-400', active: activeApps.notes },
    { id: 'terminal' as const, name: t('app.terminal'), icon: RiTerminalFill, color: 'from-black to-black/60', active: activeApps.terminal },
    { id: 'resume' as const, name: t('app.resume'), icon: BsFilePdf, color: 'from-red-600 to-red-400', active: activeApps.resume },
    { id: 'spotify' as const, name: t('app.spotify'), icon: BsSpotify, color: 'from-green-600 to-green-400', active: activeApps.spotify },
  ];

  const activeWindows = apps.filter((app) => app.active);

  const handleAppClick = (app: typeof apps[0]) => {
    onAppClick(app.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[90]" role="dialog" aria-modal="true" aria-label="Mission Control" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <div className="relative h-full flex flex-col items-center justify-center p-8">
        <h2 className="text-white text-2xl font-semibold mb-8">{t('mission.title')}</h2>
        {activeWindows.length === 0 ? (
          <p className="text-gray-400 text-lg">{t('mission.noWindows')}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {activeWindows.map((app) => {
              const Icon = app.icon;
              return (
                <button
                  key={app.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAppClick(app);
                  }}
                  className="group relative bg-gray-800/50 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label={`Switch to ${app.name}`}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className={`w-24 h-24 bg-gradient-to-t ${app.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon size={50} className="text-white" />
                    </div>
                    <span className="text-white text-lg font-medium">{app.name}</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAppClose(app.id);
                      }}
                      className="text-gray-400 hover:text-white text-xs bg-white/10 px-2 py-1 rounded"
                      aria-label={`Close ${app.name}`}
                    >
                      ✕
                    </button>
                  </div>
                </button>
              );
            })}
          </div>
        )}
        <p className="text-gray-400 text-sm mt-8">{t('mission.closeHint')}</p>
      </div>
    </div>
  );
}
