import type { ReactNode } from 'react';
import {
  BellIcon,
  CartHeaderIcon,
  ChatIcon,
  LocationPinIcon,
  SearchHeaderIcon,
} from './ExploreFigmaIcons';
import { Logo } from '@/components/Logo';

function GhostIconButton({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="grid h-[35px] w-[35px] place-items-center rounded-full bg-white text-text-title shadow-xs transition-[transform,background-color] active:scale-[0.97] hover:bg-mirage-50"
    >
      {children}
    </button>
  );
}

export type ExploreTopBarProps = {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  locationLabel?: string;
};

const DEFAULT_LOCATION = 'San Francisco, CA';

/** Figma: Top Bar — 60px, Essential Icons 2 (4664:14355). */
export function ExploreTopBar({
  searchValue = '',
  onSearchChange,
  locationLabel = DEFAULT_LOCATION,
}: ExploreTopBarProps) {
  return (
    <header className="flex h-[60px] w-full shrink-0 items-center gap-2 border-b border-mirage-100 bg-white px-3 sm:gap-4 sm:px-4 lg:gap-8 lg:px-6">
      <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-4 lg:gap-8">
        <Logo size="sm" className="sm:hidden" />
        <Logo size="lg" className="hidden sm:block" />
        <div className="flex min-w-0 flex-1 items-center gap-1.5 max-w-[620px]">
          <div
            className="flex h-9 w-full min-w-0 max-w-full items-center gap-2 rounded-full border border-mirage-200 bg-white px-3 shadow-xs sm:w-[225px] sm:max-w-[225px]"
            title={locationLabel}
            aria-label={`Delivery location: ${locationLabel}`}
          >
            <LocationPinIcon className="shrink-0 text-mirage-600" aria-hidden />
            <span className="min-w-0 flex-1 truncate text-left font-body text-[14px] font-medium leading-[150%] text-text-title">
              {locationLabel}
            </span>
          </div>
          <div
            className="flex h-9 min-w-0 flex-1 items-center gap-2 rounded-full border border-mirage-200 bg-white px-3 shadow-xs"
            role="search"
          >
            <SearchHeaderIcon className="shrink-0 text-mirage-600" aria-hidden />
            <input
              type="search"
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder="Search by name, cuisine, or area"
              autoComplete="off"
              aria-label="Search restaurants by name, cuisine, or area"
              className="min-w-0 flex-1 border-0 bg-transparent font-body text-[14px] font-medium leading-[150%] text-text-title outline-none placeholder:text-text-caption"
            />
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center" style={{ gap: 11 }}>
        <div className="relative flex items-center">
          <GhostIconButton label="Chat">
            <ChatIcon />
          </GhostIconButton>
          <GhostIconButton label="Cart">
            <CartHeaderIcon />
          </GhostIconButton>
          <GhostIconButton label="Notifications">
            <BellIcon />
          </GhostIconButton>
          <span
            aria-hidden
            className="pointer-events-none absolute grid h-4 w-4 place-items-center rounded-full bg-bright-red-600 font-body text-[11px] font-semibold leading-none text-white shadow-xs"
            style={{ top: 1, right: -3 }}
          >
            2
          </span>
        </div>
        <button
          type="button"
          aria-label="Profile"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white font-body text-[14px] font-semibold leading-[150%] text-brand-sherwood-green shadow-[inset_0_0_0_1px_rgba(217,221,228,0.5)] transition-transform active:scale-[0.97]"
        >
          PS
        </button>
      </div>
    </header>
  );
}
