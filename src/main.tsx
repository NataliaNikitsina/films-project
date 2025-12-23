import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router";
import {Provider} from "react-redux";
import {store} from "@/app/store.ts";
import './styles/fonts.css'
import './styles/variables.css'
import './styles/reset.css'
import './styles/global.css'
import {App} from "@/app";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
)
