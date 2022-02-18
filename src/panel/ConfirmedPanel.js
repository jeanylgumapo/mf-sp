import React from 'react';
import {Text, View} from 'react-native';
import NotificationCard from '../components/NotificationCard';
import tailwind from 'tailwind-react-native-classnames';
const ConfirmedPanel = () => {
    return (
        <View>
            <Text style={tailwind`text-2xl font-bold text-primary-color`}>Confirmed Bookings</Text>
            <View style={tailwind`p-4`}>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
            </View>
        </View>
    )
};

export default ConfirmedPanel;