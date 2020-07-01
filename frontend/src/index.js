import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import store from './TodoApp/store';
import TodoBody from './TodoApp/containers/todoBody';


render((
    <Provider store={store}>
      <TodoBody />
    </Provider>
), document.getElementById('root'));
serviceWorker.register();
