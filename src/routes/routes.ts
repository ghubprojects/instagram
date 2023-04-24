import config from '~/config';
import Home from '~/pages/Home/Home';
import Explore from '~/pages/Explore/Explore';
import Reels from '~/pages/Reels/Reels';

//Pages

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.reels, component: Reels },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
