import { GithubIcon } from '@/components/icons/github';
import { LinkedInIcon } from '@/components/icons/linkedin';
import { BlueskyIcon } from '@/components/icons/bluesky';
import type React from 'react';

export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Social = {
  platform: string;
  link: string;
  icon: React.ReactNode;
};

export type Category = {
  title: string;
  page: string | undefined;
  href: string;
};

export type Meta = {
  title: string;
  description: string;
  image: Image;
};

export type SiteConfig = {
  meta: Meta;
  name: string;
  headshot: string;
  title: string;
  description: string;
  socials: Array<Social>;
  categories: Array<Category>;
};

export const CONFIG: SiteConfig = {
  meta: {
    title: 'Gaia Rossi',
    description: 'This is my portfolio.',
    image: {
      src: '/headshot.jpg',
      alt: 'Gaia Rossi',
    },
  },
  name: 'Michael Shilman',
  headshot: '/headshot.jpg',
  title: 'Product Manager',
  description: `
		I’m Michael Shilman, entrepreneur, product manager, and open source engineer.

		My current pursuit is [Storybook](https://storybook.js.org), which I’ve led since 2017. During that time, it’s grown to become the standard workshop for UI component development. Today, Storybook is used by design system and product development teams across the industry, in every business sector, including teams at over half of the companies in the Fortune 100.

		Earlier in my career, I led development of innovative tools for parametric insurance, investment portfolio management, online shopping research, and digital ink note taking. This site collects my projects, articles, papers, talks, and awards.
	`.trim(),
  socials: [
    {
      platform: 'Bluesky',
      link: 'https://bsky.app/profile/shilman.net',
      icon: <BlueskyIcon />,
    },
    {
      platform: 'GitHub',
      link: 'https://github.com/shilman',
      icon: <GithubIcon />,
    },
    {
      platform: 'LinkedIn',
      link: 'https://www.linkedin.com/in/shilman',
      icon: <LinkedInIcon />,
    },
  ],
  categories: [
    {
      title: 'All',
      page: undefined,
      href: '/posts',
    },
    {
      title: 'Technical',
      page: 'tech',
      href: '/posts/tech',
    },
    {
      title: 'Food',
      page: 'food',
      href: '/posts/food',
    },
    {
      title: 'Travel',
      page: 'travel',
      href: '/posts/travel',
    },
  ],
};
