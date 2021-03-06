import React, {useContext, useState} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import { globalStyles } from '../../styles/global';
import { Input, Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AuthContext } from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { EvilIcons } from '@expo/vector-icons'; 

const EmailVerificationScreen = ({navigation}) => {

    return (
        <View style={tailwind`bg-primary flex`}>
            <View style={tailwind`h-full bg-white rounded-t-20`}>
                <View style={tailwind`m-8 text-left `}>
                    <Text style={tailwind`my-4 font-bold text-3xl text-primary-color`}>Email Veirification </Text>
                    <Text>Enter the email associated with your account
                        and we'll send an email with instructions to
                        reset your password
                    </Text>
                </View>
                <View style={tailwind`my-8 mx-4`}>                   
                    <Input
                            placeholder='Email Address'
                            errorStyle={{ color: 'red' }}
                            errorMessage='ENTER A VALID ERROR HERE'
                            // value={email}
                            // onChangeText={text=> setEmail(text)}
                        />
                        <EvilIcons name="pencil" size={24} color="black" />
                        <Button  
                            title='Submit' 
                            // onPress={() => 
                            //     {login(email, password)}
                            //     // navigation.navigate('Dashboard')
                            // }
                            titleStyle={{ fontWeight: '700' }}
                            buttonStyle={{
                            backgroundColor: '#0078B7',
                            borderColor: 'transparent',
                            borderWidth: 1,
                            borderRadius: 8,
                            margin:5,
                            }}
                            containerStyle={{
                            marginHorizontal: 50,
                            }}
                        />   
                </View>  
            </View>                     
        </View>
    )
};

export default EmailVerificationScreen;