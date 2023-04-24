import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    {publicRoutes.map((route, key) => {
                        const PublicPage = route.component;
                        return <Route key={key} path={route.path} element={<PublicPage />} />;
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
