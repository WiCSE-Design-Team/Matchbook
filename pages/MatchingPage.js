import React, { useState } from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import MultiSelectComponent from '../components/MultiSelect';
import CardFlip from '../components/CardFlip';

import { matchingPage } from '../styling';

function MatchingPage() {
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
                    style={({ pressed }) => [{ backgroundColor: pressed ? '#9E122C' : 'none' }, matchingPage.passButton ]}>
                    {({ pressed }) => (
                        <Text style={[{ color: pressed ? 'white' : '#9E122C' }, matchingPage.buttonText]}>
                            Pass
                        </Text>
                    )}
                </Pressable>

                <Pressable
                    style={({ pressed }) => [{ backgroundColor: pressed ? 'none' : '#9E122C' }, matchingPage.matchButton ]}>
                    {({ pressed }) => (
                        <Text style={[{ color: pressed ? '#9E122C' : 'white' }, matchingPage.buttonText]}>
                            Match
                        </Text>
                    )}
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default MatchingPage;