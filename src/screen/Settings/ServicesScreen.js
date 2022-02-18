import React, { useState } from 'react';
import {Text, TouchableOpacity, View, Modal, TextInput, Button} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import { MaterialCommunityIcons, AntDesign  } from '@expo/vector-icons'; 


const ServicesScreen = () => {
    const [modalOpen, setModalOpen]=useState(false);
    const data = [
        {label: 'Item 1', value: '1'},
        {label: 'Item 2', value: '2'},
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
                    <AntDesign name="pluscircleo" size={24} color="black" />
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
                    <Text style={tailwind`font-bold text-base mt-4`}>Category</Text>                              
                      <View style={tailwind`py-8`}>
                      <Dropdown
                            style={tailwind`border-b-2 border-gray-100 py-2`}
                            data={data}
                            search
                            searchPlaceholder="Select Category"
                            labelField="label"
                            valueField="value"
                            label="Dropdown"
                            placeholder="Select Category"
                            value={dropdown}
                            onChange={item => {
                            setDropdown(item.value);
                                console.log('selected', item);
                            }}
                            // renderLeftIcon={() => (
                            //     <Image style={styles.icon} source={require('../../../assets/user.png')} />
                            // )}
                            renderItem={item => _renderItem(item)}
                            textError="Error"
                        />
                        <Text style={tailwind`font-bold text-base mt-4`}>SubCategory</Text>
                        <MultiSelect
                            data={data}
                            labelField="label"
                            valueField="value"
                            label="Multi Select"
                            placeholder="Select item"
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
                        <Button title="Add to My Services" onPress={() => setModalOpen(false) }/>
                </View>
            </Modal>

            <View style={tailwind`m-2`}>
                <Text style={tailwind`font-bold text-2xl`}> My Services</Text>   
                <View style={tailwind`absolute bottom-0 m-2 right-0`}> 
                    <TouchableOpacity onPress={() => setModalOpen(true) } style={tailwind`bg-primary rounded-full items-center w-14 py-4 px-2`}>
                        <Entypo  name="plus" size={24} color="white" />
                    </TouchableOpacity>
                </View>   
                    <TextInput
                        // style={styles.textInput}
                        placeholder="Search"
                        placeholderTextColor='black'
                        // onChangeText={onSearch}
                        style={tailwind`border-b-2 my-2 border-gray-100 mx-2`}

                    />
         
         
            </View>

            <View style={tailwind`border-b-2 border-gray-50 m-4 p-2 flex-row items-center`}>

                    <MaterialCommunityIcons name="engine-outline" size={72} color="#333" />
               
                <View style={tailwind`flex-row items-center`}>
                    {/* <FontAwesome5 style={tailwind`mx-2`} name="car-side" size={32} color="gray" /> */}
                    <View style={tailwind`flex-col`}>
                        <View style={tailwind`flex-row items-center`}>
                            <View  style={tailwind`w-2/4 items-start`}>
                                <Text style={tailwind`font-bold text-lg`}>Maintenance</Text></View>
                            <View 
                            style={tailwind`w-1/4 items-end`}
                            >
                                <TouchableOpacity><Text>edit</Text></TouchableOpacity></View>
                        </View>  
                        {/* <Text style={tailwind`text-sm italic text-gray-400`}>2020</Text>               */}
                        <View style={tailwind`flex-row flex-wrap`}>
                            <Text style={tailwind`text-xs m-1 italic text-gray-400 bg-primary text-white p-2 rounded-full`}>Aircon Cleaning</Text>
                            <Text style={tailwind`text-xs m-1 italic text-gray-400 bg-primary text-white p-2 rounded-full`}>Change Oil</Text>
                            <Text style={tailwind`text-xs m-1 italic text-gray-400 bg-primary text-white p-2 rounded-full`}>Change Oil</Text>
                            <Text style={tailwind`text-xs m-1 italic text-gray-400 bg-primary text-white p-2 rounded-full`}>Change Oil</Text>
                            <Text style={tailwind`text-xs m-1 italic text-gray-400 bg-primary text-white p-2 rounded-full`}>Change Oil</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={tailwind`border-b-2 border-gray-50 m-4 p-2 flex-row items-center`}>

                    <MaterialCommunityIcons name="engine-outline" size={72} color="#333" />
               
                <View style={tailwind`flex-row items-center`}>
                    {/* <FontAwesome5 style={tailwind`mx-2`} name="car-side" size={32} color="gray" /> */}
                    <View style={tailwind`flex-col`}>
                        <View style={tailwind`flex-row items-center`}>
                            <View  style={tailwind`w-2/4 items-start`}>
                                <Text style={tailwind`font-bold text-lg`}>Maintenance</Text></View>
                            <View 
                            style={tailwind`w-1/4 items-end`}
                            >
                                <TouchableOpacity><Text>edit</Text></TouchableOpacity></View>
                        </View>  
                        {/* <Text style={tailwind`text-sm italic text-gray-400`}>2020</Text>               */}
                        <View style={tailwind`flex-row flex-wrap`}>
                            <Text style={tailwind`text-xs m-1 italic text-gray-400 bg-primary text-white p-2 rounded-full`}>Aircon Cleaning</Text>
                            <Text style={tailwind`text-xs m-1 italic text-gray-400 bg-primary text-white p-2 rounded-full`}>Change Oil</Text>
                            <Text style={tailwind`text-xs m-1 italic text-gray-400 bg-primary text-white p-2 rounded-full`}>Change Oil</Text>
                            <Text style={tailwind`text-xs m-1 italic text-gray-400 bg-primary text-white p-2 rounded-full`}>Change Oil</Text>
                            <Text style={tailwind`text-xs m-1 italic text-gray-400 bg-primary text-white p-2 rounded-full`}>Change Oil</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
};



export default ServicesScreen;