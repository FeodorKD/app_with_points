import React, {Suspense} from 'react';
import {Routes} from "react-router";
import {routeConfig} from "./routes/routeConfig";
import {Route} from "react-router-dom";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading../</div>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>

    );
};

export default AppRouter;