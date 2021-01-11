import React, { useEffect, useRef, useState } from 'react';
import { Animated as Spring, View, BackHandler, useWindowDimensions, StyleSheet, Image, Text, Pressable, Alert, Animated } from 'react-native';
import { SafeAreaView, StackActions } from 'react-navigation';
import { useSelector, useDispatch } from 'react-redux'
import { EasingFunctions } from '@src/constants/EasingFunctions';
import { RootState } from '@src/types';
import { layoutConstants } from '@src/constants/LayoutConstants';
import { updatePressInfo } from '@src/reducers';
import { getSpringConfig } from '@src/constants/SpringConfig';

const ModalOverlay = () => {
    const pressInfo = useSelector((state: RootState) => state.pressInfo);
    const dispatch = useDispatch();
    const springState = useRef(new Animated.Value(0)).current;
    const screenWidth = useWindowDimensions().width;

    useEffect(() => {
        if (pressInfo) {
            Spring.spring(springState, getSpringConfig(1)).start();
        }
    }, [pressInfo])

    if (!pressInfo)
        return null

    const translateX = springState.interpolate({
        inputRange: [0, 1],
        outputRange: [screenWidth, pressInfo.x]
    })

    const transform = [{ translateY: pressInfo.y - layoutConstants.contentOffset }, { translateX: translateX }]

    const dismiss = () => {
        dispatch(updatePressInfo(null));
    }



    return (
        <SafeAreaView style={{ ...styles.overlayContainer }}>
            <Pressable onPress={dismiss} style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>

                <Animated.View style={{ backgroundColor: 'red', width: pressInfo.width, height: pressInfo.height, transform: transform }}>
                    <Pressable onPress={() => { }} style={{ flex: 1 }}>

                        <Text >Placholder</Text>
                    </Pressable>

                </Animated.View>

            </Pressable>
        </SafeAreaView>
    )
}

export { ModalOverlay }


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: 'black',
    },
    overlayContainer: {
        ...StyleSheet.absoluteFillObject,
        overflow: 'hidden',
        zIndex: 1//ScrollView of activity will not work otherwis    },

    },
    textContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        marginHorizontal: 20
    },
    image: {

    },
    imageContainer: {
        overflow: 'hidden', alignItems: 'center', justifyContent: 'center'
    }
});
