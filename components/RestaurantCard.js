import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({
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
}) => {
  const navigation = useNavigation()
  
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Restaurant', {
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
      })}
      style={tw`bg-white mr-2 w-64 shadow-md`}>
      <Image
        source={{ uri: urlFor(imageUrl).url() }}
        style={tw`w-64 h-36 rounded`}
      />
      <View style={tw`p-2`}>
        <Text style={tw`text-xl font-bold`}>{title}</Text>
        <View style={tw`flex-row items-center mt-1`}>
          <StarIcon style={tw`text-green-500`} size={22} opacity={0.2} />
          <Text style={tw`ml-2 text-gray-500`}>{rating} . <Text style={tw`ml-2`}>{genre}</Text></Text>
        </View>
        <View style={tw`flex-row items-center mt-1`}>
          <MapPinIcon color="gray" size={22} opacity={0.2} />
          <Text style={tw`ml-1 text-gray-700`}>Near by {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard