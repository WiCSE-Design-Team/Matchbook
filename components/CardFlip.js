import React, { useState } from "react";
import { View, Image, Text } from 'react-native';
import FlipCard from 'react-native-flip-card';

import { cardFlip } from '../styling'

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
            <View style={cardFlip.front}>
                

                <View style={cardFlip.cardText}>
                    <Text style={cardFlip.name}>
                        Name
                    </Text>

                    <Text style={cardFlip.bio}>
                        Bio
                    </Text>
                </View>
                <View style={cardFlip.cardTags}>
                    <View style={cardFlip.tag}>
                        <Text> course name </Text>
                    </View>
                    <View style={cardFlip.tag}>
                        <Text> course name </Text>
                    </View>
                </View>
            </View>
            {/* Back Side */}
            <View style={cardFlip.back}>
                <View style={cardFlip.cardText}>
                    <Text style={cardFlip.name}>
                        Name
                    </Text>
                </View>

                <View style={cardFlip.moreInfo}>
                    <Text> more profile info </Text>
                </View>

                <View style={cardFlip.cardTags}>
                    <View style={cardFlip.tag}>
                        <Text> course name </Text>
                    </View>
                    <View style={cardFlip.tag}>
                        <Text> course name </Text>
                    </View>
                </View>
            </View>
        </FlipCard>
    );
};

export default CardFlip;