import React, { useState } from 'react';
import {Text, TouchableOpacity, View, Modal, TextInput, Button} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import { MaterialCommunityIcons, AntDesign  } from '@expo/vector-icons'; 


const AvailabilityScreen = () => {
    const [modalOpen, setModalOpen]=useState(false);
    const data = [
        {label: '12:00 AM', value: '1'},
        {label: '1:00 AM', value: '2'},
        {label: 'Item 3', value: '3'},
        {label: 'Item 4', value: '4'},
        {label: 'Item 5', value: '5'},
        {label: 'Item 6', value: '6'},
        {label: 'Item 7', value: '7'},
        {label: 'Item 8', value: '8'},
    ];

  
        const [dropdown, setDropdown] = useState(null);
        const [selected, setSelected] = useState([]);

        const _renderItem = item => {
            return (
            <View 
            // style={styles.item}
            >
                <Text >{item.label}</Text>
                    {/* <AntDesign name="pluscircleo" size={24} color="black" /> */}
                {/* <Ionicons name="remove-circle-outline" size={24} color="black" /> */}
                {/* <Image style={styles.icon} source={require('./assets/tick.png')} /> */}
            </View>
            );
        };
  
    return (
        <View style={tailwind`flex h-full bg-white`}>
            <Modal visible={modalOpen}>
            <View style={tailwind`bg-primary p-4 flex-row`}>
                        <TouchableOpacity onPress={() => setModalOpen(false) } >
                            <EvilIcons name="close" size={24} color="white" />
                        </TouchableOpacity>
                        <Text style={tailwind`text-white font-bold text-base mx-2`}> Add New Services</Text>
                        
                       
                    </View>
                <View style={tailwind`m-4`}>  
                    <Text style={tailwind`font-bold text-base mt-4`}>Days</Text>    
                    <View style={tailwind`flex-row`}>
                        <TouchableOpacity style={tailwind`bg-primary p-4  rounded-xl m-1`}><Text style={tailwind`text-white`}>Mon</Text></TouchableOpacity>
                        <TouchableOpacity style={tailwind`bg-primary p-4  rounded-xl m-1`}><Text style={tailwind`text-white`}>Mon</Text></TouchableOpacity>
                        <TouchableOpacity style={tailwind`bg-primary p-4  rounded-xl m-1`}><Text style={tailwind`text-white`}>Mon</Text></TouchableOpacity>
                        <TouchableOpacity style={tailwind`bg-primary p-4  rounded-xl m-1`}><Text style={tailwind`text-white`}>Mon</Text></TouchableOpacity>
                        <TouchableOpacity style={tailwind`bg-primary p-4  rounded-xl m-1`}><Text style={tailwind`text-white`}>Mon</Text></TouchableOpacity>
                        <TouchableOpacity style={tailwind`bg-primary p-4  rounded-xl m-1`}><Text style={tailwind`text-white`}>Mon</Text></TouchableOpacity>
                        <TouchableOpacity style={tailwind`bg-primary p-4  rounded-xl m-1`}><Text style={tailwind`text-white`}>Mon</Text></TouchableOpacity>
                        
                    </View>                          
                      <View style={tailwind`pb-8`}>    
                        <Text style={tailwind`font-bold text-base mt-4`}>Time</Text>
                        <View style={tailwind`flex-row`}>
                            <TouchableOpacity style={tailwind`bg-primary border-2 border-primary-color p-2 rounded-xl m-1`}><Text style={tailwind`text-white`}>AM</Text></TouchableOpacity>
                            <TouchableOpacity style={tailwind`bg-white border-2 border-primary-color p-2 rounded-xl m-1`}><Text style={tailwind`text-primary-color`}>PM</Text></TouchableOpacity>
                            {/* <TouchableOpacity style={tailwind`bg-white border-2 border-primary-color p-2 rounded-xl m-1`}><Text style={tailwind`text-primary-color`}>Evening</Text></TouchableOpacity> */}
                        </View>
                        <MultiSelect
                            style={tailwind`border-2 border-gray-100`}
                            containerStyle={tailwind`bg-white`}
                            selectedStyle={tailwind`bg-primary rounded-2xl`}
                            selectedTextStyle={tailwind`text-white`}
                            labelStyle={tailwind`border-2 border-gray-400`}
                            data={data}
                            labelField="label"
                            valueField="value"
                            label="Multi Select"
                            placeholder="Select Time"
                            search
                            searchPlaceholder="Search"
                            value={selected}
                            onChange={item => {
                            setSelected(item);
                                console.log('selected', item);
                            }}
                            renderItem={item => _renderItem(item)}
                        />
                        
                      </View>
                        <Button title="Add to My Availability" onPress={() => setModalOpen(false) }/>
                </View>
            </Modal>

            <View style={tailwind`m-2`}>
                <Text style={tailwind`font-bold text-2xl`}> My Services</Text>   
                <View style={tailwind`bottom-0  right-0`}> 
                    <TouchableOpacity onPress={() => setModalOpen(true) } style={tailwind`bg-primary rounded-full items-center w-14 py-4 px-2`}>
                        <Entypo  name="plus" size={24} color="white" />
                    </TouchableOpacity>
                </View>              
            </View>
        <View style={tailwind`border-b-2 border-gray-50 m-4 p-2 flex-row items-center`}>
            {/* <TouchableOpacity style={tailwind`bg-primary py-8 px-2 rounded-xl m-1 h-20`}><Text style={tailwind`text-white`}>Mon</Text></TouchableOpacity> */}             
                <View style={tailwind`flex items-center`}>
                    {/* <FontAwesome5 style={tailwind`mx-2`} name="car-side" size={32} color="gray" /> */}
                    <View style={tailwind`flex-col`}>
                        <View style={tailwind`flex-row items-center`}>
                            <View  style={tailwind`w-3/4 items-start`}>
                                <Text style={tailwind`font-bold text-lg`}>Monday</Text></View>
                            <View 
                            style={tailwind`w-1/4 items-end`}
                            >
                                <TouchableOpacity><Text>edit</Text></TouchableOpacity></View>
                        </View>  
                        {/* <Text style={tailwind`text-sm italic text-gray-400`}>2020</Text>               */}
                        <View style={tailwind`flex-row flex-wrap`}>
                            <Text style={tailwind`text-xs m-1 italic  border-2 border-primary-color bg-white text-primary-color p-2 rounded-full`}>08:00 AM</Text>
                            <Text style={tailwind`text-xs m-1 italic  border-2 border-primary-color bg-white text-primary-color p-2 rounded-full`}>08:00 AM</Text>
                            <Text style={tailwind`text-xs m-1 italic  border-2 border-primary-color bg-white text-primary-color p-2 rounded-full`}>08:00 AM</Text>
                            <Text style={tailwind`text-xs m-1 italic text-white border-2 border-primary-color bg-primary p-2 rounded-full`}>08:00 PM</Text>
                            <Text style={tailwind`text-xs m-1 italic  border-2 border-primary-color bg-white text-primary-color p-2 rounded-full`}>08:00 AM</Text>
                            <Text style={tailwind`text-xs m-1 italic text-white border-2 border-primary-color bg-primary p-2 rounded-full`}>08:00 PM</Text>
                        </View>
                    </View>


                </View>
            </View>
            <View style={tailwind`border-b-2 border-gray-50 m-4 p-2 flex-row items-center`}>
                {/* <TouchableOpacity style={tailwind`bg-primary py-8 px-2 rounded-xl m-1 h-20`}><Text style={tailwind`text-white`}>Mon</Text></TouchableOpacity> */}
                
                    <View style={tailwind`flex items-center`}>
                        {/* <FontAwesome5 style={tailwind`mx-2`} name="car-side" size={32} color="gray" /> */}
                        <View style={tailwind`flex-col`}>
                            <View style={tailwind`flex-row items-center`}>
                                <View  style={tailwind`w-3/4 items-start`}>
                                    <Text style={tailwind`font-bold text-lg`}>Tuesday</Text></View>
                                <View 
                                style={tailwind`w-1/4 items-end`}
                                >
                                    <TouchableOpacity><Text>edit</Text></TouchableOpacity></View>
                            </View>  
                            {/* <Text style={tailwind`text-sm italic text-gray-400`}>2020</Text>               */}
                            <View style={tailwind`flex-row flex-wrap`}>
                                <Text style={tailwind`text-xs m-1 italic  border-2 border-primary-color bg-white text-primary-color p-2 rounded-full`}>08:00 AM</Text>
                                <Text style={tailwind`text-xs m-1 italic  border-2 border-primary-color bg-white text-primary-color p-2 rounded-full`}>08:00 AM</Text>
                                <Text style={tailwind`text-xs m-1 italic  border-2 border-primary-color bg-white text-primary-color p-2 rounded-full`}>08:00 AM</Text>
                                <Text style={tailwind`text-xs m-1 italic text-white border-2 border-primary-color bg-primary p-2 rounded-full`}>08:00 PM</Text>
                                <Text style={tailwind`text-xs m-1 italic  border-2 border-primary-color bg-white text-primary-color p-2 rounded-full`}>08:00 AM</Text>
                                <Text style={tailwind`text-xs m-1 italic text-white border-2 border-primary-color bg-primary p-2 rounded-full`}>08:00 PM</Text>
                            </View>
                        </View>


                    </View>
                </View>
        </View>
    )
};



export default AvailabilityScreen;