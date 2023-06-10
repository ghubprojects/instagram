import { Flex, Text } from '@chakra-ui/react';

interface ICommentProps {
    username: string;
    content: string;
}

const Comment: React.FunctionComponent<ICommentProps> = ({ username, content }) => {
    return (
        <Flex alignItems='center' gap='1' marginBottom='2'>
            <Text fontSize='14px' fontWeight='semibold'>
                {username}
            </Text>
            <Text fontSize='14px'>{content}</Text>
        </Flex>
    );
};

export default Comment;
