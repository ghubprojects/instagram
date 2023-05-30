import paths from '~/config/paths';
import { ExplorePage, HomePage, InboxPage, ReelsPage } from '~/pages';

const publicRoutes = [
    { path: paths.home, component: HomePage },
    { path: paths.explore, component: ExplorePage },
    { path: paths.reels, component: ReelsPage },
    { path: paths.inbox, component: InboxPage },
];

const privateRoutes = [{}];

export { privateRoutes, publicRoutes };
