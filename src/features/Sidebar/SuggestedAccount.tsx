import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';

interface ISuggestedAccountProps {
    imgSrc: string;
    username: string;
    suggestedText: string;
    followStatus: string;
}

const SuggestedAccount: React.FunctionComponent<ISuggestedAccountProps> = ({
    imgSrc,
    username,
    suggestedText,
    followStatus,
}) => {
    return (
        <Flex align='center' paddingY={1} marginLeft='-3px'>
            <Box padding='0.5' marginRight={2}>
                <Avatar
                    src={imgSrc}
                    size='small'
                    showBorder={true}
                    border='2px solid transparent'
                    outline='2px solid transparent'
                />
            </Box>

            <Flex flexGrow={1} direction='column'>
                <Text fontSize={14} fontWeight='semibold' lineHeight='18px'>
                    {username}
                </Text>
                <Text fontSize={12} color='rgb(var(--ig-secondary-text))' lineHeight='16px'>
                    {suggestedText}
                </Text>
            </Flex>
            <Button
                variant='unstyled'
                fontSize={12}
                lineHeight='16px'
                fontWeight='semibold'
                color='rgb(var(--ig-primary-button))'
            >
                {followStatus}
            </Button>
        </Flex>
    );
};

export default SuggestedAccount;
