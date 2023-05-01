import { useState } from 'react';
import classNames from 'classnames/bind';
import NavItem from './NavItem/NavItem';
import {
    CompassActiveIcon,
    CompassIcon,
    HeartActiveIcon,
    HeartIcon,
    HomeActiveIcon,
    HomeIcon,
    MenuActiveIcon,
    MenuIcon,
    MessageActiveIcon,
    MessageIcon,
    PlusActiveIcon,
    PlusIcon,
    SearchActiveIcon,
    SearchIcon,
    VideoActiveIcon,
    VideoIcon,
} from '~/assets/icons';
import config from '~/config';
import images from '~/assets/images';
import styles from './TheNavbar.module.scss';

interface ITheNavbarProps {}

const cx = classNames.bind(styles);

const navItems = [
    {
        title: 'Home',
        linkUrl: config.routes.home,
        leftIcon: <HomeIcon />,
        leftActiveIcon: <HomeActiveIcon />,
    },
    {
        title: 'Search',
        linkUrl: config.routes.home,
        leftIcon: <SearchIcon />,
        leftActiveIcon: <SearchActiveIcon />,
    },
    {
        title: 'Explore',
        linkUrl: config.routes.explore,
        leftIcon: <CompassIcon />,
        leftActiveIcon: <CompassActiveIcon />,
    },
    {
        title: 'Reels',
        linkUrl: config.routes.reels,
        leftIcon: <VideoIcon />,
        leftActiveIcon: <VideoActiveIcon />,
    },
    {
        title: 'Messages',
        linkUrl: config.routes.inbox,
        leftIcon: <MessageIcon />,
        leftActiveIcon: <MessageActiveIcon />,
    },
    {
        title: 'Notifications',
        linkUrl: config.routes.home,
        leftIcon: <HeartIcon />,
        leftActiveIcon: <HeartActiveIcon />,
    },
    {
        title: 'Create',
        linkUrl: config.routes.home,
        leftIcon: <PlusIcon />,
        leftActiveIcon: <PlusActiveIcon />,
    },
    {
        title: 'Profile',
        // linkUrl: config.routes.profile,
        avatar: images.avatar,
    },
];

const TheNavbar: React.FunctionComponent<ITheNavbarProps> = () => {
    const [activeNavItem, setActiveNavItem] = useState('Home');
    const [activeMenu, setActiveMenu] = useState(false);

    return (
        <section className={cx('container')}>
            <div>
                <img src={images.instagramBrand} className={cx('logo')} />
            </div>
            <nav>
                <ul>
                    {navItems.map((item, index) => (
                        <NavItem
                            key={index}
                            title={item.title}
                            active={activeNavItem === item.title}
                            linkUrl={item.linkUrl ?? ''}
                            avatar={item.avatar}
                            leftIcon={
                                activeNavItem === item.title ? item.leftActiveIcon : item.leftIcon
                            }
                            onClick={() => setActiveNavItem(item.title)}
                        />
                    ))}
                </ul>
                <NavItem
                    title='More'
                    active={activeMenu}
                    leftIcon={activeMenu ? <MenuActiveIcon /> : <MenuIcon />}
                    onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                />
            </nav>
        </section>
    );
};

export default TheNavbar;
