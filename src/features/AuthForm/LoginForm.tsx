import {
    Button,
    ChakraProps,
    FormControl,
    Input,
    InputGroup,
    InputRightElement,
    VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

interface ILoginFormProps extends ChakraProps {}

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {
    const [show, setShow] = useState(false);

    return (
        <FormControl width='full' {...props}>
            <VStack spacing={2}>
                <Input
                    placeholder='Phone number, username, or email'
                    fontSize='text.14'
                    lineHeight='text.14'
                />

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

            <Button size='sm' width='full' marginY={3}>
                Log In
            </Button>
        </FormControl>
    );
};

export default LoginForm;
