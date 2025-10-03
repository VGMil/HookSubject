import { CustomButton } from '@/components/ui/CustomButton'
import { router } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const settings = () => {
  return (
    <View className='flex-1 items-center justify-center'> 
      <CustomButton 
        className='max-h-16'
        variant='primary' 
        size='large' 
        onPress={() => router.replace('/')} >Logout</CustomButton>
    </View>
  )
}

export default settings