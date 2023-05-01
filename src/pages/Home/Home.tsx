import classNames from 'classnames/bind';
import { NewsFeed, Sidebar, Stories, TheNavbar } from '~/layouts/components';
import styles from './Home.module.scss';

interface IHomeProps {}

const cx = classNames.bind(styles);

const Home: React.FunctionComponent<IHomeProps> = () => {
    return (
        <div className={cx('container')}>
            <TheNavbar />
            <div className={cx('main-content')}>
                <div className={cx('feed-group')}>
                    <Stories />
                    <NewsFeed />
                </div>
                <Sidebar />
            </div>
        </div>
    );
};

export default Home;
