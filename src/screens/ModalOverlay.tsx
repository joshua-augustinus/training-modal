import React, { useEffect, useRef, useState } from 'react';
import { Animated as Spring, View, BackHandler, useWindowDimensions, StyleSheet, Image, Text, Pressable, Alert, Animated } from 'react-native';
import { SafeAreaView, StackActions } from 'react-navigation';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@src/types';
import { updatePressInfo } from '@src/reducers';
import { getSpringConfig } from '@src/constants/SpringConfig';

const HEIGHT = 250;

const ModalOverlay = () => {
    const pressInfo = useSelector((state: RootState) => state.pressInfo);
    const dispatch = useDispatch();
    const springState = useRef(new Animated.Value(0)).current;
    const screenWidth = useWindowDimensions().width;

    useEffect(() => {
        if (pressInfo) {
            Spring.spring(springState, getSpringConfig(1)).start();
        } else {

        }
    }, [pressInfo])

    const extra = 50;//needed for the bottom gap on iphones

    const translateY = springState.interpolate({
        inputRange: [0, 1],
        outputRange: [HEIGHT + extra, extra]
    })


    const dismiss = () => {
        Spring.spring(springState, getSpringConfig(0)).start(() => {
            dispatch(updatePressInfo(null));

        });

    }

    const transform = [{ translateY: translateY }]

    if (!pressInfo)
        return null;

    return (
        <SafeAreaView style={{ ...styles.overlayContainer }}>
            <Pressable onPress={dismiss} style={{ flex: 1, }}>



            </Pressable>
            <Animated.View style={{ ...styles.contentContainer, transform: transform }}>
                <View style={styles.header}></View>
                <View style={{ flex: 1, backgroundColor: 'white' }} />
            </Animated.View>
        </SafeAreaView>
    )
}

export { ModalOverlay }


const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        width: '100%',
        height: HEIGHT,
        paddingHorizontal: 2
    },
    header: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 50,
        backgroundColor: '#208EAC'
    },
    overlayContainer: {
        ...StyleSheet.absoluteFillObject,
        overflow: 'hidden',
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
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
