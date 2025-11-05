import { useState, useEffect, useRef } from 'react';
import { BsGithub, BsSpotify, BsFilePdf, BsStickyFill, BsLinkedin, BsCalendar } from 'react-icons/bs';
import { IoIosCall, IoIosMail } from 'react-icons/io';
import { FaLink, FaEnvelope } from 'react-icons/fa';
import ResumeViewer from './ResumeViewer';
import SpotifyPlayer from './SpotifyPlayer';
import { userConfig } from '../../config/index';
import { RiTerminalFill } from 'react-icons/ri';

interface DesktopDockProps {
  onTerminalClick: () => void;
  onNotesClick: () => void;
  onGitHubClick: () => void;
  onContactClick: () => void;
  activeApps: {
    terminal: boolean;
    notes: boolean;
    github: boolean;
    resume: boolean;
    spotify: boolean;
  };
}

const DesktopDock = ({ onTerminalClick, onNotesClick, onGitHubClick, onContactClick, activeApps }: DesktopDockProps) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [showResume, setShowResume] = useState(false);
  const [showSpotify, setShowSpotify] = useState(false);
  const [showLinksPopup, setShowLinksPopup] = useState(false);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const dockRef = useRef<HTMLDivElement>(null);
  const linksPopupRef = useRef<HTMLDivElement>(null);

  const handleLinksClick = () => {
    setShowLinksPopup(!showLinksPopup);
  };

  const handleCalendarClick = () => {
    window.open(userConfig.contact.calendly, '_blank');
  };

  const handleSpotifyClick = () => {
    setShowSpotify(true);
  };

  const handleResumeClick = () => {
    setShowResume(true);
  };

  const handleCloseResume = () => {
    setShowResume(false);
  };

  const handleCloseSpotify = () => {
    setShowSpotify(false);
  };

  // Email is handled via Contact widget now; direct mail link remains in Links popup

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (linksPopupRef.current && !linksPopupRef.current.contains(event.target as Node)) {
        setShowLinksPopup(false);
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (dockRef.current) {
        const rect = dockRef.current.getBoundingClientRect();
        if (e.clientY >= rect.top - 50 && e.clientY <= rect.bottom + 50) {
          setMouseX(e.clientX);
        } else {
          setMouseX(null);
        }
      }
    };

    const handleMouseLeave = () => {
      setMouseX(null);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const calculateScale = (iconIndex: number, totalIcons: number) => {
    if (mouseX === null || !dockRef.current) return 1;
    const rect = dockRef.current.getBoundingClientRect();
    const iconWidth = rect.width / totalIcons;
    const iconCenter = rect.left + iconIndex * iconWidth + iconWidth / 2;
    const distance = Math.abs(mouseX - iconCenter);
    const maxDistance = iconWidth * 2;
    if (distance > maxDistance) return 1;
    const proximity = 1 - distance / maxDistance;
    return 1 + proximity * 0.4; // Scale up to 1.4x
  };

  const Tooltip = ({ text }: { text: string }) => (
    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
      {text}
    </div>
  );

  const LinksPopup = () => (
    <div
      ref={linksPopupRef}
      className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800/90 w-30 backdrop-blur-sm rounded-lg p-4 shadow-xl"
    >
      <div className="grid grid-cols-1 gap-y-2">
        <a
          href={userConfig.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-white"
        >
          <BsLinkedin size={20} />
          <span>LinkedIn</span>
        </a>
        <a
          href={userConfig.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-white"
        >
          <BsGithub size={20} />
          <span>GitHub</span>
        </a>
        <a
          href={`mailto:${userConfig.contact.email}`}
          className="flex items-center gap-2 text-gray-300 hover:text-white"
        >
          <IoIosMail size={20} />
          <span>Email</span>
        </a>
        <a
          href={`tel:${userConfig.contact.phone}`}
          className="flex items-center gap-2 text-gray-300 hover:text-white"
        >
          <IoIosCall size={20} />
          <span>Call</span>
        </a>
      </div>
    </div>
  );

  const icons = [
    { id: 'github', label: 'My Projects', onClick: onGitHubClick, icon: BsGithub, color: 'from-black to-black/60', active: activeApps.github },
    { id: 'notes', label: 'Resume Notes', onClick: onNotesClick, icon: BsStickyFill, color: 'from-yellow-600 to-yellow-400', active: activeApps.notes },
    { id: 'resume', label: 'View Resume', onClick: handleResumeClick, icon: BsFilePdf, color: 'from-red-600 to-red-400', active: activeApps.resume },
    { id: 'calendar', label: 'Schedule a Call', onClick: handleCalendarClick, icon: BsCalendar, color: 'from-blue-600 to-blue-400', active: false },
    { id: 'spotify', label: 'Spotify Playlist', onClick: handleSpotifyClick, icon: BsSpotify, color: 'from-green-600 to-green-400', active: activeApps.spotify },
    { id: 'email', label: 'Contact', onClick: onContactClick, icon: IoIosMail, color: 'from-blue-600 to-blue-400', active: false },
    { id: 'links', label: 'Contact Links', onClick: handleLinksClick, icon: FaLink, color: 'from-purple-600 to-purple-400', active: false },
    { id: 'terminal', label: 'Terminal', onClick: onTerminalClick, icon: RiTerminalFill, color: 'from-black to-black/60', active: activeApps.terminal },
  ];

  return (
    <>
      <nav aria-label="Dock" className="fixed bottom-0 left-0 right-0 hidden md:flex justify-center pb-4 z-100">
        <div ref={dockRef} className="bg-gray-600/50 backdrop-blur-sm rounded-2xl p-2 shadow-xl">
          <div className="flex space-x-2" role="menubar">
            {icons.map((item, index) => {
              const Icon = item.icon;
              const scale = calculateScale(index, icons.length);
              return (
                <button
                  key={item.id}
                  onClick={item.onClick}
                  aria-label={item.label}
                  aria-haspopup={item.id === 'links' ? 'menu' : undefined}
                  aria-expanded={item.id === 'links' ? showLinksPopup : undefined}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.onClick(); } }}
                  onMouseEnter={() => setHoveredIcon(item.id)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  className="relative group"
                  style={{ transform: `scale(${scale})`, transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                >
                  <div className={`relative w-12 h-12 bg-gradient-to-t ${item.color} rounded-xl flex items-center justify-center shadow-lg active:scale-95 ${item.active ? 'ring-2 ring-white/50' : ''}`}>
                    <Icon size={item.id === 'email' ? 40 : item.id === 'calendar' || item.id === 'links' ? 30 : 35} className='text-white' />
                    {item.active && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full" aria-hidden="true" />}
                  </div>
                  {hoveredIcon === item.id && <Tooltip text={item.label} />}
                  {item.id === 'links' && showLinksPopup && <LinksPopup />}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <ResumeViewer isOpen={showResume} onClose={handleCloseResume} />
      <SpotifyPlayer
        isOpen={showSpotify}
        onClose={handleCloseSpotify}
        playlistId={userConfig.spotify.playlistId}
      />
    </>
  );
};

export default DesktopDock;
