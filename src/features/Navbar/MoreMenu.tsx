import {
    Box,
    Flex,
    Menu,
    MenuButton,
    MenuDivider,
    MenuGroup,
    MenuItem,
    MenuList,
    Text,
} from '@chakra-ui/react';
import {
    BookmarkIcon,
    HistoryIcon,
    MenuActiveIcon,
    MenuIcon,
    ReportIcon,
    SettingIcon,
} from '~/assets/icons';
import ThemeIcon from '~/assets/icons/ThemeIcon';
import MoreMenuItem from './MoreMenuItem';

interface IMoreMenuProps {}

const MoreMenu: React.FunctionComponent<IMoreMenuProps> = (props) => {
    const moreMenuItems = [
        {
            id: 0,
            title: 'Settings',
            leftIcon: <SettingIcon />,
        },
        {
            id: 1,
            title: 'Your activity',
            leftIcon: <HistoryIcon />,
        },
        {
            id: 2,
            title: 'Saved',
            leftIcon: <BookmarkIcon />,
        },
        {
            id: 3,
            title: 'Switch appearance',
            leftIcon: <ThemeIcon />,
        },
        {
            id: 4,
            title: 'Report a problem',
            leftIcon: <ReportIcon />,
        },
    ];

    return (
        <Menu>
            {({ isOpen }) => {
                return (
                    <>
                        <MenuButton
                            role='group'
                            as={Flex}
                            borderRadius='lg'
                            _hover={{
                                backgroundColor: 'rgba(var(--ig-hover-overlay))',
                                transition: 'background-color 0.3s',
                            }}
                        >
                            <Flex align='center' gap={4} padding={3}>
                                <Box
                                    _groupHover={{
                                        transform: 'scale(105%)',
                                        transition: 'transform 200ms cubic-bezier(0.17, 0.17, 0, 1)',
                                    }}
                                >
                                    {isOpen ? <MenuActiveIcon /> : <MenuIcon />}
                                </Box>

                                <Text
                                    fontSize='text.16'
                                    lineHeight='text.16'
                                    fontWeight={isOpen ? 'bold' : 'regular'}
                                >
                                    Menu
                                </Text>
                            </Flex>
                        </MenuButton>

                        <MenuList
                            minWidth='var(--more-menu-width)'
                            width='full'
                            padding={2}
                            border='none'
                            borderRadius='2xl'
                            filter='drop-shadow(0 4px 12px rgba(0, 0, 0,.15))'
                        >
                            <MenuGroup>
                                {moreMenuItems.map((item) => (
                                    <MoreMenuItem key={item.id} data={item}></MoreMenuItem>
                                ))}
                            </MenuGroup>
                            <MenuDivider marginX={-2} color='rgb(var(--ig-separator))' borderWidth={4} />

                            <MenuGroup>
                                <MoreMenuItem data={{ title: 'Switch accounts' }}></MoreMenuItem>
                            </MenuGroup>
                            <MenuDivider marginX={-2} color='rgb(var(--ig-separator))' />

                            <MenuGroup>
                                <MoreMenuItem data={{ title: 'Log out' }}></MoreMenuItem>
                            </MenuGroup>
                        </MenuList>
                    </>
                );
            }}
        </Menu>
    );
};

export default MoreMenu;
