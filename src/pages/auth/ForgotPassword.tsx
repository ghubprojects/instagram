import { Button, Center, Divider, Flex, FormControl, Image, Input, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import { auth } from '~/routes';

interface IForgotPasswordProps {}

const ForgotPassword: React.FunctionComponent<IForgotPasswordProps> = (props) => {
    return (
        <Center display='flex' flexDirection='column' height='full'>
            <Flex
                direction='column'
                align='center'
                maxWidth='380px'
                width='full'
                paddingX={10}
                paddingY={5}
                borderWidth={1}
                borderTopRadius='md'
            >
                <Image
                    src={images.instagramBrand}
                    width='175px'
                    marginTop={9}
                    marginBottom={3}
                    cursor='pointer'
                />

                <Text fontSize='text.16' lineHeight='text.16' fontWeight='semibold'>
                    Trouble logging in?
                </Text>
                <Text variant='secondary' fontSize='text.14' lineHeight='text.14' marginY={3}>
                    Enter your email, phone, or username and we'll send you a link to get back into your
                    account.
                </Text>

                <FormControl width='full'>
                    <Input
                        placeholder='Phone number, username, or email'
                        fontSize='text.14'
                        lineHeight='text.14'
                    />

                    <Button size='sm' width='full' marginTop={4}>
                        Send login link
                    </Button>
                </FormControl>

                <Text
                    as={Link}
                    marginY={4}
                    fontSize='text.12'
                    lineHeight='text.12'
                    color='rgb(var(--ig-link))'
                >
                    Can't reset your password?
                </Text>

                <Flex width='full' align='center' gap={2.5} marginY={2.5}>
                    <Divider borderColor='rgb(219, 219, 219)' flexGrow={1} borderWidth={1} />
                    <Text
                        variant='secondary'
                        fontSize='text.12'
                        lineHeight='text.12'
                        fontWeight='semibold'
                        casing='uppercase'
                    >
                        or
                    </Text>
                    <Divider borderColor='rgb(219, 219, 219)' flexGrow={1} borderWidth={1} />
                </Flex>

                <Button
                    as={Link}
                    to={auth.signUp}
                    variant='unstyled'
                    fontSize='text.14'
                    lineHeight='text.14'
                    height='full'
                    marginY={3}
                >
                    Create new account
                </Button>
            </Flex>

            <Button
                as={Link}
                to={auth.login}
                variant='outline'
                size='lg'
                maxWidth='380px'
                width='full'
                fontSize='text.14'
                lineHeight='text.14'
                borderTop='none'
                borderTopRadius={0}
                borderBottomRadius='md'
            >
                Back to login
            </Button>
        </Center>
    );
};

export default ForgotPassword;
