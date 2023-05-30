import { Avatar, Box, Button, Flex, List, ListItem, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import { moreInfoItems } from '~/utils/layoutItems';
import SuggestedAccount from './SuggestedAccount';

const suggestedAccounts = [
    {
        imgSrc: images.avatar,
        username: 'someone.01',
        suggestedText: 'Suggested for you',
        followStatus: false,
    },
    {
        imgSrc: images.avatar,
        username: 'someone.02',
        suggestedText: 'Suggested for you',
        followStatus: false,
    },
    {
        imgSrc: images.avatar,
        username: 'someone.03',
        suggestedText: 'Suggested for you',
        followStatus: true,
    },
    {
        imgSrc: images.avatar,
        username: 'someone.04',
        suggestedText: 'Followed by the.anh + 3 more',
        followStatus: true,
    },
    {
        imgSrc: images.avatar,
        username: 'someone.05',
        suggestedText: 'Followed by the.anh + 1 more',
        followStatus: true,
    },
];

interface ISidebarProps {}

const Sidebar: React.FunctionComponent<ISidebarProps> = () => {
    return (
        <Box as='aside' maxWidth='var(--feed-sidebar-width)' width='full' paddingTop={4} marginTop={8}>
            {/* Current User */}
            <Flex align='center' marginBottom={4} marginLeft='-3px'>
                <Box padding='0.5' marginRight={3}>
                    <Avatar
                        src={images.avatar}
                        size='base'
                        showBorder={true}
                        border='2px solid transparent'
                        outline='2px solid transparent'
                    />
                </Box>

                <Flex flexGrow={1} direction='column'>
                    <Text fontSize={14} lineHeight='18px' fontWeight='semibold'>
                        bich.ngoc
                    </Text>
                    <Text fontSize={14} lineHeight='18px' color='rgb(var(--ig-secondary-text))'>
                        Bich Ngoc
                    </Text>
                </Flex>
                <Button
                    variant='unstyled'
                    fontSize={12}
                    lineHeight='16px'
                    fontWeight='semibold'
                    color='rgb(var(--ig-primary-button))'
                >
                    Switch
                </Button>
            </Flex>

            {/* Suggested Accounts */}
            <Box as='section' marginBottom={4}>
                <Flex align='center' justify='space-between'>
                    <Text
                        fontSize={14}
                        lineHeight='18px'
                        fontWeight='semibold'
                        color='rgb(var(--ig-secondary-text))'
                    >
                        Suggested for you
                    </Text>
                    <Button
                        variant='unstyled'
                        fontSize={12}
                        lineHeight='16px'
                        fontWeight='semibold'
                        color='rgb(var(--ig-primary-button))'
                    >
                        See All
                    </Button>
                </Flex>

                <Box paddingY={2} width='full'>
                    {suggestedAccounts.map((account, index) => (
                        <SuggestedAccount
                            key={index}
                            imgSrc={account.imgSrc}
                            username={account.username}
                            suggestedText={account.suggestedText}
                            followStatus={account.followStatus ? 'Following' : 'Follow'}
                        />
                    ))}
                </Box>
            </Box>

            {/* MoreInfo Section */}
            <Box as='section' fontSize={12} color='rgb(var(--ig-tertiary-text))'>
                <List display='flex' flexWrap='wrap' marginBottom={4}>
                    {moreInfoItems.map((item, index) => (
                        <ListItem key={index}>
                            <Link to={item.to}>{item.title}</Link>
                            <Text as='span' marginX='3px' hidden={index == moreInfoItems.length - 1}>
                                ·
                            </Text>
                        </ListItem>
                    ))}
                </List>
                <Text textTransform='uppercase'>© 2023 instagram from meta</Text>
            </Box>
        </Box>
    );
};

export default Sidebar;
