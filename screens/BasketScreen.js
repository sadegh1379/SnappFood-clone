import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { selectBasketItems } from '../slices/basketSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XCircleIcon } from 'react-native-heroicons/solid';
import tw from 'twrnc'

const BasketScreen = () => {
     const navigation = useNavigation();
     const restaurant = useSelector(selectRestaurant);
     const basketItems = useSelector(selectBasketItems);
     const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);

     useEffect(() => {
          const groupedItems = basketItems.reduce((results, item) => {
               (results[item.id] = results[item.id] || []).push(item);
               return results;
          }, {});
          setGroupItemsInBasket(groupedItems);
     }, [basketItems])

     return (
          <SafeAreaView style={tw`flex-1 bg-white`}>
               <View style={tw`flex-1 bg-gray-100`}>
                    <View style={tw`bg-white p-4 border-b border-[#00CCBB]`}>
                         <View>
                              <Text style={tw`text-center text-lg font-bold`}>Basket</Text>
                              <Text style={tw`text-center text-gray-500`}>{restaurant.title}</Text>
                         </View>
                         <TouchableOpacity
                              onPress={navigation.goBack}
                              style={tw`bg-[#00CCBB] shadow-xs absolute top-6 right-3 rounded-full`}>
                              <XCircleIcon size={40} color="#fff" />
                         </TouchableOpacity>
                    </View>
                    <View style={tw`flex-row p-3 items-center my-4 bg-white`}>
                         <Image 
                         style={tw`w-7 h-7 rounded-full`}
                         source={require('../assets/my-profile.jpg')}/>
                         <Text style={tw`flex-1 ml-2`}>Deliver in 50-75 min</Text>
                         <TouchableOpacity>
                              <Text style={tw`text-[#00CCBB]`}>change</Text>
                         </TouchableOpacity>
                    </View>
               </View>
          </SafeAreaView>
     )
}

export default BasketScreen