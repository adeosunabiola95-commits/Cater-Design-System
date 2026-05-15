import { ExploreSidebarIcon, type SidebarIconKey } from './ExploreSidebarIcons';

/** Figma Sidebar COMPONENT_SET 3969:7373 — variant property `Section`. */
export type SidebarSection =
  | 'Explore'
  | 'Restaurant'
  | 'Favorite'
  | 'Cart'
  | 'Orders'
  | 'Messages'
  | 'See more'
  | 'Rewards'
  | 'Account';

const SECTION_ICON: Record<
  Exclude<SidebarSection, 'See more'>,
  { line: SidebarIconKey; fill: SidebarIconKey }
> = {
  Explore: { line: 'home-smile-2-line', fill: 'home-smile-2-fill' },
  Restaurant: { line: 'restaurant-search-line', fill: 'restaurant-search-fill' },
  Favorite: { line: 'heart-2-line', fill: 'heart-2-fill' },
  Cart: { line: 'shopping-basket-line', fill: 'shopping-basket-fill' },
  Orders: { line: 'service-bell-line', fill: 'service-bell-fill' },
  Messages: { line: 'chat-1-line', fill: 'chat-1-fill' },
  Rewards: { line: 'gift-line', fill: 'gift-fill' },
  Account: { line: 'user-heart-line', fill: 'user-heart-fill' },
};

type NavItemConfig = {
  section: SidebarSection;
  label: string;
};

const TOP_ACTIONS: NavItemConfig[] = [
  { section: 'Explore', label: 'Explore' },
  { section: 'Restaurant', label: 'Restaurants' },
  { section: 'Favorite', label: 'Favorite' },
  { section: 'Cart', label: 'Cart' },
  { section: 'Orders', label: 'Orders' },
  { section: 'Messages', label: 'Messages' },
  { section: 'See more', label: 'See more' },
];

const FOOTER_ACTIONS: NavItemConfig[] = [
  { section: 'Rewards', label: 'Rewards' },
  { section: 'Account', label: 'Account' },
];

function iconForSection(section: SidebarSection, active: boolean): SidebarIconKey | null {
  if (section === 'See more') return null;
  const pair = SECTION_ICON[section];
  return active ? pair.fill : pair.line;
}

/** Figma row — 174×44 (See more active: 41px), px 20 py 10, gap 10. */
function NavItem({
  section,
  label,
  activeSection,
}: NavItemConfig & { activeSection: SidebarSection }) {
  const isSeeMore = section === 'See more';
  const active = section === activeSection;
  const icon = iconForSection(section, active);

  const isSeeMoreActive = isSeeMore && active;
  const isNavActive = active && !isSeeMore;

  const rowClass = [
    'box-border flex w-full max-w-[174px] items-center text-left font-body text-sm font-medium leading-[21px] transition-colors active:scale-[0.99]',
    isSeeMore ? 'justify-between gap-1 px-5 py-2.5' : 'gap-2.5 px-5 py-2.5',
    isSeeMoreActive ? 'h-[41px] rounded-full bg-mirage-200 text-text-title' : 'h-11',
    isNavActive
      ? 'rounded-full bg-brand-gossip text-sherwood-chelsea-gem-900'
      : !isSeeMoreActive && 'rounded-lg text-text-title hover:bg-mirage-100/70',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type="button" className={rowClass} aria-current={active ? 'page' : undefined}>
      {icon ? <ExploreSidebarIcon name={icon} /> : null}
      <span className={`min-w-0 truncate ${isSeeMore ? '' : 'flex-1'}`}>{label}</span>
      {isSeeMore ? (
        <ExploreSidebarIcon name="arrow-down-02" />
      ) : null}
    </button>
  );
}

export type ExploreSidebarProps = {
  /** Figma `Section` variant — controls active row + line/fill icons. Default: Explore. */
  section?: SidebarSection;
  className?: string;
};

/**
 * Figma Sidebar 3969:7373 — 206px, #FAFBFC, top action + footer action.
 * Footer stays pinned; only top actions scroll when space is tight.
 */
export function ExploreSidebar({ section = 'Explore', className = '' }: ExploreSidebarProps) {
  return (
    <aside
      className={`hidden h-full max-h-[calc(100dvh-60px)] min-h-0 w-[206px] min-w-[206px] max-w-[206px] shrink-0 grid-rows-[minmax(0,1fr)_auto] overflow-hidden border-r border-mirage-100 bg-[#FAFBFC] lg:grid lg:self-stretch ${className}`.trim()}
    >
      <nav
        className="flex min-h-0 flex-col gap-1 overflow-x-hidden overflow-y-auto overscroll-y-contain p-4"
        aria-label="Top action"
      >
        {TOP_ACTIONS.map((item) => (
          <NavItem key={item.section} {...item} activeSection={section} />
        ))}
      </nav>

      <nav className="shrink-0 bg-[#FAFBFC] p-4" aria-label="Footer action">
        <div className="flex flex-col gap-1">
          {FOOTER_ACTIONS.map((item) => (
            <NavItem key={item.section} {...item} activeSection={section} />
          ))}
        </div>
      </nav>
    </aside>
  );
}
