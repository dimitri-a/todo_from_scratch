import {Provider} from 'react-redux';

if (module.hot) {
    module.hot.accept()
}

import ReactDOM from 'react-dom';
import React from 'react';
import './css/test.css';
import Cart from './components/cart';
import { createStore } from 'redux';
import Nothing from './components/nothing';

import reducer from './reducers/todos'


import InputTodoContainer from './components/containers/InputTodoContainer'
import ListTodosContainer from './components/containers/ListTodosContainer'

const store = createStore(reducer)

const App = () => (
    <Provider store={store}>
        <div>
            <InputTodoContainer></InputTodoContainer>
           <ListTodosContainer></ListTodosContainer>
        </div>
    </Provider>
);

ReactDOM.render(
    <App/>
    , document.getElementById('root'));
