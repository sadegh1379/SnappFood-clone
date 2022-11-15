import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import tw from 'twrnc'
import RestaurantCard from './RestaurantCard'

const FeaturedRows = ({ title, description }) => {
     return (
          <View style={tw`mt-4`}>
               <View style={tw`flex-row items-center justify-between px-3`}>
                    <View>
                         <Text style={tw`text-lg font-bold`}>{title}</Text>
                         <Text style={tw`text-xs text-gray-500`}>{description}</Text>
                    </View>
                    <ArrowRightIcon style={tw`font-bold`} size={25} color="#e91e63" />
               </View>
               <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                         paddingHorizontal: 10,
                         paddingTop: 10
                    }}
               >
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
               </ScrollView>
          </View>
     )
}

export default FeaturedRows