import { Flex, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { MenuActiveIcon, MenuIcon } from '~/assets/icons';
import images from '~/assets/images';
import { main } from '~/routes';
import { navbarItems } from '~/utils/layoutItems';
import MoreMenu from './MoreMenu';
import NavItem from './NavItem';

interface ITheNavbarProps {}

const TheNavbar: React.FunctionComponent<ITheNavbarProps> = () => {
    const [activeItem, setActiveItem] = useState('Home');

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
            <Link to={main.home}>
                <Image src={images.instagramBrand} paddingX={3} paddingY={8} width='fit-content' />
            </Link>
            <Flex as='nav' direction='column' justify='space-between' height='full'>
                <Flex direction='column' gap={2}>
                    {navbarItems.map((item) => (
                        <NavItem
                            key={item.id}
                            data={item}
                            active={activeItem === item.title}
                            onClick={() => setActiveItem(item.title)}
                        />
                    ))}
                </Flex>

                <MoreMenu />
            </Flex>
        </Flex>
    );
};

export default TheNavbar;
