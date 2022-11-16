import { ActivityIndicator, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import CategoriCard from './CategoriCard'
import client, { urlFor } from '../sanity';
import tw from 'twrnc'

const Categories = () => {
     const [categories, setCategories] = useState([]);
     const [loading, setLoading] = useState(false);

     useEffect(() => {
          setLoading(true)
          client.fetch(
               `
               *[_type == "category"]
               `
          ).then(data => {
               setLoading(true)
               setCategories(data)
               setLoading(false)
          })
          setLoading(false)
     }, [])

     return (
          <ScrollView
               horizontal
               showsHorizontalScrollIndicator={false}
               contentContainerStyle={{
                    paddingHorizontal: 10,
                    paddingTop: 10
               }}
          >
               {loading && <ActivityIndicator style={tw`mx-auto my-5`} color="#00CCBB" size={25} />}
               {!loading && categories?.map(category => (
                    <CategoriCard
                         key={category._id}
                         imageUrl={urlFor(category.image).width(200).url()}
                         title={category.name} />

               ))}
          </ScrollView>
     )
}

export default Categories