import { IoFlash, IoGameController, IoSparkles } from 'react-icons/io5';
import { IconType } from 'react-icons';

export type Project = {
  slug: string;
  name: string;
  description: string;
  icon: IconType;
  brand: string;
};

// Shared by the Projects page, the breadcrumbs and the previous/next links.
export const projects: Project[] = [
  {
    slug: 'break-chain-tag',
    name: 'Break Chain Tag',
    description:
      'TCG Game project. A multiplayer fantasy game, full of lore and adventure. Built for modern browsers and mobile devices.',
    icon: IoGameController,
    brand: '#062a4d',
  },
  {
    slug: 'the-proxy-magician',
    name: 'The Proxy Magician',
    description:
      'A free, privacy-first Chrome extension to save up to 10 proxy servers and switch between them in one click.',
    icon: IoSparkles,
    brand: '#4419c4',
  },
  {
    slug: 'perf-debugger',
    name: 'PerfDebugger',
    description:
      'A free, privacy-first Chrome extension with real-time Core Web Vitals, React/Vue/Angular re-render detection and memory-leak alerts.',
    icon: IoFlash,
    brand: '#0e8a62',
  },
];
