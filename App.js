import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {LogContextProvider} from './contexts/LogContext';
import {SearchContextPRovider} from './contexts/SearchContext';

function App() {
  return (
    <NavigationContainer>
      <SearchContextPRovider>
        <LogContextProvider>
          <RootStack />
        </LogContextProvider>
      </SearchContextPRovider>
    </NavigationContainer>
  );
}

export default App;
