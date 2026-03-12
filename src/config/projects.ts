/**
 * Projects configuration
 * Import all project JSON files here
 */

import type { Project } from '../types';

import portfolio from './projects/portfolio_astro.json';


export const projects: readonly Project[] = [
portfolio
] as Project[];
