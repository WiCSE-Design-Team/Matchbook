import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button } from 'react-native';

// this is also the login page
function LandingPage() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Landing Page</Text>
            <Button title='Login'
                onPress={() => navigation.navigate('TabNav')}
            />
        </View>
    );
}

export default LandingPage;