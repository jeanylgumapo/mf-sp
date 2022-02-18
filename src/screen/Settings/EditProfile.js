import React from 'react';
import {Text, View, Image} from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import { Input, Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';



const EditProfileScreen = () => {
    return (
        <View style={tailwind`h-full bg-white flex`}>
            <View>
                <View style={tailwind`items-center bg-white py-8`}>
                    <Image style={tailwind`rounded-20 w-20 h-20 `} source ={require('../../../assets/user.png')}/> 
                </View>
                <View style={tailwind`mx-4`}>
                    <Input
                        placeholder='Fulname'
                        errorStyle={{ color: 'red' }}
                        errorMessage='ENTER A VALID ERROR HERE'
                    />   
                    <Text>Birthdate:</Text> 
                    <View style={tailwind`flex-row`}>
                        <View style={tailwind`w-3/4`}>
                            <Input
                                placeholder='Email'
                                errorStyle={{ color: 'red' }}
                                errorMessage='ENTER A VALID ERROR HERE'
                                
                            />  
                            
                        </View>
                        <View style={tailwind`w-1/4 flex-row items-center`}>
                            <FontAwesome name="check-circle-o" size={24} color="green" />
                            <FontAwesome name="close" size={24} color="red" />
                        </View>
                    </View>
                    
                    {/* <Fontisto name="close" size={24} color="red" /> */}
                    <View style={tailwind`flex-row`}>
                        <View style={tailwind`w-3/4`}>
                            <Input
                                placeholder='Mobile'
                                errorStyle={{ color: 'red' }}
                                errorMessage='ENTER A VALID ERROR HERE'
                                
                            />  
                            
                        </View>
                        <View style={tailwind`w-1/4 flex-row items-center`}>
                            <FontAwesome name="check-circle-o" size={24} color="green" />
                            <FontAwesome name="close" size={24} color="red" />
                        </View>
                    </View> 
                    <Input
                        placeholder='Address'
                        errorStyle={{ color: 'red' }}
                        errorMessage='ENTER A VALID ERROR HERE'
                    /> 
                    <Text>Password</Text> 
                    <Button title="Save"/>
                </View>
            </View>
        </View>
    )
};

export default EditProfileScreen;