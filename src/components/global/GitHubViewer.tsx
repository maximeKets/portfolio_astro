import { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFolder, FaFile, FaChevronLeft, FaLink } from 'react-icons/fa';
import { userConfig } from '../../config/index';
import DraggableWindow from './DraggableWindow';

type FileNode = {
  name: string;
  type: 'file' | 'directory';
  children?: readonly FileNode[];
};

type ProjectStructure = {
  root: string;
  children: readonly FileNode[];
};

type Project = typeof userConfig.projects[0];

interface GitHubViewerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProjectId?: string;
}

const GitHubViewer = ({ isOpen, onClose, selectedProjectId }: GitHubViewerProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [showStructure, setShowStructure] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quickLook, setQuickLook] = useState<Project | null>(null);

  const toggleNode = (path: string) => {
    const newExpandedNodes = new Set(expandedNodes);
    if (newExpandedNodes.has(path)) {
      newExpandedNodes.delete(path);
    } else {
      newExpandedNodes.add(path);
    }
    setExpandedNodes(newExpandedNodes);
  };

  const renderFileTree = (node: FileNode, path: string = '') => {
    const currentPath = path ? `${path}/${node.name}` : node.name;
    const isExpanded = expandedNodes.has(currentPath);

    return (
      <div key={currentPath} className="ml-4">
        <div
          className="flex items-center cursor-pointer hover:bg-gray-700/50 p-1 rounded"
          role="treeitem"
          aria-expanded={node.type === 'directory' ? isExpanded : undefined}
          tabIndex={0}
          onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && node.type === 'directory') {
              e.preventDefault();
              toggleNode(currentPath);
            }
          }}
          onClick={() => node.type === 'directory' && toggleNode(currentPath)}
        >
          {node.type === 'directory' ? (
            <FaFolder className="text-yellow-500 mr-2" />
          ) : (
            <FaFile className="text-blue-400 mr-2" />
          )}
          <span className="text-gray-200">{node.name}</span>
        </div>
        {node.type === 'directory' && isExpanded && node.children && (
          <div className="ml-4" role="group">
            {node.children.map((child) => renderFileTree(child, currentPath))}
          </div>
        )}
      </div>
    );
  };

  const renderProjectStructure = (projectStructure: ProjectStructure) => {
    // Create the root node first
    return (
      <div role="tree" aria-label="Project structure">
        <div className="flex items-center p-1 rounded">
          <FaFolder className="text-yellow-500 mr-2" />
          <span className="text-gray-200 font-bold">{projectStructure.root}</span>
        </div>
        <div className="ml-4">
          {projectStructure.children.map((child) => renderFileTree(child, projectStructure.root))}
        </div>
      </div>
    );
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setShowStructure(true);
    setActiveImageIndex(0);
  };

  const handleBackClick = () => {
    setShowStructure(false);
    setSelectedProject(null);
  };

  const handleNextImage = () => {
    if (selectedProject) {
      setActiveImageIndex((prevIndex) => 
        prevIndex + 1 >= selectedProject.images.length ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setActiveImageIndex((prevIndex) => 
        prevIndex - 1 < 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  // Deep-link support: open a project directly when prop changes
  useEffect(() => {
    if (!isOpen) return;
    if (selectedProjectId) {
      const proj = userConfig.projects.find(p => p.id === selectedProjectId) || null;
      if (proj) {
        setSelectedProject(proj);
        setShowStructure(true);
        setActiveImageIndex(0);
      }
    }
  }, [selectedProjectId, isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <DraggableWindow
        title={showStructure ? selectedProject?.title || 'GitHub Projects' : 'GitHub Projects'}
        onClose={onClose}
        initialPosition={{ 
          x: Math.floor(window.innerWidth * 0.2), 
          y: Math.floor(window.innerHeight * 0.2) 
        }}
        className="w-[93vw] md:max-w-4xl max-h-[90vh] flex flex-col"
        initialSize={{ width: 800, height: 600 }}
      >
      <div className="flex flex-col flex-grow min-h-0 h-full">
        <div className="overflow-y-auto flex-grow min-h-0 p-4 md:p-6">
          {!showStructure ? (
            <>
              <h2 className="text-2xl font-bold mb-4 text-gray-200">My Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {userConfig.projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-gray-800/50 p-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    onClick={() => handleProjectClick(project)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') { e.preventDefault(); handleProjectClick(project); }
                      if (e.key === ' ') { e.preventDefault(); setQuickLook(project); }
                    }}
                  >
                    {project.images && project.images.length > 0 && (
                      <div className="relative w-full h-48 mb-3 overflow-hidden rounded-lg">
                        <img 
                          src={project.images[0].url} 
                          alt={project.images[0].alt} 
                          className="w-full h-full object-cover"
                        />
                        <button
                          className="absolute bottom-2 right-2 text-xs bg-white/10 text-white border border-white/20 rounded px-2 py-1 hover:bg-white/20"
                          onClick={(e) => { e.stopPropagation(); setQuickLook(project); }}
                        >
                          Quick Look
                        </button>
                      </div>
                    )}
                    <h3 className="text-xl font-semibold mb-2 text-gray-200">{project.title}</h3>
                    <p className="text-gray-400 mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-blue-400 text-gray-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub />
                        <span>Repository</span>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm hover:text-blue-400 text-gray-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div>
              <button
                onClick={handleBackClick}
                aria-label="Back to Projects"
                className="flex items-center gap-2 text-gray-300 hover:text-gray-100 mb-4"
              >
                <FaChevronLeft />
                <span>Back to Projects</span>
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-4 text-gray-200">Project Structure</h3>
                  <div className="font-mono text-sm">
                    {selectedProject && renderProjectStructure(selectedProject.structure as unknown as ProjectStructure)}
                  </div>
                </div>
                
                {selectedProject && selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-4 text-gray-200">Screenshots</h3>
                    <div className="relative">
                      <div className="rounded-lg overflow-hidden mb-2">
                        <img 
                          src={selectedProject.images[activeImageIndex].url} 
                          alt={selectedProject.images[activeImageIndex].alt}
                          className="w-full object-cover" 
                        />
                      </div>
                      
                      <div className="text-sm text-gray-300 mb-3">
                        {selectedProject.images[activeImageIndex].description}
                      </div>
                      
                      {selectedProject.images.length > 1 && (
                        <div className="flex justify-between mt-2">
                          <button 
                            onClick={handlePrevImage}
                            aria-label="Previous screenshot"
                            className="bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
                          >
                            ←
                          </button>
                          <span className="text-gray-400">
                            {activeImageIndex + 1} / {selectedProject.images.length}
                          </span>
                          <button 
                            onClick={handleNextImage}
                            aria-label="Next screenshot"
                            className="bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
                          >
                            →
                          </button>
                        </div>
                      )}
                    </div>
                    {selectedProject.repoUrl && (
                      <div className="mt-4">
                        <a
                          href={selectedProject.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm hover:text-blue-400 text-gray-300 bg-gray-700/50 p-2 rounded-lg"
                        >
                          <FaGithub />
                          <span>Visit GitHub Repository</span>
                        </a>
                      </div>
                    )}
                    {selectedProject.liveUrl && (
                      <div className="mt-4">
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm hover:text-blue-400 text-gray-300 bg-gray-700/50 p-2 rounded-lg"
                        >
                          <FaLink />
                          <span>Visit Live Site</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </DraggableWindow>

    {quickLook && (
      <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="Quick Look">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setQuickLook(null)} />
        <div className="relative mx-auto mt-16 w-[92%] max-w-3xl rounded-xl border border-white/10 bg-gray-900/95 shadow-2xl">
          <div className="p-4 md:p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-white">{quickLook!.title}</h3>
              <button className="text-gray-400 hover:text-gray-200" onClick={() => setQuickLook(null)}>✕</button>
            </div>
            {quickLook!.images && quickLook!.images.length > 0 && (
              <div className="rounded-lg overflow-hidden mb-3">
                <img src={quickLook!.images[0].url} alt={quickLook!.images[0].alt} className="w-full object-cover" />
              </div>
            )}
            <p className="text-gray-300 mb-3">{quickLook!.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {quickLook!.techStack.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">{tech}</span>
              ))}
            </div>
            <div className="flex gap-3">
              <button
                className="text-sm text-blue-400 hover:text-blue-300"
                onClick={() => { setSelectedProject(quickLook!); setShowStructure(true); setQuickLook(null); }}
              >
                Open Details
              </button>
              <a
                href={quickLook!.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-blue-400"
              >
                Open Repo
              </a>
              {quickLook!.liveUrl && (
                <a
                  href={quickLook!.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-400 hover:text-green-300"
                >
                  Open Live
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default GitHubViewer; 