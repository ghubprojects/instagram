import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';
import { rgb, rgba } from '~/utils/styles';

const colorScheme = {
    primary: {
        500: [0, 149, 246],
        900: [24, 119, 242],
    },
    secondary: {
        100: [0, 0, 0, 0.5],
    },
    link: {
        500: [0, 55, 107],
    },
};

const baseStyle = defineStyle({
    borderRadius: '8px',
    fontWeight: 'semibold',
});

const solid = defineStyle({
    bg: rgb(colorScheme.primary[500]),
    color: 'white',
    _hover: {
        bg: rgb(colorScheme.primary[900]),
    },
});

const outline = defineStyle({
    _hover: {
        bg: 'transparent',
        color: rgba(colorScheme.secondary[100]),
    },
});

const unstyled = defineStyle({
    color: 'black',
    _hover: {
        opacity: 0.5,
    },
});

const link = defineStyle({
    color: rgb(colorScheme.link[500]),
    _hover: {
        textDecoration: 'none',
    },
});

const primaryLink = defineStyle({
    padding: 0,
    height: 'full',
    color: rgb(colorScheme.primary[500]),
    _hover: {
        textDecoration: 'none',
    },
});

export const buttonTheme = defineStyleConfig({
    baseStyle,
    variants: {
        solid,
        outline,
        unstyled,
        link,
        primaryLink,
    },
});
