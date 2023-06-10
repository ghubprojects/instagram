import { Error, Explore, Home, Inbox, Reels } from '~/pages';
import { ForgotPassword, Login, SignUp } from '~/pages/auth';
import { auth, main } from './routes';

const publicRoutes = [
    { path: auth.login, component: Login },
    { path: auth.signUp, component: SignUp },
    { path: auth.forgotPassword, component: ForgotPassword },

    { path: main.home, component: Home },
    { path: main.explore, component: Explore },
    { path: main.reels, component: Reels },
    { path: main.inbox, component: Inbox },
    { path: main.error, component: Error },
];

const privateRoutes = [{}];

export { privateRoutes, publicRoutes };
