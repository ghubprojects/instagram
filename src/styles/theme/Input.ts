import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

const base = defineStyle({
    // height: '36px',
});

const sizes = {
    base: definePartsStyle({ field: base, addon: base }),
};

export const inputTheme = defineMultiStyleConfig({ sizes });
