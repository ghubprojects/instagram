import classNames from 'classnames/bind';
import Avatar from '~/components/Avatar';
import Button from '~/components/Button';
import styles from './SuggestedAccount.module.scss';

interface ISuggestedAccountProps {
    imgSrc: string;
    username: string;
    suggestedText: string;
    followStatus: string;
}

const cx = classNames.bind(styles);

const SuggestedAccount: React.FunctionComponent<ISuggestedAccountProps> = ({
    imgSrc,
    username,
    suggestedText,
    followStatus,
}) => {
    return (
        <div className={cx('wrapper')}>
            <Avatar src={imgSrc} size='sm' className={cx('avatar')} />
            <div className={cx('username-group')}>
                <div className={cx('username')}>{username}</div>
                <span className={cx('text')}>{suggestedText}</span>
            </div>
            <Button>{followStatus}</Button>
        </div>
    );
};

export default SuggestedAccount;
