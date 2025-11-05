/**
 * Type definitions for the portfolio application
 * These types ensure type safety across the application
 */

// ============================================
// Image & Media Types
// ============================================

export interface Image {
  /** Image URL (can be external or local path) */
  url: string;
  /** Alt text for accessibility */
  alt?: string;
  /** Optional description displayed below the image */
  description?: string;
}

// ============================================
// Project Types
// ============================================

export interface FileNode {
  name: string;
  type: 'file' | 'directory';
  children?: readonly FileNode[];
}

export interface ProjectStructure {
  root: string;
  children: readonly FileNode[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  repoUrl: string;
  liveUrl?: string;
  techStack: readonly string[];
  structure: ProjectStructure;
  images: readonly Image[];
}

// ============================================
// Education Types
// ============================================

export interface Education {
  degree: string;
  major?: string;
  institution: string;
  location: string;
  year: string;
  description?: string;
  images?: readonly Image[];
}

export interface Course {
  title: string;
  description: string;
  institution: string;
  location: string;
  year: string;
  images?: readonly Image[];
}

// ============================================
// Experience Types
// ============================================

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies?: readonly string[];
  images?: readonly Image[];
}

// ============================================
// Extracurricular Types
// ============================================

export interface ExtraCurricularRole {
  role: string;
  institution: string;
  location: string;
  year: string;
  images?: readonly Image[];
}

export interface ExtraCurricularActivity {
  title: string;
  description: string;
  institution: string;
  location: string;
  year: string;
  images?: readonly Image[];
}

// ============================================
// Competition Types
// ============================================

export interface Competition {
  title: string;
  description: string;
  achievement: string;
  year: string;
  images?: readonly Image[];
}

// ============================================
// Contact & Social Types
// ============================================

export interface SocialLinks {
  github: string;
  linkedin: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  calendly: string;
}

// ============================================
// Configuration Types
// ============================================

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  website: string;
  roleFocus: string;
  yearOfBirth: number;
}

export interface SpotifyConfig {
  playlistId: string;
  playlistName: string;
}

export interface ResumeConfig {
  url: string;
  localPath: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: readonly string[];
}

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

// ============================================
// Main Config Type
// ============================================

export interface UserConfig {
  // Personal Information
  name: string;
  role: string;
  location: string;
  email: string;
  website: string;
  roleFocus: string;
  yearOfBirth: number;

  // Social & Contact
  social: SocialLinks;
  contact: ContactInfo;

  // Configuration
  spotify: SpotifyConfig;
  resume: ResumeConfig;
  seo: SEOConfig;
  theme: ThemeConfig;

  // Content
  education: readonly Education[];
  courses: readonly Course[];
  skills: readonly string[];
  extraCurricularRoles: readonly ExtraCurricularRole[];
  extraCurricularActivities: readonly ExtraCurricularActivity[];
  competitions: readonly Competition[];
  experience: readonly Experience[];
  projects: readonly Project[];
}

// ============================================
// Component Prop Types
// ============================================

export interface WindowPosition {
  x: number;
  y: number;
}

export interface WindowSize {
  width: number;
  height: number;
}

export interface DraggableWindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  initialPosition?: WindowPosition;
  initialSize?: WindowSize;
  className?: string;
}

export interface AppLayoutProps {
  initialBg: string;
  backgroundMap: Record<string, string>;
}

// ============================================
// Chat/Terminal Types
// ============================================

export type MessageRole = 'system' | 'user' | 'assistant';

export interface Message {
  role: MessageRole;
  content: string;
}

export interface ChatHistory {
  messages: Message[];
  input: string;
}

// ============================================
// App State Types
// ============================================

export type AppId = 'terminal' | 'notes' | 'github' | 'resume' | 'spotify';

export interface ActiveApps {
  terminal: boolean;
  notes: boolean;
  github: boolean;
  resume: boolean;
  spotify: boolean;
}
