import React from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import DocumentScreen from './Document';

const VerificationScreen = () => {
    return (
        <View style={{flex: 1}}>
            <ProgressSteps>
                <ProgressStep label="First Step">
                    <View style={{ alignItems: 'center' }}>
                        <DocumentScreen/>
                    </View>
                </ProgressStep>
                <ProgressStep label="Second Step">
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 2!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep label="Third Step">
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 3!</Text>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>
    )
};

export default VerificationScreen;