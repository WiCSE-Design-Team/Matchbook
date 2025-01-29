import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

// screens
import LoginPage from './pages/LoginPage'; // no bottom tab nav
import TabNav from './components/TabNav'; // page for tab nav

const fonts = {
  'BaksoSapi' : require('./assets/fonts/BaksoSapi.otf'),
  'Karla' : require('./assets/fonts/Karla-Regular.ttf'),
  'Karla-Bold' : require('./assets/fonts/Karla-Bold.ttf'),
}

const Stack = createNativeStackNavigator();

function App() {
    const [fontsLoaded] = useFonts(fonts);
  
    if (!fontsLoaded) {
      return <AppLoading />;
    }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LoginPage} options={{ headerShown: false }}/>
        <Stack.Screen name="TabNav" component={TabNav} options={{ headerShown: false, /*gestureEnabled: false*/ }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;