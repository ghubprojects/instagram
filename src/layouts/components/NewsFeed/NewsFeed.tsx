import { Flex } from '@chakra-ui/react';
import Post from './Post';

interface INewsFeedProps {}

const NewsFeed: React.FunctionComponent<INewsFeedProps> = () => {
    return (
        <Flex flexDirection='column' gap={3} maxWidth='470px' width='full' mt={4} mx='auto'>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </Flex>
    );
};

export default NewsFeed;
