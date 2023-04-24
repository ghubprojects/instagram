import classNames from 'classnames/bind';
import Avatar from '~/components/Avatar/Avatar';
import styles from './StoryItem.module.scss';

const cx = classNames.bind(styles);

interface IStoryItemProps {
    imgSrc: string;
    username: string;
    hasNewStory?: boolean;
    hasStory?: boolean;
}

const StoryItem: React.FunctionComponent<IStoryItemProps> = ({
    imgSrc,
    username,
    hasNewStory,
    hasStory,
}) => {
    return (
        <div className={cx('wrapper')}>
            <Avatar
                src={imgSrc}
                className={cx('avatar')}
                hasNewStory={hasNewStory}
                hasStory={hasStory}
            />
            <div className={cx('username')}>{username}</div>
        </div>
    );
};

export default StoryItem;
