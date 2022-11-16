import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import { View, Text, Image, TextInput, ScrollView, ActivityIndicator } from 'react-native'
import tw from 'twrnc'
import { AdjustmentsHorizontalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from 'react-native-heroicons/solid'
import { Categories, FeaturedRows } from '../components'
import client from '../sanity'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
     const [featuredCategories, setFeaturedCategories] = useState([]);
     const [loading, setLoading] = useState(false);
     const navigation = useNavigation();
     useLayoutEffect(() => {
          navigation.setOptions({
               headerShown: false,
          })
     }, [])
     useEffect(() => {
          setLoading(true)
          client.fetch(
               `
               *[_type == "featured"] {
                    ...,
                    restaurants[]->{
                    ...,
                     dishes[]->,
                }
                }
               `
          ).then(data => {
               setFeaturedCategories(data)
               setLoading(false)
          }).catch(err => {
               setLoading(false)
               console.log(err)
          })
     }, [])

     return (
          <SafeAreaView style={{ flex: 1 }}>
               {/* header top */}
               <View style={tw`bg-white p-2 `}>
                    {/* title */}
                    <View style={tw`flex flex-row items-center justify-between`}>
                         <View style={tw`flex flex-row items-center`}>
                              <Image style={tw`h-10 w-10 rounded-full`} source={require('../assets/my-profile.jpg')} />
                              <View style={tw`ml-3`}>
                                   <Text style={tw`text-xs text-gray-300`}>Deliver Now!</Text>
                                   <View style={tw`flex flex-row items-center`}>
                                        <Text style={tw`text-base font-bold`}>Current Location</Text>
                                        <ChevronDownIcon style={tw`mt-1`} size={25} color="#00CCBB" />
                                   </View>
                              </View>
                         </View>
                         {/* user avatar */}
                         <UserIcon size={30} color="#00DDBB" />
                    </View>
                    <View style={tw`flex flex-row items-center mt-3`}>
                         <View style={tw`bg-gray-200 flex-1 m-1 flex-row p-2 items-center`}>
                              <MagnifyingGlassIcon color="gray" />
                              <TextInput style={tw` ml-2`} placeholder="Search Restaurants" />
                         </View>
                         <AdjustmentsHorizontalIcon size={30} color="#00CCBB" />
                    </View>
               </View>
               <ScrollView
                    contentContainerStyle={{
                         paddingBottom: 15
                    }}
               >
                    {/* categories */}
                    <Categories />
                    {/* Featured rows */}
                    {loading && <ActivityIndicator style={tw`mx-auto my-5`} color="#00CCBB" size={25} />}
                    {!loading && featuredCategories?.map(category => (
                         <FeaturedRows
                              key={category._id}
                              id={category._id}
                              title={category.name}
                              description={category.short_description}
                         />
                    ))}
               </ScrollView>
          </SafeAreaView>
     )
}

export default HomeScreen