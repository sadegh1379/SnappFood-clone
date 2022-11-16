import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import tw from 'twrnc';
import { ArrowLeftIcon,ChevronRightIcon, MapPinIcon, StarIcon } from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline'

const RestaurantScreen = () => {
     const navigation = useNavigation();
     const { params: {
          id,
          imageUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
     } } = useRoute();

     useLayoutEffect(() => {
          navigation.setOptions({
               headerShown: false,
          })
     }, [])
     return (
          <ScrollView>
               <View style={tw`relative`}>
                    <Image source={{
                         uri: urlFor(imageUrl).url()
                    }}
                         style={tw`w-full h-50`}
                    />
                    <TouchableOpacity
                         onPress={navigation.goBack}
                         style={tw`p-1 bg-white rounded-full absolute top-7 left-3`}
                    >
                         <ArrowLeftIcon
                              color="#00CCBB"
                              size={20} />
                    </TouchableOpacity>
               </View>
               <View style={tw`bg-white p-2`}>
                    <Text style={tw`text-3xl`}>{title}</Text>
                    <View style={tw`mt-1 flex-row items-center`}>
                         <View style={tw`flex-row items-center`}>
                              <StarIcon color="gold" size={22}/>
                              <Text style={tw`text-gray-600 ml-1`}>{rating} . {genre}</Text>
                         </View>
                         <View style={tw`flex-row items-center ml-2`}>
                              <MapPinIcon color={tw`text-gray-300`} size={22}/>
                              <Text style={tw`text-gray-600 ml-1`}>Near by . {address}</Text>
                         </View>
                    </View>
                    <Text style={tw`text-gray-400 mt-2 mb-2`}>{short_description}</Text>
                    <TouchableOpacity 
                    style={tw`flex-row items-center justify-between p-2 border-t
                    border-gray-300`}>
                         <QuestionMarkCircleIcon size={22} color="gray"/>
                         <Text style={tw`text-md font-bold`}>Have a food allergy?</Text>
                         <ChevronRightIcon size={22} color="gray"/>
                    </TouchableOpacity>
               </View>
          </ScrollView>
     )
}

export default RestaurantScreen