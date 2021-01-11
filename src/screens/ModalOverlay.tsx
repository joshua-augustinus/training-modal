import React, { useEffect, useRef, useState } from 'react';
import { Animated as Spring, View, BackHandler, useWindowDimensions, StyleSheet, Image, Text, Pressable, Alert } from 'react-native';
import { SafeAreaView, StackActions } from 'react-navigation';
import { useSelector, useDispatch } from 'react-redux'
import Animated from 'react-native-reanimated';
import { EasingFunctions } from '@src/constants/EasingFunctions';
import { RootState } from '@src/types';

const ModalOverlay = () => {
    const pressInfo = useSelector((state: RootState) => state.pressInfo);
    if (!pressInfo)
        return null

    const transform = [{ translateY: pressInfo.y }, { translateX: pressInfo.x }]

    return (
        <SafeAreaView style={{ ...styles.overlayContainer }}>
            <Pressable onPress={() => { Alert.alert("TEST") }} style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>

                <Pressable onPress={() => { Alert.alert("e") }} style={{ backgroundColor: 'red', width: pressInfo.width, height: pressInfo.height, transform: transform }}>
                    <View >
                        <Text>Placholder</Text>
                    </View>
                </Pressable>

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
