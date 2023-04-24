import classNames from 'classnames/bind';
import StoryItem from './StoryItem/StoryItem';
import images from '~/assets/images';
import styles from './Stories.module.scss';

const storyList = [
    {
        username: 'bichngoc',
        imgSrc: images.avatar,
        storyStatus: 1,
    },
    {
        username: 'bichngoc',
        imgSrc: images.avatar,
        storyStatus: 1,
    },
    {
        username: 'bichngoc',
        imgSrc: images.avatar,
        storyStatus: 1,
    },
    {
        username: 'bichngoc',
        imgSrc: images.avatar,
        storyStatus: 1,
    },
    {
        username: 'bichngoc',
        imgSrc: images.avatar,
        storyStatus: 0,
    },
    {
        username: 'bichngoc',
        imgSrc: images.avatar,
        storyStatus: 0,
    },
    {
        username: 'bichngoc',
        imgSrc: images.avatar,
        storyStatus: -1,
    },
    {
        username: 'bichngoc',
        imgSrc: images.avatar,
        storyStatus: -1,
    },
];

const cx = classNames.bind(styles);

interface IStoriesProps {}

const Stories: React.FunctionComponent<IStoriesProps> = () => {
    return (
        <div className={cx('container')}>
            {storyList.map((story, index) => (
                <StoryItem
                    imgSrc={story.imgSrc}
                    username={story.username}
                    hasNewStory={story.storyStatus == 1}
                    hasStory={story.storyStatus == 0}
                />
            ))}
        </div>
    );
};

export default Stories;
