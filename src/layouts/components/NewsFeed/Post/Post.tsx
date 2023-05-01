import classNames from 'classnames/bind';
import { Avatar } from '~/components';
import Comment from './Comment/Comment';
import {
    CommentIcon,
    EmojiIcon,
    HeartIcon,
    OptionIcon,
    SendIcon,
    VerifiedBadgeIcon,
} from '~/assets/icons';
import images from '~/assets/images';
import styles from './Post.module.scss';

const comments = [
    {
        username: 'someone.01',
        content: 'Khăn đẹp quá',
    },
    {
        username: 'someone.02',
        content: 'Quá là xịn luôn',
    },
    {
        username: 'someone.03',
        content: 'Chỉ biết ước',
    },
];

const cx = classNames.bind(styles);

interface IPostProps {}

const Post: React.FunctionComponent<IPostProps> = (props) => {
    return (
        <article className={cx('wrapper')}>
            <header>
                <div className={cx('post-info')}>
                    <Avatar src={images.avatar} size='sm' hasNewStory />
                    <div className={cx('username-group')}>
                        <div className={cx('username')}>bich.ngoc</div>
                        <VerifiedBadgeIcon className={cx('verified-badge-icon')} />
                    </div>
                    <span className={cx('username-separator')}>•</span>
                    <span className={cx('post-time')}>2h</span>
                </div>
                <OptionIcon />
            </header>
            <div>
                <img src={images.postImage} alt='post-image' className={cx('post-image')} />
            </div>
            <section className={cx('options')}>
                <div className={cx('option-icon')}>
                    <HeartIcon />
                </div>
                <div className={cx('option-icon')}>
                    <CommentIcon />
                </div>
                <div className={cx('option-icon')}>
                    <SendIcon />
                </div>
            </section>
            <div className={cx('likes')}>29,122 likes</div>
            <section className={cx('post-content')}>
                <Comment username={'bich.ngoc'} content={'Iu người tặng khăn...'} />

                <div className={cx('view-all-comments')}>View all 999 comments</div>
                <div className={cx('comments')}>
                    {comments.map((comment, index) => (
                        <Comment
                            key={index}
                            username={comment.username}
                            content={comment.content}
                        />
                    ))}
                </div>
                <div className={cx('add-comment')}>
                    <textarea placeholder='Add a comment...' className={cx('input')} />
                    <EmojiIcon />
                </div>
            </section>
        </article>
    );
};

export default Post;
