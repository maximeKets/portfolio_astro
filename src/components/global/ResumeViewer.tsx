import { useEffect, useRef } from 'react';
import { userConfig } from '../../config/userConfig';

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

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
      <div className="w-[90%] h-[90%] max-w-5xl bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
        {/* Window Title Bar */}
        <div className="h-8 bg-gray-700 flex items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
            />
            <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
            <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
          </div>
          <div className="text-gray-300 text-sm font-medium">Resume.pdf</div>
          <div className="w-12" /> {/* Spacer for symmetry */}
        </div>

        {/* PDF Viewer */}
        <div className="h-[calc(100%-2rem)] bg-white">
          <figure className="h-full">
            <object data={userConfig.resume.localPath} type="application/pdf" width="100%" className="h-full"></object>
          </figure>
        </div>
      </div>
    </div>
  );
} 