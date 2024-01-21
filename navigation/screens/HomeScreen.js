import React from 'react'
import { View, Text } from 'react-native'
 
export const HomeScreen = (navigation) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text 
        onPress={() => alert('This is the "Home" screen.')}
        style={{ fontSize: 32, fontWeight: 'bold' }}
        >
            Home Screen
        </Text>
    </View>
  )
}
