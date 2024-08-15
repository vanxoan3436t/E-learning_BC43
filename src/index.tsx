import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import './assets/scss/style.scss'
import { Provider } from 'react-redux';
import { store } from './Redux/configStote';
import App from './App';
// import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
// import theme from './theme';

export const history: any = createBrowserHistory();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store} >
        <HistoryRouter history={history}>
            {/* <CssVarsProvider theme={theme}> */}
                <App />
            {/* </CssVarsProvider> */}
        </HistoryRouter>
    </Provider>
);