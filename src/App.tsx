import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import { AuthProvider } from './context/AuthContext';
// import SignUp from './pages/SignUp';

const App: React.FC = () => (
    <>
        <GlobalStyle />
        <AuthProvider>
            <SignIn />
        </AuthProvider>
    </>
);

export default App;
