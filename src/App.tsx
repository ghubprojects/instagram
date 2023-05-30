import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { publicRoutes } from '~/routes';

const router = createBrowserRouter(
    createRoutesFromElements(
        publicRoutes.map((route, key) => {
            const PublicPage = route.component;
            return <Route key={key} path={route.path} element={<PublicPage />} />;
        }),
    ),
);

export default function App() {
    return (
        <div className='App'>
            <RouterProvider router={router} />
        </div>
    );
}
