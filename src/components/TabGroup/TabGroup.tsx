import React from 'react';

/**
 * Tab group. Maps to Figma Tab group (node 495:1517).
 * Variants: outline (underline), buttongroup (pill). Same API, controlled/uncontrolled, showContent.
 */
export type TabGroupVariant = 'outline' | 'buttongroup';
export type TabGroupSize = 'sm' | 'md';

export interface TabItem {
  id: string;
  label: React.ReactNode;
  /** Badge counter (Figma Withbadge=Yes). Shows number in 18×18 circle. Omit for no badge. */
  badge?: number;
  content?: React.ReactNode;
}

export interface TabGroupProps {
  variant?: TabGroupVariant;
  size?: TabGroupSize;
  /** When true and variant is buttongroup, tabs stretch to fill width equally. */
  fullWidth?: boolean;
  /** When true (e.g. inside Modal), no outer card—just the tablist. */
  compact?: boolean;
  tabs: TabItem[];
  activeTabId?: string;
  onTabChange?: (tabId: string) => void;
  showContent?: boolean;
  className?: string;
}

const sizeStyles: Record<TabGroupSize, string> = {
  sm: 'text-[14px] leading-[21px] tracking-[0.14px]',
  md: 'text-[16px] leading-[24px] tracking-[0.16px]',
};

export const TabGroup = React.forwardRef<HTMLDivElement, TabGroupProps>(
  (
    {
      variant = 'outline',
      size = 'sm',
      fullWidth = false,
      compact = false,
      tabs,
      activeTabId,
      onTabChange,
      showContent = true,
      className = '',
    },
    ref
  ) => {
    const [internalActive, setInternalActive] = React.useState(tabs[0]?.id ?? '');
    const activeId = activeTabId ?? internalActive;

    const handleSelect = (id: string) => {
      if (activeTabId === undefined) setInternalActive(id);
      onTabChange?.(id);
    };

    const activeTab = tabs.find((t) => t.id === activeId);
    const isOutline = variant === 'outline';
    const isButtongroupFullWidth = !isOutline && fullWidth;

    return (
      <div ref={ref} className={className || undefined}>
        <div className={compact ? '' : 'rounded-lg border border-mirage-100 bg-white'}>
          <div
            role="tablist"
            className={
              isOutline
                ? 'flex flex-row gap-4 border-b border-mirage-100 px-6 pt-5 pb-0'
                : `flex flex-row gap-2 px-6 py-4 ${fullWidth ? 'w-full' : ''}`
            }
          >
            {tabs.map((tab) => {
              const isSelected = activeId === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={showContent ? `tabpanel-${tab.id}` : undefined}
                  id={`tab-${tab.id}`}
                  onClick={() => handleSelect(tab.id)}
                  className={[
                    'flex items-center justify-center gap-2 font-body font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-salem-100 focus-visible:ring-offset-1',
                    sizeStyles[size],
                    isOutline
                      ? [
                          'relative px-[10px] pb-3 -mb-px',
                          isSelected
                            ? 'z-10 text-salem-800 shadow-[0_3px_0_0_var(--color-salem-600)]'
                            : 'border-b-2 border-transparent text-text-body hover:text-text-title',
                        ]
                      : [
                          'rounded px-2 py-1',
                          isButtongroupFullWidth && 'min-w-0 flex-1',
                          isSelected ? 'bg-mirage-100 text-text-title' : 'text-text-body hover:text-text-title',
                        ],
                  ]
                    .flat()
                    .filter(Boolean)
                    .join(' ')}
                >
                  {tab.label}
                  {tab.badge != null && !isOutline && (
                    <span
                      className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full font-body text-[10px] font-bold leading-[12px] tracking-[0.3px] text-text-body ${isSelected ? 'bg-white' : 'bg-mirage-100'}`}
                      aria-label={typeof tab.badge === 'number' ? `Count: ${tab.badge}` : undefined}
                    >
                      {typeof tab.badge === 'number' ? (tab.badge > 99 ? '99+' : tab.badge) : ''}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {showContent && activeTab?.content !== undefined && (
            <div
              role="tabpanel"
              id={`tabpanel-${activeTab.id}`}
              aria-labelledby={`tab-${activeTab.id}`}
              className="border-t border-mirage-100 px-6 py-4"
            >
              {activeTab.content}
            </div>
          )}
        </div>
      </div>
    );
  }
);

TabGroup.displayName = 'TabGroup';
