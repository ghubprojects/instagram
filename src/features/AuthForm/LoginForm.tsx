import {
    Button,
    ChakraProps,
    FormControl,
    Input,
    InputGroup,
    InputRightElement,
    VStack,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '~/api/AuthService';
import { main } from '~/routes';

interface ILoginFormProps extends ChakraProps {}

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleLogin = async (values: { username: string; password: string }) => {
        console.log('Login: ', values);
        const response = await AuthService.login(values.username, values.password);
        console.log(response);
        if (false) {
            navigate(main.home);
        }
    };

    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={(values) => {
                console.log(123);
                handleLogin(values);
            }}
        >
            {({ errors, touched }) => (
                <FormControl as={Form} width='full' {...props}>
                    <VStack spacing={2}>
                        <Input
                            as={Field}
                            id='username'
                            name='username'
                            fontSize='text.14'
                            lineHeight='text.14'
                            placeholder='Phone number, username, or email'
                        />
                        {errors.username && touched.username ? (
                            <p style={{ color: 'red' }}>{errors.username}</p>
                        ) : null}

                        <InputGroup size='md'>
                            <Input
                                as={Field}
                                id='password'
                                name='password'
                                size='md'
                                fontSize='text.14'
                                lineHeight='text.14'
                                placeholder='Password'
                                paddingRight='4rem'
                                type={show ? 'text' : 'password'}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button variant='unstyled' size='sm' onClick={() => setShow(!show)}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        {errors.password && touched.password ? (
                            <p style={{ color: 'red' }}>{errors.password}</p>
                        ) : null}
                    </VStack>

                    <Button type='submit' size='sm' width='full' marginY={3}>
                        Log In
                    </Button>
                </FormControl>
            )}
        </Formik>
    );
};

export default LoginForm;
