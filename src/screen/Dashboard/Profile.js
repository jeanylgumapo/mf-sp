import React from 'react';
import 'react-native-gesture-handler';
import {Text, View,ScrollView, Image, Button, TouchableOpacity} from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import { FontAwesome } from '@expo/vector-icons'; 
const ProfileScreen = ({navigation}) => {
    return (
        <View>
            <View style={tailwind`items-center`}>
                <Image style={{ width: 64, height: 64 }} source ={require('../../../assets/user.png')}/> 
                <Text> Kevin Johnson</Text>
                <Text> kevinjohnson@gmail.com</Text>
                <Text  style={tailwind`font-bold text-xs text-gray-400`}> 4.4 
                            <FontAwesome name="star" color="yellow" /> +30 clients</Text>
                <TouchableOpacity 
                    onPress={() => 
                        navigation.navigate('AccountVerification')
                    }
                ><Text style={tailwind`text-xs text-red-400`}> Verify Account</Text></TouchableOpacity>
            </View>
            
            
            
            <Text> Balance</Text>
            <Text> 240$</Text>
            <Text> Points</Text>
            <Text> 1850</Text>
            
                <TouchableOpacity 
                    onPress={() => 
                        navigation.navigate('EditProfile')
                    }
                >
                    <Text>Edit Profile</Text>
                </TouchableOpacity>
            <Text> My Garage</Text>
            <Text> Favorite Provider</Text>
            <Text> Payments</Text>

        </View>
    )
};

export default ProfileScreen;