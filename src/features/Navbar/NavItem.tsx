import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { type ReactNode } from 'react';
import { Link, type To } from 'react-router-dom';

interface INavItemProps extends React.ComponentProps<'div'> {
    data: {
        title: string;
        linkUrl?: To;
        leftIcon?: {
            default: ReactNode;
            active: ReactNode;
        };
        avatar?: string;
    };
    active: boolean;
}

const NavItem: React.FunctionComponent<INavItemProps> = ({ data, active }) => {
    const { title, linkUrl, leftIcon, avatar } = data;
    return (
        <Flex
            as={Link}
            to={linkUrl!}
            role='group'
            align='center'
            gap={4}
            padding={3}
            borderRadius='lg'
            _hover={{
                backgroundColor: 'rgba(var(--ig-hover-overlay))',
                transition: 'background-color 0.3s',
            }}
        >
            {leftIcon ? (
                <Box
                    _groupHover={{
                        transform: 'scale(105%)',
                        transition: 'transform 200ms cubic-bezier(0.17, 0.17, 0, 1)',
                    }}
                >
                    {active ? leftIcon.active : leftIcon.default}
                </Box>
            ) : (
                <Avatar
                    size='xs'
                    src={avatar}
                    outline={active ? '2px solid rgb(var(--ig-primary-text))' : 'none'}
                    _groupHover={{
                        transform: 'scale(105%)',
                        transition: 'transform 200ms cubic-bezier(0.17, 0.17, 0, 1)',
                    }}
                />
            )}

            <Text fontSize={16} fontWeight={active ? 'bold' : 'regular'}>
                {title}
            </Text>
        </Flex>
    );
};

export default NavItem;
