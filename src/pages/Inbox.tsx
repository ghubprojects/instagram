import { Text } from '@chakra-ui/react';
import { Navbar } from '~/features';

interface IInboxProps {}

const Inbox: React.FunctionComponent<IInboxProps> = (props) => {
    return (
        <div>
            <Navbar />
            <Text marginLeft={300} fontSize='3xl'>
                Inbox Page
            </Text>
        </div>
    );
};

export default Inbox;
