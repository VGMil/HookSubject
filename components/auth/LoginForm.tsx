import { CustomButton } from '@/components/ui/CustomButton';
import { CustomText } from '@/components/ui/CustomText';
import { TextInput, View } from "react-native";

type LoginFormProps = {
  onLoginPress: () => void;
  onSwitchToRegister: () => void;
  isDisabled?: boolean;
}

export function LoginForm({ onLoginPress, onSwitchToRegister, isDisabled = true }: LoginFormProps) {
  return (
    <>
      <CustomText size='large' bold className='h-20'>Regresaste!</CustomText> 
      <CustomText size='small' className='-mt-8'>Ingresa tus datos para acceder a nuestra app!</CustomText>
      
      <TextInput 
        className='bg-white text-black rounded-lg p-3 w-full border border-black' 
        placeholder='Email' 
      />
      <TextInput 
        className='bg-white text-black rounded-lg p-3 w-full border border-black' 
        placeholder='Password' 
        secureTextEntry 
      />
      
      <View className='flex-row gap-2'>
        <CustomButton 
          onPress={onSwitchToRegister} 
          variant='link'
        >
          Registrarse
        </CustomButton>
        <CustomButton 
          onPress={onLoginPress} 
          variant={isDisabled ? 'disabled' : 'secondary'}
        >
          Iniciar sesión
        </CustomButton>
        
      </View>
    </>
  );
}