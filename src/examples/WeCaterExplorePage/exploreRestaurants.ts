import restaurant1 from './assets/images/restaurant-1.jpg';
import restaurant2 from './assets/images/restaurant-2.jpg';
import restaurant3 from './assets/images/restaurant-3.jpg';
import restaurant4 from './assets/images/restaurant-4.jpg';

export type ExploreRestaurant = {
  name: string;
  location: string;
  rating: string;
  reviewCount: string;
  badge: string;
  bestSeller?: boolean;
  image: string;
};

/** Figma Explore grid — first four cards (4664:16034+). */
export const EXPLORE_RESTAURANTS: ExploreRestaurant[] = [
  {
    name: 'Biscuit Belly',
    location: 'Downtown, LA · 20min',
    rating: '4.6',
    reviewCount: '(1,500+)',
    badge: '2x rewards',
    image: restaurant1,
  },
  {
    name: 'Thai Chili 2go',
    location: 'Downtown, LA · 20min',
    rating: '4.6',
    reviewCount: '(1,500+)',
    badge: '4x rewards',
    bestSeller: true,
    image: restaurant2,
  },
  {
    name: 'McAllister’s Deli',
    location: 'Downtown, LA · 20min',
    rating: '4.6',
    reviewCount: '(1,500+)',
    badge: '3x rewards',
    image: restaurant3,
  },
  {
    name: 'Biscuit Belly',
    location: 'Downtown, LA · 20min',
    rating: '4.6',
    reviewCount: '(1,500+)',
    badge: '3x rewards',
    image: restaurant4,
  },
];
