import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './MoreInfo.module.scss';

const moreInfoList = [
    {
        title: 'About',
        to: 'https://about.instagram.com/',
    },
    {
        title: 'Help',
        to: 'https://about.instagram.com/',
    },
    {
        title: 'Press',
        to: 'https://about.instagram.com/',
    },
    {
        title: 'API',
        to: 'https://about.instagram.com/',
    },
    {
        title: 'Jobs',
        to: 'https://about.instagram.com/',
    },
    {
        title: 'Privacy',
        to: 'https://about.instagram.com/',
    },
    {
        title: 'Terms',
        to: 'https://about.instagram.com/',
    },
    {
        title: 'Locations',
        to: 'https://about.instagram.com/',
    },
    {
        title: 'Language',
        to: 'https://about.instagram.com/',
    },
    {
        title: 'Meta Verified',
        to: 'https://about.instagram.com/',
    },
];

const cx = classNames.bind(styles);

interface IMoreInfoProps {}

const MoreInfo: React.FunctionComponent<IMoreInfoProps> = () => {
    return (
        <section className={cx('wrapper')}>
            <ul className={cx('more-info-list')}>
                {moreInfoList.map((item, index) => (
                    <li key={index} className={cx('info-item')}>
                        <Link to={item.to}>{item.title}</Link>
                        {index != moreInfoList.length - 1 && (
                            <span className={cx('separator')}>·</span>
                        )}
                    </li>
                ))}
            </ul>
            <div className={cx('copyright')}>© 2023 instagram from meta</div>
        </section>
    );
};

export default MoreInfo;
