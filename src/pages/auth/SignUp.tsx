import { Button, Center, Divider, Flex, HStack, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FacebookIcon } from '~/assets/icons';
import images from '~/assets/images';
import { SignUpForm } from '~/features';
import { auth } from '~/routes';

interface ISignUpProps {}

const SignUp: React.FunctionComponent<ISignUpProps> = (props) => {
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

                <Text
                    variant='secondary'
                    fontWeight='semibold'
                    fontSize='text.16'
                    lineHeight='text.16'
                    align='center'
                    marginBottom={2}
                >
                    Sign up to see photos and videos from your friends.
                </Text>

                <Button
                    size='sm'
                    width='full'
                    marginY={2}
                    leftIcon={<FacebookIcon fill='rgb(255, 255, 255)' />}
                >
                    Log in with Facebook
                </Button>

                <Flex width='full' align='center' gap={2.5} marginY={3}>
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

                <SignUpForm marginTop={2} />
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
                    Have an account?&nbsp;
                </Text>
                <Button
                    as={Link}
                    to={auth.login}
                    variant='primaryLink'
                    fontSize='text.14'
                    lineHeight='text.14'
                >
                    Log in
                </Button>
            </Flex>
        </Center>
    );
};

export default SignUp;
