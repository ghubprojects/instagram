import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';
import { rgb } from '~/utils/styles';

const colorScheme = {
    primary: [0, 0, 0],
    secondary: [115, 115, 115],
    tertiary: [199, 199, 199],
};

const primary = defineStyle({
    color: rgb(colorScheme.primary),
});

const secondary = defineStyle({
    color: rgb(colorScheme.secondary),
});
const tertiary = defineStyle({
    color: rgb(colorScheme.tertiary),
});

export const textTheme = defineStyleConfig({
    variants: { primary, secondary, tertiary },
});
