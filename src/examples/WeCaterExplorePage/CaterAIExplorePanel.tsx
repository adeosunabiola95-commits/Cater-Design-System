import React, { useEffect, useId, useState } from 'react';
import { Button } from '../../components/Button';
import {
  CaterAIHeaderMark,
  CaterAICloseIcon,
  CaterAIHistoryIcon,
  CaterAIMicIcon,
  CaterAISendIcon,
  CaterAISuggestedPromptIcon,
} from './CaterAIFigmaIcons';
import betaBadge from './assets/beta-badge.svg';

const WELCOME_LINE =
  'Welcome Preet The Cater Assistance can help you plan your catering, select offers and help with reordering and more.';

const SUGGESTED_PROMPTS = [
  'Plan lunch for 50 people',
  'Catering for a team meeting',
  'Find vegeterian options',
  'Dinner for 30 under $400',
] as const;

const SUGGESTED_PROMPTS_TWO_COL_AT_PX = 480;

export type CaterAIExplorePanelProps = {
  width: number;
  onResizeStart: (e: React.MouseEvent<HTMLDivElement>) => void;
  /** `docked` = third column in explore row; `overlay` = fixed mobile composer/sheet */
  layout: 'docked' | 'overlay';
};

/** Figma: Catering Assistant Container — resizable on desktop, sheet on mobile (4664:16127). */
export function CaterAIExplorePanel({ width, onResizeStart, layout }: CaterAIExplorePanelProps) {
  const isDocked = layout === 'docked';
  const isNarrow = layout === 'overlay';
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);
  const caterDialogTitleId = useId();

  const isMobileComposerOnly = isNarrow && !mobileSheetOpen;
  const isMobileFullScreen = isNarrow && mobileSheetOpen;

  useEffect(() => {
    if (!isNarrow || !mobileSheetOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isNarrow, mobileSheetOpen]);

  const sectionShellClass = isDocked
    ? '@container/cater-ai relative box-border flex h-full min-h-0 w-full min-w-0 max-w-full flex-col overflow-hidden border-l border-mirage-100 bg-mirage-50'
    : isMobileFullScreen
      ? '@container/cater-ai fixed inset-0 z-50 box-border flex min-h-0 w-full min-w-0 max-w-full flex-col overflow-hidden border-0 bg-mirage-50 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]'
      : '@container/cater-ai fixed bottom-0 left-0 right-0 z-40 box-border flex max-h-[100dvh] w-full min-w-0 max-w-full flex-col overflow-hidden border-t border-mirage-100 bg-mirage-50 shadow-[0_-4px_24px_rgba(16,24,40,0.1)]';

  /** Column count follows panel width (prop), not viewport — avoids clipping when panel is narrow. */
  const promptGridClass =
    isDocked && width >= SUGGESTED_PROMPTS_TWO_COL_AT_PX
      ? 'grid w-full min-w-0 max-w-full grid-cols-[repeat(2,minmax(0,1fr))]'
      : 'grid w-full min-w-0 max-w-full grid-cols-[repeat(1,minmax(0,1fr))] @min-[480px]/cater-ai:grid-cols-[repeat(2,minmax(0,1fr))]';

  return (
    <section
      className={sectionShellClass}
      role={isMobileFullScreen ? 'dialog' : undefined}
      aria-modal={isMobileFullScreen ? true : undefined}
      aria-labelledby={isMobileFullScreen ? caterDialogTitleId : undefined}
      aria-label={!isMobileFullScreen ? 'Catering assistant' : undefined}
    >
      <div
        role="separator"
        aria-orientation="vertical"
        aria-label="Resize chat panel"
        onMouseDown={onResizeStart}
        className="group absolute bottom-0 left-0 top-0 z-10 hidden w-1.5 cursor-col-resize lg:block"
      >
        <div className="mx-auto h-full w-px bg-transparent transition-colors group-hover:bg-salem-300" />
      </div>

      <header
        className={`box-border flex h-[67px] w-full max-w-full shrink-0 items-center gap-2.5 bg-white px-5 min-w-0 ${
          isMobileComposerOnly ? 'hidden' : ''
        }`}
      >
        <div className="flex min-w-0 flex-1 items-center gap-1.5">
          <CaterAIHeaderMark size={24} className="shrink-0" />
          <span
            id={caterDialogTitleId}
            className="truncate font-body text-base font-semibold leading-6 text-text-title"
          >
            Ask CaterAI
          </span>
          <img src={betaBadge} alt="Beta" width={40} height={20} className="h-5 w-auto shrink-0" />
        </div>
        <button
          type="button"
          aria-label="Chat history"
          className="shrink-0 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-salem-100"
        >
          <CaterAIHistoryIcon size={35} />
        </button>
        {isNarrow ? (
          <button
            type="button"
            aria-label="Close Cater assistance"
            onClick={() => setMobileSheetOpen(false)}
            className="grid h-6 w-6 shrink-0 place-items-center text-text-title hover:text-mirage-700"
          >
            <CaterAICloseIcon size={24} />
          </button>
        ) : null}
      </header>

      <div
        className={`flex min-h-0 w-full min-w-0 max-w-full flex-1 flex-col overflow-hidden bg-white ${
          isMobileComposerOnly ? 'hidden' : ''
        }`}
      >
        <div className="box-border flex min-h-0 w-full min-w-0 max-w-full flex-1 flex-col gap-8 overflow-x-hidden overflow-y-auto overscroll-y-contain px-5 py-5">
          <p className="min-w-0 max-w-full font-body text-sm leading-5 break-words text-[#29344A]">
            {WELCOME_LINE}
          </p>

          <div className="flex w-full min-w-0 max-w-full flex-col gap-3">
            <p className="font-body text-[13px] font-medium leading-5 text-text-title">Suggested prompts</p>
            <div className={`gap-3 ${promptGridClass}`}>
            {SUGGESTED_PROMPTS.map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => {
                  if (isNarrow) setMobileSheetOpen(true);
                }}
                className="box-border flex min-h-[52px] w-full min-w-0 max-w-full items-center gap-2 rounded-xl border border-mirage-200 bg-white py-3 pl-3 pr-3 text-left transition-colors hover:bg-mirage-50 active:scale-[0.99]"
              >
                <span className="shrink-0" aria-hidden>
                  <CaterAISuggestedPromptIcon size={20} />
                </span>
                <span className="min-w-0 flex-1 break-words font-body text-[13px] leading-5 text-text-title">
                  {label}
                </span>
              </button>
            ))}
          </div>
          </div>
        </div>
      </div>

      <footer
        className={`box-border w-full max-w-full shrink-0 bg-white px-5 py-5 min-w-0 ${
          isMobileComposerOnly ? 'border-t-0' : 'border-t border-mirage-50'
        }`}
      >
        <form
          className="box-border flex h-[45px] w-full min-w-0 max-w-full items-center gap-2 rounded-[48px] border border-mirage-200 bg-white pl-4 pr-1"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            readOnly={!isMobileFullScreen}
            placeholder="Ask about headcount, budget, offers or dietary options"
            onFocus={() => {
              if (isNarrow && !mobileSheetOpen) setMobileSheetOpen(true);
            }}
            onClick={() => {
              if (isNarrow && !mobileSheetOpen) setMobileSheetOpen(true);
            }}
            className="min-w-0 flex-1 border-0 bg-transparent font-body text-sm font-medium text-text-title outline-none placeholder:text-text-caption"
            aria-label="Message CaterAI"
          />
          <Button
            type="button"
            variant="ghost"
            size="small"
            icon="alone"
            aria-label="Voice input"
            className="!h-[35px] !w-[35px] !min-w-[35px] shrink-0 !shadow-none"
            iconElement={<CaterAIMicIcon size={18} />}
            onClick={() => {
              if (isNarrow && !mobileSheetOpen) setMobileSheetOpen(true);
            }}
          />
          <button
            type="submit"
            aria-label="Send message"
            className="shrink-0"
            onClick={() => {
              if (isNarrow && !mobileSheetOpen) setMobileSheetOpen(true);
            }}
          >
            <CaterAISendIcon size={39} />
          </button>
        </form>
      </footer>
    </section>
  );
}
