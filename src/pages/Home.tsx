import { Box, Flex } from '@chakra-ui/react';
import { Navbar, NewsFeed, Sidebar, Stories } from '~/features';

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = () => {
    return (
        <Flex height='full'>
            <Navbar />
            <Box marginLeft='var(--nav-medium-width)' flexGrow={1}>
                <Flex gap='16' justify='center'>
                    <Box maxWidth='var(--feed-width-wide-story)' width='full'>
                        <Stories />
                        <NewsFeed />
                    </Box>
                    <Sidebar />
                </Flex>
            </Box>
        </Flex>
    );
};

export default Home;
