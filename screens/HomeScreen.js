import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { View, Text } from 'react-native'

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
     navigation.setOptions({
          headerShown: false,
     })
  }, [])
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen