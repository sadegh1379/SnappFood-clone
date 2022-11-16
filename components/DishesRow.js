import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import tw from 'twrnc'
import Currency from 'react-currency-formatter';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';

const DishesRow = ({ id, name, description, price, image }) => {
     const [isPresed, setIsPresed] = useState(false);
     return (
          <>
               <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setIsPresed(!isPresed)}
                    style={tw`border border-gray-200 p-4 bg-white ${isPresed && 'border-b-0'}`}>
                    <View style={tw`flex-row items-center`}>
                         <View style={tw`flex-1`}>
                              <Text style={tw`text-lg mb-1`}>{name}</Text>
                              <Text style={tw`text-gray-400`}>{description}</Text>
                              <Text style={tw`text-gray-400 mt-2`}>
                                   <Currency quantity={price} currency="USD" />
                              </Text>
                         </View>
                         <Image style={tw`w-20 h-20 border border-gray-300 rounded`}
                              source={{ uri: urlFor(image).url() }} />
                    </View>
               </TouchableOpacity>
               {isPresed && (
                    <View style={tw`pl-3 py-2 bg-white`}>
                         <View style={tw`flex-row items-center`}>
                              <TouchableOpacity>
                                   <MinusCircleIcon size={40} color="#00CCBB" />
                              </TouchableOpacity>
                              <Text style={tw`mx-3`}>0</Text>
                              <TouchableOpacity>
                                   <PlusCircleIcon size={40} color="#00CCBB" />
                              </TouchableOpacity>
                         </View>
                    </View>
               )}
          </>
     )
}

export default DishesRow