import { type ReactNode } from 'react';
import { Link, type To } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NavItem.module.scss';

const cx = classNames.bind(styles);

interface INavItemProps extends React.ComponentProps<'div'> {
    title: string;
    active: boolean;
    linkUrl?: To;
    leftIcon?: ReactNode;
    avatar?: string;
}

const NavItem: React.FunctionComponent<INavItemProps> = ({
    title,
    active,
    linkUrl,
    leftIcon,
    avatar,
    ...rest
}) => {
    return (
        <Link to={linkUrl!}>
            <div className={cx('wrapper')} {...rest}>
                {leftIcon ? (
                    <div className={cx('left-icon')}>{leftIcon}</div>
                ) : (
                    <img src={avatar} className={cx('avatar', { 'active-avatar': active })} />
                )}

                <div className={cx('title', { 'active-title': active })}>{title}</div>
            </div>
        </Link>
    );
};

export default NavItem;
