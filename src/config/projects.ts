/**
 * Projects configuration
 * Import all project JSON files here
 */

import type { Project } from '../types';

import aiArt from './projects/ai-art.json';
import cyrilPortfolio from './projects/cyril_portfolio.json';
import djangoWagtailSnipcart from './projects/django_wagtail_snipcart.json';
import laravelPhantomWallet from './projects/laravel-phantom-wallet.json';
import linkedinMcpServer from './projects/linkedin-mcp-server.json';
import machineLearningTd from './projects/machine_learning_td.json';
import portfolioAstro from './projects/portfolio_astro.json';
import reactBits from './projects/react-bits.json';
import rentitJavaAvance from './projects/rentit_java_avance.json';
import tradingbot from './projects/tradingbot.json';
import wecrew from './projects/wecrew.json';
import zohoBillingGenerator from './projects/zoho_billing_generator.json';

export const projects: readonly Project[] = [
  aiArt,
  cyrilPortfolio,
  djangoWagtailSnipcart,
  laravelPhantomWallet,
  linkedinMcpServer,
  machineLearningTd,
  portfolioAstro,
  reactBits,
  rentitJavaAvance,
  tradingbot,
  wecrew,
  zohoBillingGenerator
] as Project[];
