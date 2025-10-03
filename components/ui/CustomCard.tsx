import React from 'react';
import { View } from 'react-native';

interface CustomCardProps{
  children: React.ReactNode;
  className?: string;
}

const CustomCard = ({children, className = ''}: CustomCardProps) => {
  return (
    <View className={`bg-white p-4 rounded-md shadow-md w-fit h-fit ${className}`}>
      {children}
    </View>
  )
}

export default CustomCard