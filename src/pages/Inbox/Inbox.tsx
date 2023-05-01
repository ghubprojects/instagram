import classNames from 'classnames/bind';
import styles from './Inbox.module.scss';

const cx = classNames.bind(styles);

interface IInboxProps {}

const Inbox: React.FunctionComponent<IInboxProps> = (props) => {
    return (
        <div className={cx('container')}>
            <h1>Inbox Page</h1>
        </div>
    );
};

export default Inbox;
