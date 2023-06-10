import { Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { main } from '~/routes';

interface IPageNotFoundProps {}

const PageNotFound: React.FunctionComponent<IPageNotFoundProps> = (props) => {
    const errorContent = '404 - Page Not Found';
    return (
        <Flex minHeight='100vh' align='center' justify='center' direction='column' gap='4'>
            <Text textAlign='center' fontSize='5xl' fontWeight='semibold'>
                {errorContent}
            </Text>
            <Text as={Link} to={main.home} fontSize='md' color='blue'>
                Back to home
            </Text>
        </Flex>
    );
};

export default PageNotFound;
