import React from 'react';
import { LogBox } from 'react-native';
// import {Text, View} from 'react-native';
import {StatusBar, Text, View} from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import Navigation from './src/routes/Navigation';
import Header from './src/components/Header';
import Dashboard from './src/screen/Dashboard/Index';

// import EditProfileScreen from './src/screen/Dashboard/EditProfile';
LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
const App = () => {
    return (
        <AuthProvider>
            <StatusBar backgroundColor="#0078B7" />
            <Navigation/>
       </AuthProvider>
    // <Dashboard/>
    )
};

export default App;