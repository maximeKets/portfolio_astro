/**
 * STAR Projects configuration
 * Import all STAR project JSON files here
 * One file per project - same pattern as src/config/projects/
 */

import type { StarProject } from '../types';

import foxjob from './starprojects/foxjob.json';
import matching from './starprojects/matching.json';
import facturation from './starprojects/automatisation-facturation.json';

export const starProjects: readonly StarProject[] = [
    foxjob,
    matching,
    facturation,
] as StarProject[];
