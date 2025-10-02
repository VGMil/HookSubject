import { CustomButton } from '@/components/ui/CustomButton';
import { CustomText } from '@/components/ui/CustomText';
import { TextInput, View } from "react-native";

type RegisterFormProps = {
  onRegisterPress: () => void;
  onSwitchToLogin: () => void;
  isDisabled?: boolean;
}

export function RegisterForm({ onRegisterPress, onSwitchToLogin, isDisabled = true}: RegisterFormProps) {
  return (
    <>
      <CustomText size='large' bold className='h-20'>Bienvenido!</CustomText> 
      
      <TextInput 
        className='bg-white text-black rounded-lg p-3 w-full border border-black' 
        placeholder='Nombre' 
      />
      <TextInput 
        className='bg-white text-black rounded-lg p-3 w-full border border-black' 
        placeholder='Email' 
      />
      <TextInput 
        className='bg-white text-black rounded-lg p-3 w-full border border-black' 
        placeholder='Contraseña' 
        secureTextEntry 
      />
      <TextInput 
        className='bg-white text-black rounded-lg p-3 w-full border border-black' 
        placeholder='Repite tu contraseña' 
        secureTextEntry 
      />
      
      <View className='flex-row gap-2'>
        
        <CustomButton 
          onPress={onRegisterPress} 
          variant={isDisabled ? 'disabled' : 'primary'}
        >
          Registrarse
        </CustomButton>
        
        <CustomButton 
          onPress={onSwitchToLogin} 
          variant='link'
        >
          Iniciar Sesion
        </CustomButton>
      </View>
    </>
  );
}