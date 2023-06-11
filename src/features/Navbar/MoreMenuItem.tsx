import { Box, Flex, MenuItem, Text } from '@chakra-ui/react';
import { type ReactNode } from 'react';
import { Link, type To } from 'react-router-dom';

interface IMoreMenuItemProps extends React.ComponentProps<'div'> {
    data: {
        title: string;
        linkUrl?: To;
        leftIcon?: ReactNode;
    };
}

const MoreMenuItem: React.FunctionComponent<IMoreMenuItemProps> = ({ data }) => {
    const { title, linkUrl, leftIcon } = data;
    return (
        <MenuItem
            padding={0}
            _active={{
                bg: 'transparent',
            }}
            _focus={{
                bg: 'transparent',
            }}
        >
            <Flex
                as={Link}
                to={linkUrl!}
                align='center'
                width='full'
                gap={3}
                padding={4}
                borderRadius='lg'
                _hover={{
                    bg: 'rgba(var(--ig-hover-overlay))',
                    transition: 'background-color 0.3s',
                }}
            >
                {leftIcon && <Box>{leftIcon}</Box>}

                <Text fontSize='text.14' lineHeight='text.14'>
                    {title}
                </Text>
            </Flex>
        </MenuItem>
    );
};

export default MoreMenuItem;
