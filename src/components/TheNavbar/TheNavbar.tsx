import classNames from 'classnames/bind';
import NavItem from './NavItem';
import {
    CompassIcon,
    HeartIcon,
    HomeIcon,
    InstagramLogo,
    MessageIcon,
    PlusIcon,
    SearchIcon,
    VideoIcon,
} from '~/assets/icons';
import styles from './TheNavbar.module.scss';
import MenuIcon from '~/assets/icons/MenuIcon';

interface ITheNavbarProps {}

const cx = classNames.bind(styles);

const navItems = [
    {
        leftIcon: <HomeIcon />,
        title: 'Home',
    },
    {
        leftIcon: <SearchIcon />,
        title: 'Search',
    },
    {
        leftIcon: <CompassIcon />,
        title: 'Explore',
    },
    {
        leftIcon: <VideoIcon />,
        title: 'Reels',
    },
    {
        leftIcon: <MessageIcon />,
        title: 'Messages',
    },
    {
        leftIcon: <HeartIcon />,
        title: 'Notifications',
    },
    {
        leftIcon: <PlusIcon />,
        title: 'Create',
    },
];

const TheNavbar: React.FunctionComponent<ITheNavbarProps> = () => {
    return (
        <section className={cx('container')}>
            <div className={cx('logo-wrapper')}>
                <InstagramLogo className={cx('logo')} />
            </div>
            <nav className={cx('nav')}>
                <ul>
                    {navItems.map((item, index) => (
                        <NavItem key={index} leftIcon={item.leftIcon} title={item.title} />
                    ))}
                </ul>
                <NavItem leftIcon={<MenuIcon />} title='More' />
            </nav>
        </section>
    );
};

export default TheNavbar;
