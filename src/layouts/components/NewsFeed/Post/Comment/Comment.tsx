import classNames from 'classnames/bind';
import styles from './Comment.module.scss';

const cx = classNames.bind(styles);

interface ICommentProps {
    username: string;
    content: string;
}

const Comment: React.FunctionComponent<ICommentProps> = ({ username, content }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('username')}>{username}</div>
            <div className={cx('content')}>{content}</div>
        </div>
    );
};

export default Comment;
