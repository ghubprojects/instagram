import { Text } from '@chakra-ui/react';
import { Navbar } from '~/features';

interface IExploreProps {}

const Explore: React.FunctionComponent<IExploreProps> = (props) => {
    return (
        <div>
            <Navbar />
            <Text marginLeft={300} fontSize='3xl'>
                Explore Page
            </Text>
        </div>
    );
};

export default Explore;
