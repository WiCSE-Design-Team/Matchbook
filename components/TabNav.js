import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// screens
import MatchingPage from '../pages/MatchingPage';
import ProfilePage from '../pages/ProfilePage';
import ChatPage from '../pages/ChatPage';

const screens = [
    {route: 'Profile', label: 'Profile', component: ProfilePage, icon: 'account'},
    {route: 'Matching', label: 'Matching', component: MatchingPage, icon: 'book'},
    {route: 'Chat', label: 'Chat', component: ChatPage, icon: 'chat'}
];

const Tab = createBottomTabNavigator();

function TabNav() {
    return (
        <Tab.Navigator initialRouteName='Matching'  screenOptions={{ headerShown: false, tabBarStyle: { height: 90, paddingBottom: 10 } }}>
            {screens.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.route} component={item.component}
                        options={{
                            tabBarShowLabel: false,
                            tabBarIcon: ({ focused }) => (<MaterialCommunityIcons name={item.icon} size={focused ? 40 : 32} color={focused ? '#9E122C' : '#CE8895'} />)
                        }}
                    />
                )
            })}
        </Tab.Navigator>
    )
}

export default TabNav;