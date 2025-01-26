import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from 'react-native';
import Icon from "../assets/icon.png";
import FlipCard from 'react-native-flip-card';

function CardFlip() {
    return (
        <FlipCard 
            friction={100}
            flipHorizontal={true}
            flipVertical={false}
            flip={false}
            clickable={true}
            onFlipEnd={() => {}}
        >
            {/* Front Side */}
            <View style={styles.front}>
                <Image source={Icon} style={styles.cardImage}/>

                <View style={styles.cardText}>
                    <Text style={styles.name}>
                        Name
                    </Text>

                    <Text style={styles.bio}>
                        Bio
                    </Text>
                </View>
                <View style={styles.cardTags}>
                    <View style={styles.tag}>
                        <Text> course name </Text>
                    </View>
                    <View style={styles.tag}>
                        <Text> course name </Text>
                    </View>
                </View>
            </View>
            {/* Back Side */}
            <View style={styles.back}>
                <View style={styles.cardText}>
                    <Text style={styles.name}>
                        Name
                    </Text>
                </View>

                <View style={styles.moreInfo}>
                    <Text> more profile info </Text>
                </View>

                <View style={styles.cardTags}>
                    <View style={styles.tag}>
                        <Text> course name </Text>
                    </View>
                    <View style={styles.tag}>
                        <Text> course name </Text>
                    </View>
                </View>
            </View>
        </FlipCard>
    );
};

export default CardFlip;

const styles = StyleSheet.create ({
    front: {
        height: '100%',
        borderColor: 'black', borderWidth: '1', borderRadius: '10',
        backgroundColor: 'white'
    },
    back: {
        height: '100%',
        borderColor: 'black', borderWidth: '1', borderRadius: '10',
        backgroundColor: 'white'
    },
    cardImage: { 
        width: '100%', height: '50%',
        borderTopLeftRadius: '10', borderTopRightRadius: '10'
    },
    cardText: { 
        width: '100%', height: '35%',
        padding: 20,
        alignContent: 'left'
    },
    name: { 
        fontSize: '24',
        fontWeight: 'bold',
        marginBottom: 5
    },
    bio: { 
        fontSize: '18'

    },
    moreInfo: {
        height: '50%',
        padding: 20,
        alignItems: 'center', justifyContent: 'left',
    },
    cardTags: {
        width: '100%', height: '15%',
        alignItems: 'center', justifyContent: 'left',
        marginBottom: 20, padding: 20,
        flexDirection: 'row', gap: 15
    },
    tag: {
        borderColor: 'black', borderWidth: '1',
        padding: 10,
        justifyContent: 'center', alignContent: 'center'
    },
})