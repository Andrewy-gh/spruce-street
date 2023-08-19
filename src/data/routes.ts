import { Section } from '../types';

export const navigation: Section[] = [
  {
    id: 'nav-section-1',
    section: 'Plants',
    links: [
      {
        id: 'nav-section-1-link-1',
        name: 'New Arrivals',
        path: '/new-arrivals',
      },
      {
        id: 'nav-section-1-link-2',
        name: 'Best Sellers',
        path: '/best-sellers',
      },
      { id: 'nav-section-1-link-3', name: 'Easy Care', path: '/easy-care' },
    ],
  },
  {
    id: 'nav-section-2',
    section: 'Care & Tools',
    links: [
      {
        id: 'nav-section-2-link-1',
        name: 'Potting Supplies',
        path: '/supplies',
      },
      { id: 'nav-section-2-link-2', name: 'Tools', path: '/tools' },
      { id: 'nav-section-2-link-3', name: 'Accessories', path: '/accessories' },
    ],
  },
  {
    id: 'nav-section-3',
    section: 'Planters',
    links: [
      {
        id: 'nav-section-3-link-1',
        name: 'Small & Medium',
        path: '/small-medium',
      },
      {
        id: 'nav-section-3-link-2',
        name: 'Large Planters',
        path: '/large',
      },
      {
        id: 'nav-section-3-link-3',
        name: 'Plant Stands',
        path: '/plant-stands',
      },
    ],
  },
];
export const footer: Section[] = [
  {
    id: 'footer-section-1',
    section: 'Support',
    links: [
      { id: 'footer-section-1-link-1', name: 'FAQ', path: '/faq' },
      {
        id: 'footer-section-1-link-2',
        name: 'Track Your Order',
        path: '/tracking',
      },
      { id: 'footer-section-1-link-3', name: 'Contact Us', path: '/contact' },
    ],
  },
  {
    id: 'footer-section-2',
    section: 'Explore',
    links: [
      { id: 'footer-section-2-link-1', name: 'About', path: '/about' },
      { id: 'footer-section-2-link-2', name: 'Careers', path: '/careers' },
      { id: 'footer-section-2-link-3', name: 'Press', path: '/press' },
    ],
  },
  {
    id: 'footer-section-3',
    section: 'Resources',
    links: [
      {
        id: 'footer-section-3-link-1',
        name: 'Plant Care Tips',
        path: '/plant-care',
      },
      {
        id: 'footer-section-3-link-2',
        name: 'Plant Care Library',
        path: '/library',
      },
      { id: 'footer-section-3-link-3', name: 'Blog', path: '/blog' },
    ],
  },
];
