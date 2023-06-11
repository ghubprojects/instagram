import {
    CompassActiveIcon,
    CompassIcon,
    HeartActiveIcon,
    HeartIcon,
    HomeActiveIcon,
    HomeIcon,
    MessageActiveIcon,
    MessageIcon,
    PlusActiveIcon,
    PlusIcon,
    SearchActiveIcon,
    SearchIcon,
    VideoActiveIcon,
    VideoIcon,
} from '~/assets/icons';
import images from '~/assets/images';
import { main } from '~/routes';

export const navbarItems = [
    {
        id: 0,
        title: 'Home',
        linkUrl: main.home,
        leftIcon: {
            default: <HomeIcon />,
            active: <HomeActiveIcon />,
        },
    },
    {
        id: 1,
        title: 'Search',
        leftIcon: {
            default: <SearchIcon />,
            active: <SearchActiveIcon />,
        },
    },
    {
        id: 2,
        title: 'Explore',
        linkUrl: main.explore,
        leftIcon: {
            default: <CompassIcon />,
            active: <CompassActiveIcon />,
        },
    },
    {
        id: 3,
        title: 'Reels',
        linkUrl: main.reels,
        leftIcon: {
            default: <VideoIcon />,
            active: <VideoActiveIcon />,
        },
    },
    {
        id: 4,
        title: 'Messages',
        linkUrl: main.inbox,
        leftIcon: {
            default: <MessageIcon />,
            active: <MessageActiveIcon />,
        },
    },
    {
        id: 5,
        title: 'Notifications',
        leftIcon: {
            default: <HeartIcon />,
            active: <HeartActiveIcon />,
        },
    },
    {
        id: 6,
        title: 'Create',
        leftIcon: {
            default: <PlusIcon />,
            active: <PlusActiveIcon />,
        },
    },
    {
        id: 7,
        title: 'Profile',
        // linkUrl: main.profile,
        avatar: images.avatar,
    },
];

export const moreInfoItems = [
    {
        id: 0,
        title: 'About',
        to: 'https://about.instagram.com/',
    },
    {
        id: 1,
        title: 'Help',
        to: 'https://about.instagram.com/',
    },
    {
        id: 2,
        title: 'Press',
        to: 'https://about.instagram.com/',
    },
    {
        id: 3,
        title: 'API',
        to: 'https://about.instagram.com/',
    },
    {
        id: 4,
        title: 'Jobs',
        to: 'https://about.instagram.com/',
    },
    {
        id: 5,
        title: 'Privacy',
        to: 'https://about.instagram.com/',
    },
    {
        id: 6,
        title: 'Terms',
        to: 'https://about.instagram.com/',
    },
    {
        id: 7,
        title: 'Locations',
        to: 'https://about.instagram.com/',
    },
    {
        id: 8,
        title: 'Language',
        to: 'https://about.instagram.com/',
    },
    {
        id: 9,
        title: 'Meta Verified',
        to: 'https://about.instagram.com/',
    },
];
