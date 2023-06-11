import { Avatar, Box, Button, Flex, List, ListItem, Modal, Text, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import { moreInfoItems } from '~/utils/layoutItems';
import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import SuggestedAccount from './SuggestedAccount';
import { CircleCheckIcon } from '~/assets/icons';
import { auth } from '~/routes';

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
    const { isOpen, onOpen, onClose } = useDisclosure();
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
                    onClick={onOpen}
                >
                    Switch
                </Button>

                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>
                            <Text fontSize='text.16' lineHeight='text.16' align='center'>
                                Switch Accounts
                            </Text>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
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
                                    <Text
                                        fontSize={14}
                                        lineHeight='18px'
                                        color='rgb(var(--ig-secondary-text))'
                                    >
                                        Bich Ngoc
                                    </Text>
                                </Flex>
                                <CircleCheckIcon />
                            </Flex>
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                as={Link}
                                to={auth.login}
                                size='md'
                                width='full'
                                fontSize='text.14'
                                lineHeight='text.14'
                            >
                                Log into an Existing Account
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
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
