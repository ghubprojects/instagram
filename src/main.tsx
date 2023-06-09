import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import '~/styles/global.scss';
import { theme } from '~/styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider resetCSS theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
);
