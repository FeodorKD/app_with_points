import {createRoot} from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import './index.css'
import {Provider} from "react-redux";
import {pointStore} from "./store";

const container  =  document.getElementById('root')
const root = createRoot(container!)
root.render(
    <Provider store={pointStore}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)