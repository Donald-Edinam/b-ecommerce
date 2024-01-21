import React from 'react'
import { View, Text } from 'react-native'
 
export const DetailsSreen = (navigation) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text 
        onPress={() => alert('This is the "Details" screen.')}
        style={{ fontSize: 32, fontWeight: 'bold' }}
        >
            Home Screen
        </Text>
    </View>
  )
}
