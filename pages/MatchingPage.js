import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable } from 'react-native';
import MultiSelectComponent from '../components/MultiSelect';
import CardFlip from '../components/CardFlip';

import { matchingPage } from '../styling';

function MatchingPage() {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <SafeAreaView style={matchingPage.fullScreen}>
            <View style={matchingPage.multiselect}>
                <MultiSelectComponent />
            </View>
            <View style={matchingPage.card}>
                <CardFlip/>
            </View>

            <View style={matchingPage.bottomButtons}>
                <Pressable
                    style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : 'white' }, matchingPage.button ]}>
                    {({ pressed }) => (
                        <Text style={[{ color: pressed ? 'white' : 'black' }, matchingPage.buttonText]}>
                            Match
                        </Text>
                    )}
                </Pressable>

                <Pressable
                    style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : 'white' }, matchingPage.button ]}>
                    {({ pressed }) => (
                        <Text style={[{ color: pressed ? 'white' : 'black' }, matchingPage.buttonText]}>
                            Pass
                        </Text>
                    )}
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default MatchingPage;