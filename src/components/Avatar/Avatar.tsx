import classNames from 'classnames/bind';
import styles from './Avatar.module.scss';

const cx = classNames.bind(styles);

interface IAvatarProps extends React.ComponentProps<'img'> {
    size?: string;
    className?: string;
    hasStory?: boolean;
    hasNewStory?: boolean;
}

const Avatar: React.FunctionComponent<IAvatarProps> = ({
    size = 'md',
    hasNewStory = false,
    hasStory = false,
    className,
    ...rest
}) => {
    const classes = [];
    switch (size) {
        case 'sm':
            classes.push('w-[36px]', 'h-[36px]');
            break;
        case 'md':
            classes.push('w-[56px]', 'h-[56px]');
            break;
        case 'lg':
            classes.push('w-18', 'h-18');
            break;
        default:
            classes.push('w-16', 'h-16');
            break;
    }
    return (
        <div className={cx('wrapper')}>
            <img
                {...rest}
                className={cx(
                    classes.join(' '),
                    'avatar-image',
                    { 'new-story-border': hasNewStory, 'story-border': hasStory },
                    className,
                )}
            />
        </div>
    );
};

export default Avatar;
