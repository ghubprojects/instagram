import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface IButtonProps {
    children: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({ children }) => {
    return <button className={cx('wrapper')}>{children}</button>;
};

export default Button;
