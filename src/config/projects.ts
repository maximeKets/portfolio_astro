/**
 * Projects configuration
 * Import all project JSON files here
 */

import type { Project } from '../types';

import neurospeccompanionmerged from './projects/neurospeccompanionmerged.json';
import scheds from './projects/scheds.json';
import fadedTextRestoration from './projects/fadedtextrestoration.json';
import clinicalmain from './projects/clinicalmain.json';
import seatReservation from './projects/seatreservation.json';
import nucpaBalloons from './projects/nucpa-balloons.json';
import nucpaBalloonsApi from './projects/nucpaballoonsapi.json';
import portfolio from './projects/portfolio.json';
import foodies from './projects/foodies.json';

export const projects: readonly Project[] = [
  scheds,
  portfolio,
  foodies,
  fadedTextRestoration,
  nucpaBalloons,
  nucpaBalloonsApi,
  neurospeccompanionmerged,
  clinicalmain,
  seatReservation,
] as Project[];
