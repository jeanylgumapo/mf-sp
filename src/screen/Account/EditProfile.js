import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {Text, View,ScrollView, Image} from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import { FontAwesome } from '@expo/vector-icons'; 
import { Input, Button,ButtonGroup, CheckBox } from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
const EditProfileScreen = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState("1");
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  
    return (
        <View>           
            <Input
                placeholder='Fullname'
                errorStyle={{ color: 'red' }}
                errorMessage='ENTER A VALID ERROR HERE'
            />
            {/* <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
            <Picker.Item label="Male" value="1" />
            <Picker.Item label="Female" value="2" /> */}
        {/* </Picker> */}
        <View>
            <View>
                {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}
            </View>
            <View>
                <Button onPress={showTimepicker} title="Show time picker!" />
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
            value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
        <Input
                placeholder='Email'
                errorStyle={{ color: 'red' }}
                errorMessage='ENTER A VALID ERROR HERE'
            />
            <AntDesign name="checkcircle" size={24} color="green" />
            <Feather name="x-circle" size={24} color="red" />
            <Input
                placeholder='Mobile'
                errorStyle={{ color: 'red' }}
                errorMessage='ENTER A VALID ERROR HERE'
            />
            <AntDesign name="checkcircle" size={24} color="green" />   
            <Feather name="x-circle" size={24} color="red" /> 
             <Input 
                placeholder="Password" 
                // value={password}
                // onChangeText={text=> setPassword(text)}
                secureTextEntry={true} />
            <Button  
                title='Submit' 
                // onPress={() => 
                //     {login(email, password, navigation)} 
                //     // { navigation.navigate('Dashboard', login(email, password), )}
                // }
                 />
    </View>
    )
};

export default EditProfileScreen;