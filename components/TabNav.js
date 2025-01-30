import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import MatchingPage from '../pages/MatchingPage';
import ProfilePage from '../pages/ProfilePage';
import ChatPage from '../pages/ChatPage';
import ProfileCreationPage from '../pages/ProfileCreationPage';

const Tab = createBottomTabNavigator();

function TabNav() {
    return (
        <Tab.Navigator initialRouteName='Matching'>
            <Tab.Screen name='Profile' component={ProfilePage} options={{ headerShown: false}} />
            <Tab.Screen name='Matching' component={MatchingPage} options={{ headerShown: false}} />
            <Tab.Screen name='Messages' component={ChatPage} options={{ headerShown: false}} />
            <Tab.Screen name='Create' component={ProfileCreationPage} options={{headerShown: false}} />
        </Tab.Navigator>
    )
}

export default TabNav;