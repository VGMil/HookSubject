import { LoginForm } from '@/components/auth/LoginForm';
import { RegisterForm } from '@/components/auth/RegisterForm';
import '@/global.css';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const image = { 'uri': require('../assets/bg/login.png') };

const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);


export default function Index() {
  const [isLogin, setIsLogin] = useState(true);
    useEffect(() => {
    // Cada vez que cambia isLogin, reinicia la animación
    translateY.value = 300; // Resetea la posición abajo
    translateY.value = withSpring(0, {
      damping: 35,
      stiffness: 90,
    });
  }, [isLogin]);

  const scale = useSharedValue(1);
  const translateY = useSharedValue(0);

  const toggleForm = (toLogin: boolean) => {
    setIsLogin(toLogin);
    // Animación de escala
    scale.value = withSpring(toLogin ? 1.1 : 1, {
      damping: 15,
      stiffness: 90,
    });
  };
  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
      ]
    };
  });

  const animatedFormStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: translateY.value },
      ]
    };
  });
  return (
    <View className="w-full h-full bg-white items-center justify-end p-8">
    <AnimatedImageBackground 
      source={image.uri}
      resizeMode="cover"
      className='absolute top-0 left-0 -z-1'
      style={[
        {
          height: HEIGHT,
          width: WIDTH,
        },
        animatedImageStyle,
      ]}
      >
      <LinearGradient
        colors={['rgba(255,255,255,1)','transparent','transparent', 'rgba(255,255,255,1)']}
        locations={isLogin ? [0.01, 0.15, 0.2, 0.7] : [0.01, 0.15, 0.2, 0.6]}
        className="flex-1 items-end justify-end"
      />
    </AnimatedImageBackground>
      <Animated.View 
        className="items-start justify-end flex-col w-full gap-4 mb-2" 
        style={
          animatedFormStyle
        }>
          {
            isLogin ? ( // operador ternario simplificacion del if
              <LoginForm
                onLoginPress={() => { router.replace('/dashboard') }} 
                onSwitchToRegister={() => {toggleForm(false)}} 
                isDisabled={false}
              />
            ) : (//else
              <RegisterForm
                onRegisterPress={() => { router.replace('/+not-found') }} 
                onSwitchToLogin={() => {toggleForm(true)}}
                isDisabled={false} 
              />
            )
          }
          
        </Animated.View>
        <StatusBar style="dark" />
    </View>
  );
}
