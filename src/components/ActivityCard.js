import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import tailwind from 'tailwind-react-native-classnames';
// import { globalStyles } from '../../styles/global';

export default function ActivityCard(title, source){
    return(
        <View style={tailwind`m-4`}>
            <View style={tailwind`flex border-gray-100 border-2 p-4 rounded-xl drop-shadow-2xl`}>
                <View style={tailwind`items-start`}>
                    <View style={tailwind`flex-row `}>
                        <Image style={tailwind` rounded-20 w-16 h-16`} source ={require('../../assets/user.png')}/> 
                        <View style={tailwind`flex-col m-4`}>
                            <Text style={tailwind`font-bold text-base`}>Rosalinda Bulat-Ag</Text>
                            <Text>Empress, Panacan</Text>
                        </View>
                        <View style={tailwind` items-end`}>
                            <View style={tailwind`flex-row items-end`}>
                                <View style={tailwind`bg-primary rounded-full p-2`}>
                                    <Ionicons name="md-call-outline" size={12} color="white" />
                                </View>
                                <View style={tailwind`bg-primary rounded-full mx-2 p-2`}>
                                    <Feather  name="mail" size={12} color="white" />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={tailwind`items-start`}>
                    <View style={tailwind`flex-row text-left`}>
                        <AntDesign name="clockcircleo" size={16} color="gray" />
                        <Text style={tailwind`mx-2`}>Today, 27 January 8:00 AM  </Text>
                    </View>
                    <View style={tailwind`flex-row`}>
                        <View style={tailwind`items-start flex-row`}>
                            <SimpleLineIcons name="wrench" size={16} color="gray" />
                            <Text style={tailwind`mx-2`}>Oil Change</Text>
                        </View>
                        <View style={tailwind`w-8/12 items-end`}><Text style={tailwind`font-bold`}>J.O. 111-2224</Text></View>
                    </View>
                    <View style={tailwind`flex-row`}>
                        <FontAwesome name="sticky-note-o" size={16} color="gray" />
                        <Text style={tailwind`mx-2`}>Please call me when you arrived</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
