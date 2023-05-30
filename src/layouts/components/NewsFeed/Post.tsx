import { Avatar, Box, Flex, Image, Spacer, Text, Textarea } from '@chakra-ui/react';
import {
    CommentIcon,
    EmojiIcon,
    HeartIcon,
    OptionIcon,
    SendIcon,
    VerifiedBadgeIcon,
} from '~/assets/icons';
import images from '~/assets/images';
import Comment from './Comment';

const comments = [
    {
        username: 'someone.01',
        content: 'Khăn đẹp quá',
    },
    {
        username: 'someone.02',
        content: 'Quá là xịn luôn',
    },
    {
        username: 'someone.03',
        content: 'Chỉ biết ước',
    },
];

interface IPostProps {}

const Post: React.FunctionComponent<IPostProps> = (props) => {
    return (
        <Box as='article' paddingBottom={5} borderBottom='1px solid rgb(var(--ig-separator))'>
            <Flex alignItems='center' paddingY={2}>
                <Flex alignItems='center'>
                    <Box padding={0.5}>
                        <Avatar
                            src={images.avatar}
                            size='small'
                            showBorder={true}
                            border='2px solid white'
                            outline='2px solid red'
                        />
                    </Box>
                    <Flex alignItems='center' marginLeft={2.5} padding={0.5}>
                        <Text fontSize='14px' fontWeight='semibold'>
                            bich.ngoc
                        </Text>
                        <Box marginLeft={1}>
                            <VerifiedBadgeIcon />
                        </Box>
                    </Flex>
                    <Text fontSize='14px' color='rgb(var(--ig-secondary-text))' marginX={1}>
                        •
                    </Text>
                    <Text fontSize='14px' color='rgb(var(--ig-secondary-text))'>
                        2h
                    </Text>
                </Flex>
                <Spacer />
                <OptionIcon />
            </Flex>

            <Image src={images.postImage} alt='post-image' borderRadius='base' />

            <Flex marginTop={1}>
                <Box padding={2} marginLeft={-2}>
                    <HeartIcon />
                </Box>
                <Box padding={2}>
                    <CommentIcon />
                </Box>
                <Box padding={2}>
                    <SendIcon />
                </Box>
            </Flex>

            <Text fontSize='14px' fontWeight='semibold' marginTop={1.5} marginBottom={2}>
                29,122 likes
            </Text>

            <Box as='section'>
                <Comment username={'bich.ngoc'} content={'Iu người tặng khăn...'} />

                <Text fontSize='14px' color='rgb(var(--ig-secondary-text))' marginBottom={2}>
                    View all 999 comments
                </Text>

                {comments.map((comment, index) => (
                    <Comment key={index} username={comment.username} content={comment.content} />
                ))}

                <Flex alignItems='center'>
                    <Textarea
                        variant='unstyle'
                        fontSize='14px'
                        width='full'
                        height={5}
                        minHeight={5}
                        maxHeight={20}
                        background='transparent'
                        padding={0}
                        borderRadius={0}
                        overflow='hidden'
                        resize='none'
                        _placeholder={{ color: 'rgb(var(--ig-secondary-text))' }}
                        placeholder='Add a comment...'
                    />
                    <EmojiIcon />
                </Flex>
            </Box>
        </Box>
    );
};

export default Post;
