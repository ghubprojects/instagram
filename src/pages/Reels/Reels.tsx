import classNames from 'classnames/bind';
import styles from './Reels.module.scss';

const cx = classNames.bind(styles);

interface IReelsProps {}

const Reels: React.FunctionComponent<IReelsProps> = (props) => {
    return (
        <div className={cx('container')}>
            <h1>Reels Page</h1>
        </div>
    );
};

export default Reels;
