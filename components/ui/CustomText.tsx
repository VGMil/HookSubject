import React from 'react';
import { Text } from 'react-native';

interface CustomTextProps {
  children: React.ReactNode;
  size?: 'large' | 'medium' | 'small' | 'button';
  color?: 'black' | 'white';
  className?: string;
  bold?: boolean;
}

export const CustomText = ({ 
  children, 
  size = 'medium', 
  color = 'black', 
  className = '',
  bold = false 
}: CustomTextProps) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'large':
        return 'text-6xl';
      case 'medium':
        return 'text-xl';
      case 'small':
        return 'text-base';
      case 'button':
        return 'text-lg text-center';
      default:
        return 'text-base';
    }
  };

  return (
    <Text className={`text-${color} ${getSizeStyles()} ${bold ? 'font-bold' : ''} ${className}`}>
      {children}
    </Text>
  );
};