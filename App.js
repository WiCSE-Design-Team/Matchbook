import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import LandingPage from './pages/LandingPage'; // no bottom tab nav
import TabNav from './components/TabNav'; // page for tab nav

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }}/>
        <Stack.Screen name="TabNav" component={TabNav} options={{ headerShown: false, /*gestureEnabled: false*/ }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;