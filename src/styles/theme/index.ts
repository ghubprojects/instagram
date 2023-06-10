import { extendTheme } from '@chakra-ui/react';
import { avatarTheme } from './Avatar';
import { buttonTheme } from './Button';
import { inputTheme } from './Input';
import { textTheme } from './Text';

export const theme = extendTheme({
    components: { Avatar: avatarTheme, Button: buttonTheme, Input: inputTheme, Text: textTheme },
    fontSizes: {
        text: {
            10: '10px',
            11: '11px',
            12: '12px',
            14: '14px',
            16: '16px',
            18: '18px',
            20: '20px',
            22: '22px',
            24: '24px',
            26: '26px',
            28: '28px',
            32: '32px',
        },
    },
    lineHeights: {
        text: {
            10: '12px',
            11: '13px',
            12: '16px',
            14: '18px',
            16: '24px',
            18: '24px',
            20: '25px',
            22: '26px',
            24: '27px',
            26: '28px',
            28: '32px',
            32: '40px',
        },
    },
});
