import React from 'react';
import { Text } from 'react-native';

interface CustomTextProps {
  children: React.ReactNode;
  size?: 'large' | 'medium' | 'small' | 'button';
  color?: 'black' | 'white' | 'gray'| 'blue';
  className?: string;
  bold?: boolean;
  underline?: boolean;
}

export const CustomText = ({ 
  children, 
  size = 'medium', 
  color = 'black', 
  className = '',
  bold = false,
  underline = false
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
  const getColorStyles = () => {
    switch (color) {
      case 'white':
        return 'text-white';
      case 'black':
        return 'text-black';
      case 'gray':
        return 'text-gray-500';
      case 'blue':
        return 'text-blue-500';
      default:
        return 'text-black';
    }
  };
  return (
    <Text className={`${getColorStyles()} ${getSizeStyles()} ${bold ? 'font-bold' : ''} ${underline ? 'underline' : ''} ${className}`}>
      {children}
    </Text>
  );
};