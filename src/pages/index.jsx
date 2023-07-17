import { Routes, Route } from 'react-router-dom';

import Main from './Main';

export default function App() {
    return (
        <Routes>
            <Route index={true} path="/" element={<Main />} />
        </Routes>
    );
}