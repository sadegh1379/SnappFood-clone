import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoriCard from './CategoriCard'

const Categories = () => {
     return (
          <ScrollView
               horizontal
               showsHorizontalScrollIndicator={false}
               contentContainerStyle={{
                    paddingHorizontal: 10,
                    paddingTop: 10
               }}
          >
               {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
                    <CategoriCard key={i} imageUrl="https://links.papareact.com/gn7" title="sadegh" />
               ))}
          </ScrollView>
     )
}

export default Categories