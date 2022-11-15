import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import tw from 'twrnc'
import { AdjustmentsHorizontalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from 'react-native-heroicons/solid'
import { Categories } from '../components'


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
               <View style={tw`bg-white p-2 `}>
                    {/* title */}
                    <View style={tw`flex flex-row items-center justify-between`}>
                         <View style={tw`flex flex-row items-center`}>
                              <Image style={tw`h-10 w-10 rounded-full`} source={require('../assets/my-profile.jpg')} />
                              <View style={tw`ml-3`}>
                                   <Text style={tw`text-xs text-gray-300`}>Deliver Now!</Text>
                                   <View style={tw`flex flex-row items-center`}>
                                        <Text style={tw`text-base font-bold`}>Current Location</Text>
                                        <ChevronDownIcon style={tw`mt-1`} size={25} color="#e91e63" />
                                   </View>
                              </View>
                         </View>
                         {/* user avatar */}
                         <UserIcon size={30} color="#e91e63" />
                    </View>
                    <View style={tw`flex flex-row items-center mt-3`}>
                         <View style={tw`bg-gray-200 flex-1 m-1 flex-row p-2 items-center`}>
                              <MagnifyingGlassIcon color="gray"/>
                              <TextInput style={tw` ml-2`} placeholder="Search Restaurants"/>
                         </View>
                         <AdjustmentsHorizontalIcon size={30} color="#e91e63"/>
                    </View>
               </View>
               <ScrollView>
                    {/* categories */}
                    <Categories />
                    {/* ... */}
               </ScrollView>
          </View>
     )
}

export default HomeScreen