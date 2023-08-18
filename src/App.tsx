import React, {Suspense} from 'react';
import AppRouter from "./App/AppRouter";
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter} from "react-router-dom";
const App = () => {
    return (
        <React.Fragment>
            <NavBar/>
            <AppRouter/>
        </React.Fragment>
    );
};

export default App;