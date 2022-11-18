import { View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'

const PreparingOrderScreen = () => {
     const navigation = useNavigation();

     useEffect(() => {
          setTimeout(() => {
               navigation.navigate('Deliver')
          }, 5000)
     }, [])
     return (
          <SafeAreaView style={tw`flex-1`}>
               <View style={tw`flex-1 bg-white justify-center items-center`}>
                    <Animatable.Image
                         source={require('../assets/preparing.png')}
                         style={tw`h-30 w-30 mb-10 rounded-full`}
                         animation="slideInUp"
                         iterationCount={1}
                    />
                    <Animatable.Text
                         animation="slideInUp"
                         iterationCount={1}
                         style={tw`font-bold text-[#00CCBB] mb-7`}
                    >
                         Wating for restaurant to accept your order
                    </Animatable.Text>
                    <Progress.Bar indeterminate={true} size={60} color="#00CCBB" />
               </View>
          </SafeAreaView>
     )
}

export default PreparingOrderScreen