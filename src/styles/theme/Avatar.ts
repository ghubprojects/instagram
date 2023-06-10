import { avatarAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const base = defineStyle({
    width: '58px',
    height: '58px',
});

const small = defineStyle({
    width: '36px',
    height: '36px',
});

const sizes = {
    base: definePartsStyle({
        container: base,
        excessLabel: base,
    }),
    small: definePartsStyle({
        container: small,
        excessLabel: small,
    }),
};

export const avatarTheme = defineMultiStyleConfig({
    sizes,
});
