import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import MatchingPage from '../pages/MatchingPage';
import ProfilePage from '../pages/ProfilePage';
import MessagesPage from '../pages/Messages';

const Tab = createBottomTabNavigator();

function TabNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Profile' component={ProfilePage} options={{ headerShown: false}} />
            <Tab.Screen name='Matching' component={MatchingPage} options={{ headerShown: false}} />
            <Tab.Screen name='Messages' component={MessagesPage} options={{ headerShown: false}} />
        </Tab.Navigator>
    )
}

export default TabNav;