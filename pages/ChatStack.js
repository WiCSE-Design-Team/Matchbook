import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import ChatPage from './ChatPage';
import Chat from './Chat';

const Stack = createNativeStackNavigator();

function ChatStack() {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='ChatList'>
        <Stack.Screen name="ChatPage" component={ChatPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ChatStack;hat