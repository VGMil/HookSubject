import { CustomText } from '@/components/ui/CustomText';
import { Link, Stack } from 'expo-router';
import React from 'react';
import { ImageBackground, View } from 'react-native';

const image = { 'uri': require('../assets/bg/not-found.png') };

const NotFoundScreen = () => {
    return (
        <>
            <Stack.Screen options={{ title: "Oops! This screen doesn't exist." }} />
            <View className='items-center justify-center w-full h-full gap-4'>
                <ImageBackground source={image.uri} resizeMode="cover" className='w-full h-1/3' />
                <View className='items-center justify-center gap-4 p-1'>
                    <CustomText size='large' bold >404</CustomText>
                    <CustomText size='medium' bold >Oops! Lo siento no existe esta pantalla.</CustomText>
                    <Link href="/" className='bg-black p-4 rounded-full mt-4'>
                        <CustomText size='medium' bold className='text-white'>Volver al inicio</CustomText>
                    </Link>
                </View>
            </View>
        </>
    )
}

export default NotFoundScreen