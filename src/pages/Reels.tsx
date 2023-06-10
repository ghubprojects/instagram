import { Text } from '@chakra-ui/react';
import { Navbar } from '~/features';

interface IReelsProps {}

const Reels: React.FunctionComponent<IReelsProps> = (props) => {
    return (
        <div>
            <Navbar />
            <Text marginLeft={300} fontSize='3xl'>
                Reels Page
            </Text>
        </div>
    );
};

export default Reels;
