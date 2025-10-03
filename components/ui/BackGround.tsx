import React, { useEffect } from 'react';
import { ImageBackground, ImageSourcePropType, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
interface BackGroundProps {
    image: ImageSourcePropType;
    height: number;
    width: number;
    children: React.ReactNode;
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
                    {children}
                </AnimatedImageBackground>
            </View>
        )
}

export default BackGround