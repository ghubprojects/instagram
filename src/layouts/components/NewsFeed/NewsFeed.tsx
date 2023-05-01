import classNames from 'classnames/bind';
import styles from './NewsFeed.module.scss';
import Post from './Post/Post';

interface INewsFeedProps {}

const cx = classNames.bind(styles);

const NewsFeed: React.FunctionComponent<INewsFeedProps> = () => {
    return (
        <section className={cx('container')}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </section>
    );
};

export default NewsFeed;
