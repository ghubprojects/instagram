import {
    Button,
    ChakraProps,
    Flex,
    FormControl,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface ISignUpFormProps extends ChakraProps {}

const SignUpForm: React.FunctionComponent<ISignUpFormProps> = (props) => {
    const [show, setShow] = useState(false);

    return (
        <FormControl width='full' {...props}>
            <VStack spacing={2}>
                <Input placeholder='Phone number or email' fontSize='text.14' lineHeight='text.14' />

                <Input placeholder='Full Name' fontSize='text.14' lineHeight='text.14' />

                <Input placeholder='Username' fontSize='text.14' lineHeight='text.14' />

                <InputGroup size='md'>
                    <Input
                        size='md'
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Password'
                        fontSize='text.14'
                        lineHeight='text.14'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button variant='unstyled' size='sm' onClick={() => setShow(!show)}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </VStack>

            <VStack marginY={4} fontSize='text.12' lineHeight='text.12'>
                <Text align='center'>
                    People who use our service may have uploaded your contact information to
                    Instagram.&nbsp;
                    <Text as={Link} color='rgb(var(--ig-link))'>
                        Learn More
                    </Text>
                </Text>

                <Text align='center'>
                    By signing up, you agree to our&nbsp;
                    <Text as={Link} color='rgb(var(--ig-link))'>
                        Terms , Privacy Policy and Cookies Policy
                    </Text>
                </Text>
            </VStack>

            <Button size='sm' width='full' marginBottom={3}>
                Sign Up
            </Button>
        </FormControl>
    );
};

export default SignUpForm;
