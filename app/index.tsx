import { CustomButton } from '@/components/ui/CustomButton';
import { CustomText } from '@/components/ui/CustomText';
import '@/global.css';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, TextInput, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const image = { 'uri': require('../assets/bg/background.png') };
  return (
    <ImageBackground source={image.uri} resizeMode="cover" className="w-full h-full ">
      <LinearGradient
        colors={['transparent', 'rgba(255,255,255,0.9)']}
        locations={[0, 0.6]}
        className="w-full h-full items-end justify-end"
      >
        <SafeAreaView className="items-start justify-start flex-col w-full h-2/5 px-8 gap-2" >
          <CustomText size='large' bold className='h-20'>Regresaste!</CustomText> 
          <CustomText size='small' className='-mt-6'>Ingresa tus datos para acceder a nuestra app!</CustomText>
          <TextInput className='bg-white text-black rounded-full p-3 w-full border border-black' placeholder='Email' />
          <TextInput className='bg-white text-black rounded-full p-3 w-full border border-black' placeholder='Password' />
          <View className='flex-row gap-2'>
            <CustomButton onPress={() => {}} variant='secondary' >Iniciar sesión</CustomButton>
            <CustomButton onPress={() => {}} variant='primary' >Registrarse</CustomButton>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
}
