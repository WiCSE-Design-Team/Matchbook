import React from "react";
import { View, Image, Text } from 'react-native';
import FlipCard from 'react-native-flip-card';

import { cardFlip } from '../styling'
import { FontAwesome6 } from "@expo/vector-icons";

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
                
                <View style={cardFlip.image}>
                    
                </View>

                <View style={cardFlip.profile}>
                    <View style={cardFlip.intro}>
                        <Text style={cardFlip.name}>
                            Name,
                        </Text>
                        <Text style={cardFlip.age}>
                            Age
                        </Text>
                        <Text style={cardFlip.pronouns}>
                            pronouns
                        </Text>
                    </View>

                    <View style={cardFlip.university}>
                        <FontAwesome6 name="graduation-cap" size={20} color="#FBCB77" />
                        <Text style={cardFlip.universityText}>
                            University of Florida
                        </Text>
                    </View>
                    

                    <Text style={cardFlip.bio}>
                        Introduction or little bio!
                    </Text>

                    <View style={cardFlip.tags}>
                        <View style={cardFlip.tag}>
                            <Text style={cardFlip.tagText}> course name </Text>
                        </View>
                        <View style={cardFlip.tag}>
                            <Text style={cardFlip.tagText}> course name </Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Back Side */}
            <View style={cardFlip.back}>
                <View style={cardFlip.profile}>
                    <View style={cardFlip.intro}>
                        <Text style={cardFlip.name}>
                            Name,
                        </Text>
                        <Text style={cardFlip.age}>
                            Age
                        </Text>
                        <Text style={cardFlip.pronouns}>
                            pronouns
                        </Text>
                    </View>

                    <View style={cardFlip.about}>
                        <View style={cardFlip.aboutRow}>
                            <Text style={cardFlip.rowL}>
                                University
                            </Text>
                            <Text style={cardFlip.rowR}>
                                University of Florida
                            </Text>
                        </View>
                        <View style={cardFlip.aboutRow}>
                            <Text style={cardFlip.rowL}>
                                Academic Year
                            </Text>
                            <Text style={cardFlip.rowR}>
                                Senior
                            </Text>
                        </View>
                        <View style={cardFlip.aboutRow}>
                            <Text style={cardFlip.rowL}>
                                Major
                            </Text>
                            <Text style={cardFlip.rowR}>
                                Computer Science
                            </Text>
                        </View>
                    </View>

                    <View style={cardFlip.prompts}>
                        <Text style={cardFlip.prompt}>
                            Prompt
                        </Text>
                        <Text style={cardFlip.response}>
                            Response
                        </Text>                         
                    </View>
                </View>
            </View>
        </FlipCard>
    );
};

export default CardFlip;