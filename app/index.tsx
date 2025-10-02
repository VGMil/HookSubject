import { LoginForm } from '@/components/auth/LoginForm';
import { RegisterForm } from '@/components/auth/RegisterForm';
import '@/global.css';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Dimensions, ImageBackground, View } from "react-native";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const image = { 'uri': require('../assets/bg/background.png') };

export default function Index() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <View className="w-full h-full bg-white items-center justify-end p-8">
    <ImageBackground 
      source={image.uri}
      resizeMode="cover"
      className='absolute inset-auto -z-1'
      style={{
        height: HEIGHT,
        width: WIDTH}}
      >
      <LinearGradient
        colors={['rgba(255,255,255,1)','transparent','transparent', 'rgba(255,255,255,1)']}
        locations={[0.01, 0.15,0.2, 0.7]}
        className="flex-1 items-end justify-end"
      />
    </ImageBackground>
      <View className="items-start justify-end flex-col w-full gap-4 mb-2" >
          {
            isLogin ? ( // operador ternario simplificacion del if
              <LoginForm
                onLoginPress={() => {}} 
                onSwitchToRegister={() => {setIsLogin(false)}} 
              />
            ) : (//else
              <RegisterForm
                onRegisterPress={() => {}} 
                onSwitchToLogin={() => {setIsLogin(true)}} 
              />
            )
          }
          
        </View>
    </View>
  );
}
