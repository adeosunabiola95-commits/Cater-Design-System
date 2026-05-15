import { useState } from 'react';
import { ExploreSidebar } from './ExploreSidebar';
import { ExploreTopBar } from './ExploreTopBar';

/** Figma: WeCater Explore page — Top bar + row (Sidebar | content) (4664:14354). */
export function WeCaterExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex h-full min-h-0 w-full flex-col overflow-hidden bg-white">
      <ExploreTopBar searchValue={searchQuery} onSearchChange={setSearchQuery} />

      <div className="flex min-h-0 flex-1 min-w-0 items-stretch overflow-hidden">
        <ExploreSidebar />

        <div className="min-h-0 min-w-0 flex-1 overflow-y-auto bg-white px-8 py-8 max-lg:py-6" />
      </div>
    </div>
  );
}
