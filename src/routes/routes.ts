import config from '~/config';
import { Home, Explore, Reels, Inbox } from '~/pages';

//Pages

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.reels, component: Reels },
    { path: config.routes.inbox, component: Inbox },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
