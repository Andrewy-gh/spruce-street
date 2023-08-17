export interface Link {
  id: string;
  name: string;
  path: string;
}

export interface FooterSection {
  id: string;
  section: string;
  links: Link[];
}

export const footer: FooterSection[] = [
  {
    id: 'section-1',
    section: 'Support',
    links: [
      { id: 'section-1-link-1', name: 'FAQ', path: '/faq' },
      { id: 'section-1-link-2', name: 'Track Your Order', path: '/tracking' },
      { id: 'section-1-link-3', name: 'Contact Us', path: '/contact' },
    ],
  },
  {
    id: 'section-2',
    section: 'Explore',
    links: [
      { id: 'section-2-link-1', name: 'About', path: '/about' },
      { id: 'section-2-link-2', name: 'Careers', path: '/careers' },
      { id: 'section-2-link-3', name: 'Press', path: '/press' },
    ],
  },
  {
    id: 'section-3',
    section: 'Resources',
    links: [
      { id: 'section-3-link-1', name: 'Plant Care Tips', path: '/plant-care' },
      { id: 'section-3-link-2', name: 'Plant Care Library', path: '/library' },
      { id: 'section-3-link-2', name: 'Blog', path: '/blog' },
    ],
  },
];
