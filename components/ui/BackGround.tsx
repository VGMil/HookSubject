import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect } from 'react';
import { ImageBackground, ImageSourcePropType, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

interface BackGroundProps {
    image: ImageSourcePropType;
    height: number;
    width: number;
    children?: React.ReactNode;
    animation: () => any;
}
const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);

const BackGround = ({ 
    image,
    height,
    width,
    children,
    animation }: BackGroundProps) => {
        const scale = useSharedValue(1);

        useEffect(() => {
        scale.value = animation();
    }, [animation]);

        const animatedImageStyle = useAnimatedStyle(() => {
            return {
                transform: [
                    { scale: scale.value },
                ]
            };
        });
        return (
            <View className='absolute top-0 left-0 -z-1'>
                <AnimatedImageBackground
                    source={image}
                    resizeMode="cover"
                    style={[
                        {
                            height: height,
                            width: width,
                        },
                        animatedImageStyle,
                    ]}>
        <LinearGradient
          colors={['rgba(255,255,255,1)', 'transparent', 'transparent', 'rgba(255,255,255,1)']}
          locations={[0.01, 0.15, 0.2, 0.7]}
          className="flex-1 items-end justify-end"
        />
                </AnimatedImageBackground>
            </View>
        )
}

export default BackGround