import React from 'react'
import { View, Text } from 'react-native'
 
export const SettingScreen = (navigation) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text 
        onPress={() => alert('This is the "settings" screen.')}
        style={{ fontSize: 32, fontWeight: 'bold' }}
        >
            Home Screen
        </Text>
    </View>
  )
}
