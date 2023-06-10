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
        title: 'Home',
        linkUrl: main.home,
        leftIcon: <HomeIcon />,
        leftActiveIcon: <HomeActiveIcon />,
    },
    {
        title: 'Search',
        leftIcon: <SearchIcon />,
        leftActiveIcon: <SearchActiveIcon />,
    },
    {
        title: 'Explore',
        linkUrl: main.explore,
        leftIcon: <CompassIcon />,
        leftActiveIcon: <CompassActiveIcon />,
    },
    {
        title: 'Reels',
        linkUrl: main.reels,
        leftIcon: <VideoIcon />,
        leftActiveIcon: <VideoActiveIcon />,
    },
    {
        title: 'Messages',
        linkUrl: main.inbox,
        leftIcon: <MessageIcon />,
        leftActiveIcon: <MessageActiveIcon />,
    },
    {
        title: 'Notifications',
        leftIcon: <HeartIcon />,
        leftActiveIcon: <HeartActiveIcon />,
    },
    {
        title: 'Create',
        leftIcon: <PlusIcon />,
        leftActiveIcon: <PlusActiveIcon />,
    },
    {
        title: 'Profile',
        // linkUrl: main.profile,
        avatar: images.avatar,
    },
];

export const moreInfoItems = [
    {
        title: 'About',
        to: 'https://about.instagram.com/',
    },
    {
        title: 'Help',
        to: 'https://about.instagram.com/',
    },
    {
        title: 'Press',
        to: 'https://about.instagram.com/',
    },
    {
        title: 'API',
        to: 'https://about.instagram.com/',
    },
    {
        title: 'Jobs',
        to: 'https://about.instagram.com/',
    },
    {
        title: 'Privacy',
        to: 'https://about.instagram.com/',
    },
    {
        title: 'Terms',
        to: 'https://about.instagram.com/',
    },
    {
        title: 'Locations',
        to: 'https://about.instagram.com/',
    },
    {
        title: 'Language',
        to: 'https://about.instagram.com/',
    },
    {
        title: 'Meta Verified',
        to: 'https://about.instagram.com/',
    },
];
