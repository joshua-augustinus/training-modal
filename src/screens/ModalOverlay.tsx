import React, { useEffect, useRef, useState } from 'react';
import { Animated as Spring, View, BackHandler, useWindowDimensions, StyleSheet, Image, Text } from 'react-native';
import { SafeAreaView, StackActions } from 'react-navigation';
import { useSelector, useDispatch } from 'react-redux'
import Animated from 'react-native-reanimated';
import { EasingFunctions } from '@src/constants/EasingFunctions';

const ModalOverlay = () => {
    return (
        <SafeAreaView style={{ ...styles.overlayContainer }}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>

            </View>
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
