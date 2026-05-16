/** Shared copy for Modal Header molecule + Modal header stories (Figma selection). */
export const modalHeaderTitleOnlyStory = {
  title: 'Complete payment',
  variant: 'title-only' as const,
};

export const modalHeaderWithSubtextStory = {
  title: 'Change request',
  subtext: 'What would you like to update for this order?',
  variant: 'with-subtext' as const,
};

/** Figma header frame width ~723px — use Modal `lg` (720px) for matching header scale. */
export const MODAL_HEADER_PREVIEW_SIZE = 'lg' as const;
