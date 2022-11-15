import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const CategoriCard = ({ imageUrl, title }) => {
     return (
          <TouchableOpacity style={tw`h-20 w-20 relative mr-2 rounded`}>
               <Image style={tw`h-20 w-20 rounded`} source={{ uri: imageUrl }} />
               <Text style={tw`absolute bottom-1 left-1 text-white font-bold`}>{title}</Text>
          </TouchableOpacity>
     )
}

export default CategoriCard