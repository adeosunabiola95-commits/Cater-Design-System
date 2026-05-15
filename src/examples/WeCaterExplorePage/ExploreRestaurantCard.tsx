import { useState } from 'react';
import { Badge } from '../../components/Badge';
import { HeartFill, HeartOutline, HonourStar, StarFill } from './ExploreFigmaIcons';
import type { ExploreRestaurant } from './exploreRestaurants';

/** Figma 4673:15855 — Restaurant card (281×228). */
export function ExploreRestaurantCard({ restaurant }: { restaurant: ExploreRestaurant }) {
  const [saved, setSaved] = useState(false);

  return (
    <article className="flex w-full min-w-0 flex-col gap-3 overflow-hidden">
      {/* Image Container — 140px, radius 12 */}
      <div className="relative h-[140px] w-full overflow-hidden rounded-xl bg-mirage-100">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Body row — gap 12 */}
      <div className="flex w-full items-start gap-3">
        {/* Text stack — gap 6 */}
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <h3 className="truncate font-title text-base font-semibold leading-[1.5] text-text-title">
            {restaurant.name}
          </h3>
          <p
            className="truncate font-body text-[13px] font-normal leading-[1.5] tracking-[-0.01em] text-mirage-600"
            title={restaurant.location}
          >
            {restaurant.location}
          </p>

          {/* Meta row — gap 6 */}
          <div className="flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-1">
            <div className="flex min-w-0 items-center gap-2">
              <div className="flex shrink-0 items-center gap-0.5">
                <span className="font-body text-[13px] font-normal leading-[1.5] tracking-[-0.01em] text-text-title">
                  {restaurant.rating}
                </span>
                <StarFill size={12} />
              </div>
              <span className="min-w-0 truncate font-body text-[13px] font-normal leading-[1.5] tracking-[-0.01em] text-mirage-600">
                {restaurant.reviewCount}
              </span>
            </div>
            <Badge
              color="green"
              size="sm"
              state="lighter"
              showIcon={false}
              className="max-w-full shrink !h-5 !rounded !px-1.5 !text-[13px] !font-normal !leading-[1.5] !tracking-[-0.01em] !text-salem-900"
            >
              {restaurant.badge}
            </Badge>
          </div>

          {restaurant.bestSeller ? (
            <div className="flex items-center gap-1.5">
              <HonourStar size={16} className="shrink-0 text-text-title" />
              <span className="font-body text-[13px] font-normal leading-[1.5] tracking-[-0.01em] text-text-title">
                Best Seller
              </span>
            </div>
          ) : null}
        </div>

        {/* love icon — 24×24 */}
        <button
          type="button"
          onClick={() => setSaved((v) => !v)}
          aria-pressed={saved}
          aria-label={saved ? 'Remove from saved' : 'Save restaurant'}
          className="grid h-6 w-6 shrink-0 place-items-center text-text-title outline-none focus-visible:ring-2 focus-visible:ring-salem-100"
        >
          {saved ? <HeartFill size={24} /> : <HeartOutline size={24} />}
        </button>
      </div>
    </article>
  );
}
