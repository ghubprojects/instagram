import { Box, Center, Container, Flex } from '@chakra-ui/react';
import { NewsFeed, Sidebar, Stories, Navbar } from '~/layouts/components';

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
