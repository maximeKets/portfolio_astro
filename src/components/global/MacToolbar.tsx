import { useState, useEffect, useRef } from 'react';
import { MdWifi } from 'react-icons/md';
import { FaApple, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import {
  IoSearchSharp,
  IoBatteryHalfOutline,
  IoCellular,
  IoDocumentText,
  IoCodeSlash,
  IoPerson,
  IoBriefcase,
  IoSchool,
  IoMail,
  IoCall,
  IoHelpCircle,
} from 'react-icons/io5';
import { VscVscode } from 'react-icons/vsc';
import { userConfig } from '../../config/userConfig';
import HelpModal from './HelpModal';

type MenuItem = {
  label: string;
  icon?: React.ReactNode;
  action?: () => void;
  submenu?: MenuItem[];
};

interface MacToolbarProps {
  onTerminalClick?: () => void;
  onShowTutorial?: () => void;
}

export default function MacToolbar({
  onTerminalClick,
  onShowTutorial,
}: MacToolbarProps) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showSignature, setShowSignature] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatMacDate = (date: Date) => {
    const weekday = date.toLocaleString('en-US', { weekday: 'short' });
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.getDate();
    const hour = date.toLocaleString('en-US', {
      hour: 'numeric',
      hour12: true,
    });
    const minute = date.getMinutes().toString().padStart(2, '0');
    const period = date.getHours() >= 12 ? 'PM' : 'AM';

    return `${weekday} ${month} ${day} ${hour.replace(
      /\s?[AP]M/,
      ''
    )}:${minute} ${period}`;
  };

  const formatIPhoneTime = (date: Date) => {
    let hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, '0');

    hour = hour % 12;
    hour = hour ? hour : 12;

    return `${hour}:${minute}`;
  };

  const handleVSCodeClick = () => {
    window.location.href = 'vscode:/';
  };

  const handleMenuClick = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleAction = (action?: () => void) => {
    if (action) {
      action();
      setActiveMenu(null);
    }
  };

  const menus: Record<string, MenuItem[]> = {
    File: [
      {
        label: 'Resume',
        icon: <IoDocumentText size={16} />,
        action: () => window.open(userConfig.resume.url, '_blank'),
      },
      {
        label: 'Projects',
        icon: <IoCodeSlash size={16} />,
        action: () => window.open(userConfig.social.github, '_blank'),
      },
    ],
    Edit: [
      {
        label: 'Copy Email',
        icon: <IoMail size={16} />,
        action: () => {
          navigator.clipboard.writeText(userConfig.contact.email);
          alert('Email copied to clipboard!');
        },
      },
      {
        label: 'Copy Phone',
        icon: <IoCall size={16} />,
        action: () => {
          navigator.clipboard.writeText(userConfig.contact.phone);
          alert('Phone number copied to clipboard!');
        },
      },
    ],
    View: [
      {
        label: 'About Me',
        icon: <IoPerson size={16} />,
        submenu: [
          {
            label: 'Education',
            icon: <IoSchool size={16} />,
            action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
          },
          {
            label: 'Experience',
            icon: <IoBriefcase size={16} />,
            action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
          },
        ],
      },
    ],
    Go: [
      {
        label: 'GitHub',
        icon: <FaGithub size={16} />,
        action: () => window.open(userConfig.social.github, '_blank'),
      },
      {
        label: 'LinkedIn',
        icon: <FaLinkedin size={16} />,
        action: () => window.open(userConfig.social.linkedin, '_blank'),
      },
      {
        label: 'Email',
        icon: <FaEnvelope size={16} />,
        action: () => window.open(`mailto:${userConfig.contact.email}`),
      },
    ],
    Help: [
      {
        label: 'Show Help',
        icon: <IoHelpCircle size={16} />,
        action: () => setShowHelp(true),
      },
      {
        label: 'Show Tutorial',
        icon: <IoHelpCircle size={16} />,
        action: () => onShowTutorial?.(),
      },
    ],
  };

  const renderMenu = (menuItems: MenuItem[]) => (
    <div className="absolute top-full left-0 mt-1 bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl py-1 min-w-[200px]">
      {menuItems.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => handleAction(item.action)}
            className="w-full px-4 py-2 text-left text-sm text-gray-200 hover:bg-gray-700/50 flex items-center gap-2"
          >
            {item.icon}
            {item.label}
          </button>
          {item.submenu && (
            <div className="absolute left-full top-0 ml-1 bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl py-1 min-w-[200px]">
              {item.submenu.map((subItem, subIndex) => (
                <button
                  key={subIndex}
                  onClick={() => handleAction(subItem.action)}
                  className="w-full px-4 py-2 text-left text-sm text-gray-200 hover:bg-gray-700/50 flex items-center gap-2"
                >
                  {subItem.icon}
                  {subItem.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>
      <HelpModal 
        isOpen={showHelp} 
        onClose={() => setShowHelp(false)}
        onTerminalClick={onTerminalClick}
      />
      <div className='sticky top-0 z-50 md:hidden bg-transparent text-white h-12 px-8 flex items-center justify-between text-base font-medium'>
        <span className='font-semibold'>
          {formatIPhoneTime(currentDateTime)}
        </span>
        <div className='flex items-center gap-1.5'>
          <IoCellular size={20} />
          <MdWifi size={20} />
          <IoBatteryHalfOutline size={24} />
        </div>
      </div>

      <div className='sticky top-0 z-50 hidden md:flex bg-black/20 backdrop-blur-md text-white h-6 px-4 items-center justify-between text-sm'>
        <div className='flex items-center space-x-4' ref={menuRef}>
          <FaApple size={16} />
          <div className="relative">
            <span 
              className='font-semibold hover:text-gray-300 transition-colors cursor-pointer'
              onMouseEnter={() => setShowSignature(true)}
              onMouseLeave={() => setShowSignature(false)}
            >
              {userConfig.name}
            </span>
            {showSignature && (
              <div className="absolute top-full left-0 mt-1 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-xl z-[100]">
                <svg width="100" height="100" viewBox="0, 0, 400, 400">
                  {/* Main body parts (static) */}
                  <path d="M108.569 28.616 C 106.734 29.520,104.726 32.670,104.726 34.644 C 104.726 38.003,107.697 39.449,129.820 46.856 C 138.973 49.921,146.527 52.624,146.607 52.863 C 146.686 53.103,145.246 54.959,143.407 56.989 C 124.286 78.087,112.615 112.565,116.576 136.249 C 121.489 165.623,141.596 190.907,170.380 203.907 C 201.975 218.177,230.960 211.170,260.824 182.042 C 284.512 158.939,290.778 139.488,280.920 119.660 C 270.945 99.596,249.140 84.175,202.030 63.867 C 186.951 57.368,185.093 56.168,184.311 52.432 C 182.587 44.191,177.239 42.165,164.583 44.957 L 158.844 46.223 143.978 40.267 C 114.671 28.527,111.121 27.359,108.569 28.616" 
                    fill="#000000" fillRule="evenodd" />
                  
                  {/* Body and legs */}
                  <path d="M180.151 221.586 C 172.696 224.807,172.098 228.567,174.461 257.349 C 174.970 263.548,175.907 275.255,176.544 283.365 C 178.911 313.539,179.680 321.150,182.081 338.170 C 184.544 355.633,187.406 371.811,191.197 389.698 L 193.381 400.000 197.635 400.000 C 200.789 400.000,201.890 399.878,201.888 399.527 C 201.887 399.267,201.202 395.907,200.368 392.060 C 192.002 353.514,189.396 329.312,189.405 290.237 C 189.410 264.279,189.932 256.659,192.688 242.344 C 194.647 232.170,194.659 230.718,192.822 226.985 C 190.108 221.473,185.228 219.393,180.151 221.586" 
                    fill="#000000" fillRule="evenodd" />

                  {/* Left arm (static) */}
                  <path d="M128.922 258.062 C 123.505 260.577,122.583 263.116,120.614 280.942 C 119.089 294.757,117.420 307.080,113.605 332.703 C 107.161 375.986,107.138 376.412,111.110 378.748 C 113.415 380.103,117.666 380.230,119.324 378.994 C 121.925 377.054,122.361 375.086,123.624 359.546" 
                    fill="#000000" fillRule="evenodd" />

                  {/* Right arm (waving) - this part will animate */}
                  <g className="origin-top animate-wave">
                    <path d="M279.276 172.949 C 276.309 174.007,275.334 176.072,272.211 187.925 C 263.640 220.452,251.678 249.700,242.532 260.491 C 241.563 261.635,237.066 266.399,232.538 271.078 C 218.672 285.408,217.752 286.587,217.798 289.961 C 217.940 300.352,231.821 304.008,237.316 295.101 C 238.091 293.845,240.750 290.301,243.225 287.227 C 251.656 276.753,256.254 268.957,261.554 256.144 C 271.645 231.748,288.332 185.082,289.049 179.249 C 289.586 174.884,283.980 171.271,279.276 172.949" 
                      fill="#000000" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            )}
          </div>
          {Object.entries(menus).map(([menu, items]) => (
            <div key={menu} className="relative">
              <span 
                className='cursor-pointer hover:text-gray-300 transition-colors'
                onClick={() => handleMenuClick(menu)}
              >
                {menu}
              </span>
              {activeMenu === menu && renderMenu(items)}
            </div>
          ))}
        </div>
        <div className='flex items-center space-x-4'>
          <VscVscode
            size={16}
            className='cursor-pointer hover:opacity-80 transition-opacity'
            onClick={handleVSCodeClick}
            title='Open in VSCode'
          />
          <MdWifi size={16} />
          <IoSearchSharp size={16} />
          <span className='cursor-default'>
            {formatMacDate(currentDateTime)}
          </span>
        </div>
      </div>
    </>
  );
}
