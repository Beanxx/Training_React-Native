import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AuthApp from './components/AuthApp';
import rootReducer from './slices';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <AuthApp />
    </Provider>
  );
}

export default App;
