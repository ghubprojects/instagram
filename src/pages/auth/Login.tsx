import { Button, Center, Divider, Flex, HStack, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FacebookIcon } from '~/assets/icons';
import images from '~/assets/images';
import { LoginForm } from '~/features';
import { auth } from '~/routes';

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
    return (
        <Center display='flex' flexDirection='column' height='full'>
            <Flex
                direction='column'
                align='center'
                maxWidth='350px'
                width='full'
                paddingX={10}
                paddingY={5}
                borderWidth={1}
                borderRadius='md'
            >
                <Image
                    src={images.instagramBrand}
                    width='175px'
                    marginTop={9}
                    marginBottom={3}
                    cursor='pointer'
                />

                <LoginForm marginTop={6} />

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
                    variant='link'
                    leftIcon={<FacebookIcon fill='rgb(var(--ig-link))' />}
                    fontSize='text.14'
                    lineHeight='text.14'
                    marginY={2}
                >
                    Log in with Facebook
                </Button>

                <Text
                    as={Link}
                    to={auth.forgotPassword}
                    fontSize='text.12'
                    lineHeight='text.12'
                    marginTop={2.5}
                >
                    Forgot password?
                </Text>
            </Flex>

            <Flex
                justify='center'
                maxWidth='350px'
                width='full'
                paddingX={10}
                paddingY={6}
                borderWidth={1}
                borderRadius='md'
                marginTop={2.5}
            >
                <Text fontSize='text.14' lineHeight='text.14'>
                    Don't have an account?&nbsp;
                </Text>
                <Button
                    as={Link}
                    to={auth.signUp}
                    variant='primaryLink'
                    fontSize='text.14'
                    lineHeight='text.14'
                >
                    Sign up
                </Button>
            </Flex>

            <Flex direction='column' align='center' marginTop={2.5}>
                <Text fontSize='text.14' lineHeight='text.14' paddingY={1}>
                    Get the app.
                </Text>
                <HStack spacing={2} marginY={2.5}>
                    <Image src={images.googlePlay} height={10} />
                    <Image src={images.microsoft} height={10} />
                </HStack>
            </Flex>
        </Center>
    );
};

export default Login;
