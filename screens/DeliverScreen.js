import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc'
import { XCircleIcon } from 'react-native-heroicons/outline';
import * as Progress from 'react-native-progress'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const DeliverScreen = () => {
     const navigation = useNavigation();
     const restaurant = useSelector(selectRestaurant);

     return (
          <View style={tw`flex-1 bg-[#00CCBB]`}>
               <SafeAreaView style={tw`z-50`}>
                    <View style={tw`flex-row  items-center justify-between p-4`}>
                         <TouchableOpacity
                              onPress={() => navigation.navigate('Home')}>
                              <XCircleIcon size={40} color="white" />
                         </TouchableOpacity>
                         <TouchableOpacity>
                              <Text style={tw`font-bold text-white`}>Order Help</Text>
                         </TouchableOpacity>
                    </View>
                    <View style={tw`bg-white p-4 my-2 z-50 mx-4 shadow-md rounded-lg`}>
                         <View style={tw`flex-row items-center justify-between`}>
                              <View>
                                   <Text style={tw`text-lg text-gray-400`}>Estimated Arrival</Text>
                                   <Text style={tw`text-3xl font-bold mt-1`}>45-55 Minutes</Text>
                              </View>
                              <View>
                                   <Image source={require('../assets/delivery.gif')}
                                        style={tw`w-35 h-22`}
                                   />
                              </View>

                         </View>
                         <Progress.Bar style={tw`my-1`} indeterminate={true} size={10} color="#00CCBB" />
                         <Text style={tw`text-gray-400 mt-1`}>your order at {restaurant?.title} is being prepared</Text>
                    </View>
               </SafeAreaView>
               <MapView
                    initialRegion={{
                         latitude: 35.715298,
                         longitude: 51.404343,
                         latitudeDelta: 0.0922,
                         longitudeDelta: 0.0421,
                    }}
                    provider={PROVIDER_GOOGLE}
                    mapType="mutedStandard"
                    style={tw`flex-1 z-0 -mt-10`}
               >
                    <Marker
                         coordinate={{
                              latitude: 35.715298,
                              longitude: 51.404343,
                              latitudeDelta: 0.0922,
                              longitudeDelta: 0.0421,
                         }}
                         title={restaurant.title}
                         description={restaurant.short_description}
                    />
               </MapView>
               <SafeAreaView style={tw`pb-4 h-20 w-full bg-white px-3 flex-row items-center`}>
                    <Image 
                    style={tw`h-10 w-10 rounded-full`}
                    source={require('../assets/my-profile.jpg')}/>
                    <View style={tw`flex-1 ml-4`}>
                         <Text style={tw`text-lg font-bold`}>Sadegh Akbari</Text>
                         <Text style={tw`text-gray-400`}>your rider</Text>
                    </View>
                    <TouchableOpacity>
                         <Text style={tw`text-[#00CCBB]`}>Call</Text>
                    </TouchableOpacity>
               </SafeAreaView>
          </View>
     )
}

export default DeliverScreen