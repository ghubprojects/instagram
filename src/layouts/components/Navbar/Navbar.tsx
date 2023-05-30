import { Flex, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { MenuActiveIcon, MenuIcon } from '~/assets/icons';
import images from '~/assets/images';
import { navbarItems } from '~/utils/layoutItems';
import NavItem from './NavItem';

interface ITheNavbarProps {}

const TheNavbar: React.FunctionComponent<ITheNavbarProps> = () => {
    const [activeNavItem, setActiveNavItem] = useState('Home');
    const [activeMenu, setActiveMenu] = useState(false);

    return (
        <Flex
            as='section'
            direction='column'
            position='fixed'
            padding='8px 12px 20px'
            height='full'
            width='var(--nav-medium-width)'
            borderRight='1px solid rgb(var(--ig-separator))'
        >
            <Image
                src={images.instagramBrand}
                paddingX={3}
                paddingY={8}
                width='fit-content'
                cursor='pointer'
            />
            <Flex
                as='nav'
                flexGrow={1}
                direction='column'
                justify='space-between'
                height='full'
                marginY={1}
            >
                <Flex direction='column' gap={2}>
                    {navbarItems.map((item, index) => (
                        <NavItem
                            key={index}
                            title={item.title}
                            active={activeNavItem === item.title}
                            linkUrl={item.linkUrl ?? ''}
                            avatar={item.avatar}
                            leftIcon={activeNavItem === item.title ? item.leftActiveIcon : item.leftIcon}
                            onClick={() => setActiveNavItem(item.title)}
                        />
                    ))}
                </Flex>

                <NavItem
                    title='More'
                    active={activeMenu}
                    leftIcon={activeMenu ? <MenuActiveIcon /> : <MenuIcon />}
                    onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                />
            </Flex>
        </Flex>
    );
};

export default TheNavbar;
