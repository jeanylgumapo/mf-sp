import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import ConfirmedPanel from '../../panel/ConfirmedPanel';
import RequestPanel from '../../panel/RequestPanel';

const NotificationScreen = () => {
    const [isActivity, setisActivity]=useState(true);
    const [isUpdate, setisUpdate]=useState(false);
    return (
        <View style={tailwind`h-full bg-white`}>
            {/* Header */}
            <View style={tailwind`flex`}>
                <View style={tailwind` w-full bg-white items-center rounded-b-2xl`}>
                    <View style={tailwind`flex-row `}>
                        <View style={tailwind`w-2/4 items-center p-4  border-b-2 border-b-primary rounded-l-2xl`}>
                            <TouchableOpacity onPress={()=> setisActivity(!isActivity)}><Text style={tailwind`font-bold text-primary-color text-lg`}>Confirmed</Text></TouchableOpacity>
                        </View>
                        <View style={tailwind`w-2/4 items-center p-4  rounded-r-2xl`}>
                            <TouchableOpacity onPress={()=> setisUpdate(!isUpdate)}><Text  style={tailwind`font-bold text-gray-300 text-lg`}>Requests</Text></TouchableOpacity>
                        </View>
                    </View>                    
                </View>                
            </View>
        {/* Body */}
            <View style={tailwind`p-4`}>
                {/* Acitivity */}
                {
                    isActivity?(
                        <ConfirmedPanel/>
                    ):isUpdate?(
                        <RequestPanel/>
                    ):null
                }
            </View>
        </View>
    )
};

export default NotificationScreen;