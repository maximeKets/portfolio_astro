import React, { useEffect, useMemo, useState } from 'react';
import { IoSearch, IoBookmarksOutline, IoDocumentTextOutline } from 'react-icons/io5';
import { FaWindowRestore, FaMousePointer } from 'react-icons/fa';
import { BsGithub, BsStickyFill } from 'react-icons/bs';

type Actions = {
  openSpotlight: () => void;
  openMissionControl: () => void;
  openNotes: () => void;
  openGitHub: () => void;
  openContact: () => void;
  closeAll?: () => void;
};

interface WelcomeTourProps {
  open: boolean;
  onClose: () => void;
  actions: Actions;
}

export default function WelcomeTour({ open, onClose, actions }: WelcomeTourProps) {
  const slides = useMemo(() => [
    {
      id: 'welcome',
      title: 'Welcome to my macOS-style portfolio',
      desc: 'Explore projects, experience, and more through a familiar desktop interface.',
      icon: <FaWindowRestore className="text-white/90" size={28} />,
      cta: { label: 'Start tour', onClick: undefined as undefined | (() => void) },
    },
    {
      id: 'spotlight',
      title: 'Spotlight Search',
      desc: 'Cmd/Ctrl+K to search projects, actions, skills, and links. Use arrows, Enter, and Shift+Enter (Live).',
      icon: <IoSearch className="text-white/90" size={28} />,
      cta: { label: 'Try Spotlight', onClick: actions.openSpotlight },
      tip: 'Pinned actions appear first. Type to fuzzy-search across everything.'
    },
    {
      id: 'mission',
      title: 'Mission Control',
      desc: 'View and switch between open windows. Use Ctrl/Cmd+↑ or F3.',
      icon: <FaWindowRestore className="text-white/90" size={28} />,
      cta: { label: 'Open Mission Control', onClick: actions.openMissionControl },
      tip: 'Click a window to focus it; close windows right from the grid.'
    },
    {
      id: 'dock',
      title: 'Dock with magnification',
      desc: 'Hover the dock to smoothly magnify icons. Click to open Notes, Projects, Terminal, and more.',
      icon: <FaMousePointer className="text-white/90" size={28} />,
      cta: undefined,
      tip: 'Active apps show a white indicator dot.'
    },
    {
      id: 'projects-notes',
      title: 'Projects & Notes',
      desc: 'Deep-link into Projects and Notes sections directly from Spotlight or the dock.',
      icon: <BsGithub className="text-white/90" size={28} />,
      cta: { label: 'Open Projects', onClick: actions.openGitHub },
      altCta: { label: 'Open Notes', onClick: actions.openNotes },
      tip: 'Use Space on a project to Quick Look; Enter to open.'
    },
    {
      id: 'contact',
      title: 'Contact',
      desc: 'Reach out directly via the built-in contact form (stored securely in Supabase).',
      icon: <IoDocumentTextOutline className="text-white/90" size={28} />,
      cta: { label: 'Open Contact', onClick: actions.openContact },
      tip: 'You can also press C or find it in Spotlight.'
    },
    {
      id: 'shortcuts',
      title: 'Shortcuts',
      desc: 'Press ? at any time for a list of keyboard shortcuts and tips.',
      icon: <IoBookmarksOutline className="text-white/90" size={28} />,
      cta: { label: 'Finish', onClick: onClose },
      tip: 'Prefer the keyboard? Most features are just a keystroke away.'
    },
  ], [actions, onClose]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!open) return;
    setIndex(0);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onClose();
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(i + 1, slides.length - 1));
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(i - 1, 0));
      if (e.key === 'Enter') handlePrimary();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, slides.length]);

  if (!open) return null;

  const slide = slides[index];
  const handlePrimary = () => {
    if (slide.cta?.onClick) slide.cta.onClick();
    if (slide.id !== 'shortcuts') setIndex((i) => Math.min(i + 1, slides.length - 1));
    else onClose();
  };

  return (
    <div className="fixed inset-0 z-[97]">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative h-full flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-gray-900/95 border border-white/10 rounded-2xl shadow-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1">{slide.icon}</div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-white">{slide.title}</h2>
              <p className="text-gray-300 mt-2 text-sm">{slide.desc}</p>
              {slide.tip && <p className="text-gray-400 mt-2 text-xs">{slide.tip}</p>}
              {slide.id === 'projects-notes' && slide.altCta && (
                <div className="mt-3">
                  <button
                    onClick={slide.altCta.onClick}
                    className="text-xs text-blue-400 hover:text-blue-300"
                  >
                    {slide.altCta.label}
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-1">
              {slides.map((s, i) => (
                <span
                  key={s.id}
                  className={`h-1.5 w-6 rounded-full ${i <= index ? 'bg-white/80' : 'bg-white/20'}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button onClick={onClose} className="text-sm text-gray-400 hover:text-white">Skip</button>
              <button
                onClick={handlePrimary}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm"
              >
                {slide.cta?.label ?? 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
