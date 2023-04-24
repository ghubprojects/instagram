import type { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './NavItem.module.scss';

const cx = classNames.bind(styles);

interface INavItemProps {
    leftIcon?: ReactNode;
    title: string;
}

const NavItem: React.FunctionComponent<INavItemProps> = ({ leftIcon, title }) => {
    return (
        <div className={cx('wrapper')}>
            {leftIcon}
            {title}
        </div>
    );
};

export default NavItem;
