import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import MatchingPage from '../pages/MatchingPage';
import ProfilePage from '../pages/ProfilePage';
import MessagesPage from '../pages/Messages';
import ProfileCreation from '../pages/ProfileCreation';

const Tab = createBottomTabNavigator();

function TabNav() {
    return (
        <Tab.Navigator initialRouteName='Matching'>
            <Tab.Screen name='Profile' component={ProfilePage} options={{ headerShown: false}} />
            <Tab.Screen name='Matching' component={MatchingPage} options={{ headerShown: false}} />
            <Tab.Screen name='Messages' component={MessagesPage} options={{ headerShown: false}} />
            <Tab.Screen name='Create' component={ProfileCreation} options={{headerShown: false}} />
        </Tab.Navigator>
    )
}

export default TabNav;