import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../slices/basketSlice'
import Currency from 'react-currency-formatter'

const BasketIcon = () => {
  const basketItems = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  return (
    <View style={tw`absolute bottom-2 z-50 w-full p-3`}>
      <TouchableOpacity style={tw`bg-[#00CCBB] rounded-md p-3`}>
          <View style={tw`flex-row items-center justify-between px-1`}>
               <Text style={tw`font-bold text-white p-2 px-3 bg-[#01A296] rounded-md`}>{basketItems.length}</Text>
               <Text style={tw`text-lg font-bold text-white`}>View Basket</Text>
               <Text style={tw`text-white font-bold`}>
                  <Currency quantity={basketTotal} currency="USD"/>
               </Text>
          </View>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon