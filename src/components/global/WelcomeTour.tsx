import React, { useEffect, useMemo, useState } from 'react';
import { IoSearch, IoBookmarksOutline, IoDocumentTextOutline, IoLanguage } from 'react-icons/io5';
import { FaWindowRestore, FaMousePointer } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { useI18n } from '../../store/i18n';

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
  const t = useI18n();

  const slides = useMemo(() => [
    {
      id: 'welcome',
      title: t('tour.welcome.title'),
      desc: t('tour.welcome.desc'),
      icon: <FaWindowRestore className="text-white/90" size={28} />,
      cta: { label: t('tour.welcome.cta'), onClick: undefined as undefined | (() => void) },
    },
    {
      id: 'spotlight',
      title: t('tour.spotlight.title'),
      desc: t('tour.spotlight.desc'),
      icon: <IoSearch className="text-white/90" size={28} />,
      cta: { label: t('tour.spotlight.cta'), onClick: actions.openSpotlight },
      tip: t('tour.spotlight.tip')
    },
    {
      id: 'language',
      title: t('tour.language.title'),
      desc: t('tour.language.desc'),
      icon: <IoLanguage className="text-white/90" size={28} />,
      cta: undefined,
      tip: t('tour.language.tip')
    },
    {
      id: 'mission',
      title: t('tour.mission.title'),
      desc: t('tour.mission.desc'),
      icon: <FaWindowRestore className="text-white/90" size={28} />,
      cta: { label: t('tour.mission.cta'), onClick: actions.openMissionControl },
      tip: t('tour.mission.tip')
    },
    {
      id: 'dock',
      title: t('tour.dock.title'),
      desc: t('tour.dock.desc'),
      icon: <FaMousePointer className="text-white/90" size={28} />,
      cta: undefined,
      tip: t('tour.dock.tip')
    },
    {
      id: 'projects-notes',
      title: t('tour.projects.title'),
      desc: t('tour.projects.desc'),
      icon: <BsGithub className="text-white/90" size={28} />,
      cta: { label: t('tour.projects.cta'), onClick: actions.openGitHub },
      altCta: { label: t('tour.projects.altCta'), onClick: actions.openNotes },
      tip: t('tour.projects.tip')
    },
    {
      id: 'contact',
      title: t('tour.contact.title'),
      desc: t('tour.contact.desc'),
      icon: <IoDocumentTextOutline className="text-white/90" size={28} />,
      cta: { label: t('tour.contact.cta'), onClick: actions.openContact },
      tip: t('tour.contact.tip')
    },
    {
      id: 'shortcuts',
      title: t('tour.shortcuts.title'),
      desc: t('tour.shortcuts.desc'),
      icon: <IoBookmarksOutline className="text-white/90" size={28} />,
      cta: { label: t('tour.shortcuts.cta'), onClick: onClose },
      tip: t('tour.shortcuts.tip')
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

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              {slides.map((s, i) => (
                <span
                  key={s.id}
                  className={`h-1.5 w-4 sm:w-6 rounded-full ${i <= index ? 'bg-white/80' : 'bg-white/20'}`}
                />
              ))}
            </div>
            <div className="flex items-center justify-end gap-3 w-full sm:w-auto">
              <button onClick={onClose} className="text-sm text-gray-400 hover:text-white shrink-0">
                {t('tour.btn.skip')}
              </button>
              <button
                onClick={handlePrimary}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm whitespace-nowrap shrink-0"
              >
                {slide.cta?.label ?? t('tour.btn.next')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
