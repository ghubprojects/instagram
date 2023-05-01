import classNames from 'classnames/bind';
import styles from './Explore.module.scss';

const cx = classNames.bind(styles);

interface IExploreProps {}

const Explore: React.FunctionComponent<IExploreProps> = (props) => {
    return (
        <div className={cx('container')}>
            <h1>Explore Page</h1>
        </div>
    );
};

export default Explore;
