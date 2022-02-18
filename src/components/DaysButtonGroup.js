import React, {useState} from 'react'
import { ButtonGroup } from 'react-native-elements'
import tailwind from 'tailwind-react-native-classnames';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
export default() => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    // const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);
    return (
        <View>
        {/* <ButtonGroup
          buttons={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            setSelectedIndex(value);
          }}
          containerStyle={{ marginBottom: 20 }}
        />  
        <Text>{selectedIndex}</Text> */}
        
            <View style={tailwind`flex flex-row flex-nowrap items-start m-4`}>
                <TouchableOpacity style={tailwind`bg-primary px-4 m-2 py-8 rounded-2xl`}>
                    <Text style={tailwind`text-white text-base font-bold`}>Mon</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind`bg-primary px-4 m-2 py-8 rounded-2xl`}>
                    <Text style={tailwind`text-white text-base font-bold`}>Tue</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind`bg-primary px-4 m-2 py-8 rounded-2xl`}>
                    <Text style={tailwind`text-white text-base font-bold`}>Wed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind`bg-primary px-4 m-2 py-8 rounded-2xl`}>
                    <Text style={tailwind`text-white text-base font-bold`}>Thu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind`bg-primary px-4 m-2 py-8 rounded-2xl`}>
                    <Text style={tailwind`text-white text-base font-bold`}> Fri </Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind`bg-primary px-4 m-2 py-8 rounded-2xl`}>
                    <Text style={tailwind`text-white text-base font-bold`}>Sat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tailwind`bg-primary px-4 m-2 py-8 rounded-2xl`}>
                    <Text style={tailwind`text-white text-base font-bold`}>Sun</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
  }
  
  const styles = StyleSheet.create({
    subHeader: {
      backgroundColor : "#2089dc",
      color : "white",
      textAlign : "center",
      paddingVertical : 5,
      marginBottom : 10
    }
  })