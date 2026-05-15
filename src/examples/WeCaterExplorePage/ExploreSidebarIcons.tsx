import arrowDown02 from './assets/sidebar/arrow-down-02.svg';
import chat1Fill from './assets/sidebar/chat-1-fill.svg';
import chat1Line from './assets/sidebar/chat-1-line.svg';
import giftFill from './assets/sidebar/gift-fill.svg';
import giftLine from './assets/sidebar/gift-line.svg';
import heart2Fill from './assets/sidebar/heart-2-fill.svg';
import heart2Line from './assets/sidebar/heart-2-line.svg';
import homeSmile2Fill from './assets/sidebar/home-smile-2-fill.svg';
import homeSmile2Line from './assets/sidebar/home-smile-2-line.svg';
import restaurantSearchFill from './assets/sidebar/restaurant-search-fill.svg';
import restaurantSearchLine from './assets/sidebar/restaurant-search-line.svg';
import serviceBellFill from './assets/sidebar/service-bell-fill.svg';
import serviceBellLine from './assets/sidebar/service-bell-line.svg';
import shoppingBasketFill from './assets/sidebar/shopping-basket-fill.svg';
import shoppingBasketLine from './assets/sidebar/shopping-basket-line.svg';
import userHeartFill from './assets/sidebar/user-heart-fill.svg';
import userHeartLine from './assets/sidebar/user-heart-line.svg';

/** Hugeicons asset keys — match Figma frame names (`*-line` / `*-fill`). */
export const SIDEBAR_ICONS = {
  'home-smile-2-line': homeSmile2Line,
  'home-smile-2-fill': homeSmile2Fill,
  'restaurant-search-line': restaurantSearchLine,
  'restaurant-search-fill': restaurantSearchFill,
  'heart-2-line': heart2Line,
  'heart-2-fill': heart2Fill,
  'shopping-basket-line': shoppingBasketLine,
  'shopping-basket-fill': shoppingBasketFill,
  'service-bell-line': serviceBellLine,
  'service-bell-fill': serviceBellFill,
  'chat-1-line': chat1Line,
  'chat-1-fill': chat1Fill,
  'gift-line': giftLine,
  'gift-fill': giftFill,
  'user-heart-line': userHeartLine,
  'user-heart-fill': userHeartFill,
  'arrow-down-02': arrowDown02,
} as const;

export type SidebarIconKey = keyof typeof SIDEBAR_ICONS;

export type SidebarIconVariant = 'line' | 'fill';

export function ExploreSidebarIcon({
  name,
  className = '',
}: {
  name: SidebarIconKey;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-6 w-6 shrink-0 items-center justify-center ${className}`}
      aria-hidden
    >
      <img src={SIDEBAR_ICONS[name]} alt="" className="h-6 w-6 object-contain" draggable={false} />
    </span>
  );
}
