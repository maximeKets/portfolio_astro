import { useState, useEffect } from 'react';

interface SpotifyPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  playlistId: string;
}

export default function SpotifyPlayer({ isOpen, onClose, playlistId }: SpotifyPlayerProps) {
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className={`w-[90%] max-w-md bg-gray-800 rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ${isMinimized ? 'h-16' : 'h-[500px]'}`}>
        {/* Window Title Bar */}
        <div className="h-8 bg-gray-700 flex items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
            />
            <button 
              onClick={() => setIsMinimized(!isMinimized)}
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
            />
            <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
          </div>
          <div className="text-gray-300 text-sm font-medium">Spotify Player</div>
          <div className="w-12" />
        </div>

        {/* Spotify Player */}
        <div className={`h-[calc(100%-2rem)] transition-all duration-300 ${isMinimized ? 'hidden' : 'block'}`}>
          <iframe
            src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
            width="100%"
            height="100%"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="border-0"
          />
        </div>
      </div>
    </div>
  );
} 