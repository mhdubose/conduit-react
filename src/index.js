import App from './components/App';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import {createStore} from 'redux';

const defaultState = {
    appName: 'conduit',
    articles: null
};
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return {...state, checked: !state.checked};
        default:
            return state;
    }
};
const store = createStore(reducer);

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('root'));
