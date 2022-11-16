import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import tw from 'twrnc'
import RestaurantCard from './RestaurantCard'
import client from '../sanity'

const FeaturedRows = ({ id, title, description }) => {
     const [restaurants, setRestaurants] = useState([]);
     const [loading, setLoading] = useState(false);
     useEffect(() => {
          setLoading(true);
          client.fetch(
               `
               *[_type == "featured" && _id == $id] {
                    ...,
                    restaurants[]->{
                    ...,
                     dishes[]->,
                    type-> {
                    name
                    }
                }
                }[0]
                `
               , { id }).then(data => {
                    setRestaurants(data?.restaurants)
                    setLoading(false);
               })
          setLoading(false);
     }, [id])

     return (
          <View style={tw`mt-4`}>
               <View style={tw`flex-row items-center justify-between px-3`}>
                    <View>
                         <Text style={tw`text-lg font-bold`}>{title}</Text>
                         <Text style={tw`text-xs text-gray-500`}>{description}</Text>
                    </View>
                    <ArrowRightIcon style={tw`font-bold`} size={25} color="#00CCBB" />
               </View>
               <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                         paddingHorizontal: 10,
                         paddingTop: 10,
                    }}
               >
                    {loading && <ActivityIndicator style={tw`mx-auto`} color="#00CCBB" size={25} />}
                    {!loading && restaurants?.map(restaurant => (
                         <RestaurantCard
                              id={restaurant._id}
                              key={restaurant._id}
                              imageUrl={restaurant.image}
                              title={restaurant.name}
                              rating={restaurant.rating}
                              genre={restaurant.type?.name}
                              address={restaurant.address}
                              short_description={restaurant.short_description}
                              dishes={restaurant.dished}
                              long={restaurant.log}
                              lat={restaurant.lat}
                         />
                    ))}
               </ScrollView>
          </View>
     )
}

export default FeaturedRows