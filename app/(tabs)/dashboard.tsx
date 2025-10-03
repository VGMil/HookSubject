import React, { useCallback } from 'react';
import { Dimensions, View } from 'react-native';

import BackGround from '@/components/ui/BackGround';
import { Easing, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
const image = require('@/assets/bg/login.png')
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

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
    <View>
      <BackGround
        image={image}
        height={HEIGHT}
        width={WIDTH}
        opacity={0.5}
        animation={backGroundAnimation}>
      </BackGround>
    </View>
  )
}

export default Dashboard