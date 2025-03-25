import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// screens
import MatchingPage from '../pages/MatchingPage';
import ProfilePage from '../pages/ProfilePage';
import ChatStack from '../pages/ChatStack';

const Tab = createBottomTabNavigator();

function TabNav() {
    return (
        <Tab.Navigator initialRouteName='Matching'  screenOptions={{ headerShown: false, tabBarStyle: { height: 90, paddingBottom: 10 } }}>
            <Tab.Screen name='Profile' component={ProfilePage}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (<MaterialCommunityIcons name='account' size={focused ? 40 : 32} color={focused ? '#9E122C' : '#CE8895'} />)
                }}
            />

            <Tab.Screen name='Matching' component={MatchingPage}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (<MaterialCommunityIcons name='book' size={focused ? 40 : 32} color={focused ? '#9E122C' : '#CE8895'} />)
                }}
            />

            <Tab.Screen name='ChatStack' component={ChatStack}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (<MaterialCommunityIcons name='chat' size={focused ? 40 : 32} color={focused ? '#9E122C' : '#CE8895'} />)
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNav;