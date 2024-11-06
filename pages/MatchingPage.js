import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable } from 'react-native';
import MultiSelectComponent from '../components/MultiSelect';
import CardFlip from '../components/FlipCard';

function MatchingPage() {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <SafeAreaView style={styles.fullScreen}>
            <View style={styles.multiselect}>
                <MultiSelectComponent />
            </View>
            <View style={styles.card}>
                <CardFlip/>
            </View>

            <View style={styles.bottomButtons}>
                <Pressable
                    style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : 'white' }, styles.button ]}>
                    {({ pressed }) => (
                        <Text style={[{ color: pressed ? 'white' : 'black' }, styles.buttonText]}>
                            Match
                        </Text>
                    )}
                </Pressable>

                <Pressable
                    style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : 'white' }, styles.button ]}>
                    {({ pressed }) => (
                        <Text style={[{ color: pressed ? 'white' : 'black' }, styles.buttonText]}>
                            Pass
                        </Text>
                    )}
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default MatchingPage;

const styles = StyleSheet.create({
    fullScreen: {
        alignItems: 'center', justifyContent: 'top',
        height: '100%'
    },
    multiselect: {
        width: '90%',
        alignItems: 'center', justifyContent: 'left',
        marginBottom: 20,
        flexDirection: 'row'
    },
    icon: {

    },
    card: {
        width: '90%', height: '70%',
        flex: 1,
    },
    bottomButtons: {
        width: '90%',
        flexDirection: 'row', justifyContent: 'space-between',
    },
    button: {
        width: '45%',
        borderColor: 'black', borderWidth: '1px', borderRadius: '10px',
        marginTop: 20, marginBottom: 10, padding: 10,
        alignContent: 'center', justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
    }
})