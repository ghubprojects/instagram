import { Avatar, Box, Container, Flex, Text } from '@chakra-ui/react';
import images from '~/assets/images';

const storyList = [
    {
        userName: 'bichngoc',
        userAvatar: images.avatar,
        storyStatus: 1,
    },
    {
        userName: 'bichngoc',
        userAvatar: images.avatar,
        storyStatus: 1,
    },
    {
        userName: 'bichngoc',
        userAvatar: images.avatar,
        storyStatus: 1,
    },
    {
        userName: 'bichngoc',
        userAvatar: images.avatar,
        storyStatus: 1,
    },
    {
        userName: 'bichngoc',
        userAvatar: images.avatar,
        storyStatus: 0,
    },
    {
        userName: 'bichngoc',
        userAvatar: images.avatar,
        storyStatus: 0,
    },
    {
        userName: 'bichngoc',
        userAvatar: images.avatar,
        storyStatus: 0,
    },
    {
        userName: 'bichngoc',
        userAvatar: images.avatar,
        storyStatus: 0,
    },
    {
        userName: 'bichngoc',
        userAvatar: images.avatar,
        storyStatus: 0,
    },
    {
        userName: 'bichngoc',
        userAvatar: images.avatar,
        storyStatus: 0,
    },
    {
        userName: 'bichngoc',
        userAvatar: images.avatar,
        storyStatus: 0,
    },
    {
        userName: 'bichngoc',
        userAvatar: images.avatar,
        storyStatus: 0,
    },
    {
        userName: 'bichngoc',
        userAvatar: images.avatar,
        storyStatus: 0,
    },
];

interface IStoriesProps {}

const Stories: React.FunctionComponent<IStoriesProps> = () => {
    return (
        <Flex
            gap='19px'
            paddingY={4}
            marginTop={8}
            overflowX='auto'
            width='full'
            maxWidth='var(--feed-width-wide-story)'
        >
            {storyList.map((story, index) => (
                <Box key={index} padding='0.5'>
                    <Avatar
                        src={story.userAvatar}
                        size='base'
                        showBorder={true}
                        border='2px solid white'
                        outline='2px solid red'
                    />
                    <Text fontSize='xs' lineHeight='1' align='center' mt='8px'>
                        {story.userName}
                    </Text>
                </Box>
            ))}
        </Flex>
    );
};

export default Stories;
