import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../slices/basketSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XCircleIcon } from 'react-native-heroicons/solid';
import tw from 'twrnc'
import { urlFor } from '../sanity';
import Currency from 'react-currency-formatter'

const BasketScreen = () => {
     const dispatch = useDispatch();
     const navigation = useNavigation();
     const restaurant = useSelector(selectRestaurant);
     const basketItems = useSelector(selectBasketItems);
     const subTotal = useSelector(selectBasketTotal);
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
                              style={tw`bg-[#00CCBB] absolute top-6 right-3 rounded-full`}>
                              <XCircleIcon size={40} color="#fff" />
                         </TouchableOpacity>
                    </View>
                    <View style={tw`flex-row p-3 items-center my-4 bg-white`}>
                         <Image
                              style={tw`w-7 h-7 rounded-full`}
                              source={require('../assets/my-profile.jpg')} />
                         <Text style={tw`flex-1 ml-2`}>Deliver in 50-75 min</Text>
                         <TouchableOpacity>
                              <Text style={tw`text-[#00CCBB]`}>change</Text>
                         </TouchableOpacity>
                    </View>
                    <ScrollView>
                         {Object.entries(groupItemsInBasket).map(([key, items]) => (
                              <View key={key}
                                   style={tw`flex-row items-center p-3 bg-white border-b border-gray-200`}>
                                   <Text>{items.length} x</Text>
                                   <Image
                                        style={tw`h-10 w-10 rounded-full mx-2`}
                                        source={{
                                             uri: urlFor(items[0]?.image).url()
                                        }}
                                   />
                                   <Text style={tw`flex-1`}>{items[0]?.name}</Text>
                                   <Text style={tw`mx-2`}>
                                        <Currency quantity={items[0]?.price} currency="USD" />
                                   </Text>
                                   <TouchableOpacity
                                        onPress={() => dispatch(removeFromBasket({ id: key }))}
                                   >
                                        <Text style={tw`text-[#00CCBB]`}>remove</Text>
                                   </TouchableOpacity>
                              </View>
                         ))}
                    </ScrollView>
                    <View style={tw`bg-white p-4`}>
                         <View style={tw`flex-row items-center justify-between`}>
                              <Text style={tw`text-gray-400`}>Subtotal</Text>
                              <Text style={tw`text-gray-400`}>
                                   <Currency quantity={subTotal} currency="USD"/>
                              </Text>
                         </View>
                         <View style={tw`flex-row items-center justify-between my-2`}>
                              <Text style={tw`text-gray-400`}>Delivery Free</Text>
                              <Text style={tw`text-gray-400`}>$50</Text>
                         </View>
                         <View style={tw`flex-row items-center justify-between`}>
                              <Text style={tw`font-bold`}>Order Total</Text>
                              <Text style={tw`font-bold`}>
                                   <Currency quantity={subTotal + 50} currency="USD"/>
                              </Text>
                         </View>
                         <TouchableOpacity
                         onPress={() => navigation.navigate('Preparing')}
                         style={tw`bg-[#00CCBB] rounded-md p-3 mt-4`}>
                              <Text style={tw`text-white font-bold text-xl text-center`}>Place Order</Text>
                         </TouchableOpacity>
                    </View>
               </View>
          </SafeAreaView>
     )
}

export default BasketScreen