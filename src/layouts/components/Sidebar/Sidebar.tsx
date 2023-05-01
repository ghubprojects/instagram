import classNames from 'classnames/bind';
import { Avatar, Button } from '~/components';
import SuggestedAccount from './SuggestedAccount/SuggestedAccount';
import MoreInfo from './MoreInfo/MoreInfo';
import images from '~/assets/images';
import styles from './Sidebar.module.scss';

const suggestedAccounts = [
    {
        imgSrc: images.avatar,
        username: 'someone.01',
        suggestedText: 'Suggested for you',
        followStatus: false,
    },
    {
        imgSrc: images.avatar,
        username: 'someone.02',
        suggestedText: 'Suggested for you',
        followStatus: false,
    },
    {
        imgSrc: images.avatar,
        username: 'someone.03',
        suggestedText: 'Suggested for you',
        followStatus: true,
    },
    {
        imgSrc: images.avatar,
        username: 'someone.04',
        suggestedText: 'Followed by the.anh + 3 more',
        followStatus: true,
    },
    {
        imgSrc: images.avatar,
        username: 'someone.05',
        suggestedText: 'Followed by the.anh + 1 more',
        followStatus: true,
    },
];

const cx = classNames.bind(styles);

interface ISidebarProps {}

const Sidebar: React.FunctionComponent<ISidebarProps> = () => {
    return (
        <aside className={cx('container')}>
            <div className={cx('current-account')}>
                <Avatar src={images.avatar} size='md' className={cx('avatar')} />
                <div className={cx('username-group')}>
                    <div className={cx('username')}>bich.ngoc</div>
                    <span className={cx('fullname')}>Bich Ngoc</span>
                </div>
                <Button>Switch</Button>
            </div>
            <section className={cx('suggested')}>
                <div className={cx('title')}>
                    <p className={cx('text')}>Suggested for you</p>
                    <Button>See all</Button>
                </div>
                <div className={cx('suggested-accounts')}>
                    {suggestedAccounts.map((account, index) => (
                        <SuggestedAccount
                            key={index}
                            imgSrc={account.imgSrc}
                            username={account.username}
                            suggestedText={account.suggestedText}
                            followStatus={account.followStatus ? 'Following' : 'Follow'}
                        />
                    ))}
                </div>
            </section>
            <MoreInfo />
        </aside>
    );
};

export default Sidebar;
