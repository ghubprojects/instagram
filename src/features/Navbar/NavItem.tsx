import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { type ReactNode } from 'react';
import { Link, type To } from 'react-router-dom';

interface INavItemProps extends React.ComponentProps<'div'> {
    title: string;
    active: boolean;
    linkUrl?: To;
    leftIcon?: ReactNode;
    avatar?: string;
}

const NavItem: React.FunctionComponent<INavItemProps> = ({
    title,
    active,
    linkUrl,
    leftIcon,
    avatar,
}) => {
    return (
        <Flex
            as={Link}
            to={linkUrl!}
            role='group'
            align='center'
            gap={4}
            padding={3}
            borderRadius='lg'
            cursor='pointer'
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
                    {leftIcon}
                </Box>
            ) : (
                <Avatar
                    size='xs'
                    src={avatar}
                    borderRadius='full'
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
