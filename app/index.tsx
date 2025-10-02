import { LoginForm } from '@/components/auth/LoginForm';
import '@/global.css';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const image = { 'uri': require('../assets/bg/background.png') };
  return (
    <ImageBackground source={image.uri} resizeMode="cover" className="w-full h-full">
      <LinearGradient
        colors={['rgba(255,255,255,1)','transparent','transparent', 'rgba(255,255,255,1)']}
        locations={[0.01, 0.15,0.5, 0.7]}
        className="flex-1 items-end justify-end"
      >
        <SafeAreaView className="items-start justify-start flex-col w-full h-auto px-8 gap-4" >
          <LoginForm 
            onLoginPress={() => {}} 
            onSwitchToRegister={() => {}} 
          />
        </SafeAreaView>
        </LinearGradient>
    </ImageBackground>
  );
}
