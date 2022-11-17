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
                         source={require('../assets/preparing.gif')}
                         style={tw`h-96 w-96`}
                         animation="slideInUp"
                         iterationCount={1}
                    />
                    <Animatable.Text
                         animation="slideInUp"
                         iterationCount={1}
                         style={tw`font-bold text-[#00CCBB] mb-5`}
                    >
                         Wating for restaurant to accept your order
                    </Animatable.Text>
                    <Progress.CircleSnail indeterminate={true} size={60} color="#00CCBB" />
               </View>
          </SafeAreaView>
     )
}

export default PreparingOrderScreen