import * as React from "react";
import DashboardScreen from "../screen/Dashboard/Index";
import AboutScreen from '../screen/Settings/AboutScreen';
import PolicyScreen from '../screen/Settings/PolicyScreen';
import ServicesScreen from '../screen/Settings/ServicesScreen';
import AvailabilityScreen from '../screen/Settings/AvailabilityScreen';
import EditProfileScreen from '../screen/Settings/EditProfile';

import { AntDesign } from '@expo/vector-icons';

import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerComponent from '../components/Drawer'



function DrawerRoutes(){
    const Drawer =createDrawerNavigator();
    return(
          <Drawer.Navigator  drawerContent={props => <DrawerComponent {...props}/>} >
              <Drawer.Screen name="MyDashboard" 
              component={DashboardScreen}
              options={
                  {headerShown:true, 
                      headerStyle: 
                      {backgroundColor: '#0078B7',},
                     drawerIcon: ({focused, size}) => (
                      <AntDesign name="close" 
                      size={size} 
                      color="black"
                      color={focused ? '#7cc' : '#ccc'}
                       />
                   ),
                  }}
              />
              <Drawer.Screen name="Profile" component={EditProfileScreen}/>
              <Drawer.Screen name="Availability" component={AvailabilityScreen}/>
              <Drawer.Screen name="Services" component={ServicesScreen}/>
              <Drawer.Screen name="About" component={AboutScreen}/>
              <Drawer.Screen name="Policy" component={PolicyScreen}/>
          </Drawer.Navigator>
    );
}

export default DrawerRoutes;