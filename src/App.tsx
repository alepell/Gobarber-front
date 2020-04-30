import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import AuthContext from './context/AuthContext';
// import SignUp from './pages/SignUp';

const App: React.FC = () => (
    <>
        <GlobalStyle />
        <AuthContext.Provider value={{name: 'Alexandre'}}>
            <SignIn />
        </AuthContext.Provider>
    </>
);

export default App;
