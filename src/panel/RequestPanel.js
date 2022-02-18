import React from 'react';
import {Text, View} from 'react-native';
import NotificationCard from '../components/NotificationCard';
import tailwind from 'tailwind-react-native-classnames';
const RequestPanel = () => {
    return (
        <View>
            <Text style={tailwind`text-2xl font-bold text-primary-color`}>Request Bookings</Text>
            <View style={tailwind`p-4`}>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
            </View>
        </View>
    )
};

export default RequestPanel;