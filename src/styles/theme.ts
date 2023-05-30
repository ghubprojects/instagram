import { extendTheme } from '@chakra-ui/react';
import { avatarTheme } from '~/components/Avatar';

export const theme = extendTheme({
    components: { Avatar: avatarTheme },
});
