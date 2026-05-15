import { Button } from '../../components/Button';
import { MicIcon, SendIcon } from './ExploreFigmaIcons';
import heroIllustration from './assets/hero-ai-ordering-illustration.png';

/** Figma: AI Ordering — 587×223 (4664:14360). */
export function ExploreHero() {
  return (
    <section
      className="relative isolate h-[223px] w-full min-w-0 overflow-hidden rounded-[20px] bg-[#073D30]"
      aria-labelledby="explore-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[min(58%,394px)] select-none overflow-hidden"
        aria-hidden
      >
        <img
          src={heroIllustration}
          alt=""
          className="h-full w-full max-w-none object-cover object-right object-top"
        />
      </div>

      <h1
        id="explore-hero-heading"
        className="absolute left-6 top-[21px] z-10 m-0 max-w-[calc(100%-3rem)] font-title text-[31px] font-semibold leading-[1.2] tracking-[-0.02em] text-white"
      >
        Plan your next catering order
      </h1>

      {/* Figma: AI Input — bottom block, p 24, gap 12 */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col gap-3 p-6">
        <form
          className="flex h-[45px] w-full min-w-0 items-center gap-2 rounded-[48px] bg-white py-3 pl-4 pr-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            readOnly
            placeholder="e.g Lunch for 50 guest tomorrow under $500"
            className="min-w-0 flex-1 border-0 bg-transparent font-body text-sm font-medium leading-[1.5] text-text-title outline-none placeholder:text-mirage-600"
            aria-label="Describe your catering order"
          />
          <Button
            type="button"
            variant="ghost"
            size="small"
            icon="alone"
            aria-label="Voice input"
            className="!h-9 !w-9 !min-w-9 shrink-0 !text-mirage-600 !shadow-none"
            iconElement={<MicIcon />}
          />
          <Button
            type="button"
            variant="primary"
            size="small"
            icon="alone"
            aria-label="Send"
            className="!h-9 !w-9 !min-w-9 shrink-0"
            iconElement={<SendIcon />}
          />
        </form>
      </div>
    </section>
  );
}
