import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { View, Text, Image } from 'react-native'
import tw from 'twrnc'
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/solid'


const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
     navigation.setOptions({
          headerShown: false,
     })
  }, [])
  return (
    <View>
      {/* header top */}
      <View style={tw`bg-white p-2 flex flex-row items-center justify-between`}>
          {/* title */}
          <View style={tw`flex flex-row items-center`}>
               <Image style={tw`h-10 w-10 rounded-full`} source={require('../assets/my-profile.jpg')}/>
               <View style={tw`ml-3`}>
                    <Text style={tw`text-xs text-gray-300`}>Deliver Noew!</Text>
                    <View style={tw`flex flex-row items-center`}>
                         <Text style={tw`text-xl font-bold`}>Current Location</Text>
                         <ChevronDownIcon style={tw`mt-1`} size={25} color="#00CCBB"/>
                    </View>
               </View>
          </View>
          {/* user avatar */}
          <UserIcon size={30} color="#00CCBB"/>
      </View>
    </View>
  )
}

export default HomeScreen