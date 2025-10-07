import React, { useCallback } from 'react';
import { Dimensions, View } from 'react-native';

import BackGround from '@/components/ui/BackGround';
import CustomCard from '@/components/ui/CustomCard';
import { CustomText } from '@/components/ui/CustomText';
import Feather from '@expo/vector-icons/Feather';
import { Easing, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
const image = require('@/assets/bg/login.png')
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const fecha = "Viernes, 3 de Octubre"
const money = 1024.34
const Dashboard = () => {

const backGroundAnimation = useCallback(() => {
    return withRepeat(
        withSequence(
            
            withTiming(1.2, {
                duration: 5000,
                easing: Easing.inOut(Easing.ease),
            }),
            withTiming(1, {
                duration: 5000,
                easing: Easing.inOut(Easing.ease),
            })
        ),
        -1,  // Repetir infinitamente
        true // Revertir la animación (1 -> 1.1) en cada ciclo
    );
}, []);
  return (
    <View className='flex-1 items-center justify-start gap-4 p-4'>
      <BackGround
        image={image}
        height={HEIGHT}
        width={WIDTH}
        opacity={0.1}
        animation={backGroundAnimation}>
      </BackGround>
      <CustomCard className='gap-2'>
        <View className='flex-row items-center justify-between'>
          <CustomText size='medium' color='black'>{fecha}</CustomText>
          <Feather name="lock" size={16} color="gray" />
        </View>
        <CustomText size='large' color='black' bold className='mb-4'>Mi economia</CustomText>
        <CustomText size="medium">Saldo Actual:</CustomText>
        <CustomText size='large' color='black' bold>{`$${money}`}</CustomText>
        <CustomText size='small' color='gray'>{`Presupuesto Mensual: $${money}`}</CustomText>
      </CustomCard>
    </View>
  )
}

export default Dashboard