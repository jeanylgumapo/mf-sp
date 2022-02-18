import React, { useContext } from 'react';
import {Text, View,ScrollView, Image, Button} from 'react-native';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import tailwind from 'tailwind-react-native-classnames';
import { globalStyles } from '../../styles/global';
import { Input, Icon } from 'react-native-elements';
import { MaterialCommunityIcons, AntDesign  } from '@expo/vector-icons'; 
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { AuthContext } from '../../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons'; 
import Header from '../../components/Header';
import ActivityCard from '../../components/ActivityCard';
import Navigation from '../../routes/Navigation';

const Dashboard = ({navigation}) => {
    // const {userInfo, isLoading, logout}= useContext(AuthContext);
    return (
        <View style={tailwind`bg-white h-full`}> 
            {/* <Header/> */}
            {/* <Spinner visible={isLoading} /> */}
            <View style={tailwind`m-4`}>
            <Text style={tailwind`text-lg font-bold`}>Dashboard</Text> 
            <View style={tailwind`flex items-center`}>
                <View style={tailwind`flex-row `}>
                    <View style={tailwind`bg-white m-2 p-4 rounded-xl items-center drop-shadow-2xl border-2 border-gray-100`}>
                        <Text  style={tailwind`text-xs text-primary-color py-2 `}> 
                            Total Earnings
                        </Text>
                        <Text  style={tailwind`text-primary-color text-lg font-bold`}>
                            Php 24,688.00
                        </Text>
                    </View>
                    
                    <View style={tailwind`bg-white m-2 p-4 rounded-xl items-center drop-shadow-2xl border-2 border-gray-100`}>
                        <Text  style={tailwind`text-xs text-primary-color py-2 `}>
                            Jobs Completed
                        </Text>
                        <Text  style={tailwind`text-primary-color text-lg font-bold`}>
                            33
                        </Text>
                    </View>
                </View>
            </View>
        <Text style={tailwind`text-lg font-bold`}>
            Recent Activity
        </Text>
        <View>
            <ActivityCard/>
            <ActivityCard/>
        </View>
            <Button title="Notification" onPress={() => navigation.navigate('Notification')}/>
        </View>
        {/* <Text> Welcome {userInfo.user.name}</Text> */}
        
        {/* <Image style={{ width: 40, height: 40 }} source ={require('../../../assets/maintenance.png')}/> */}
        
        {/* <Text> Welcome {userInfo.user.name}</Text>
            <Button title='Logout' onPress={logout}/> */}
        </View>
    )
};

export default Dashboard;