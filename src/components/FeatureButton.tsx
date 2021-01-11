import { updatePressInfo } from "@src/reducers";
import React, { useRef, useState } from "react";
import { Image, View } from "react-native";
import { Pressable, StyleSheet, TouchableOpacity, useWindowDimensions } from "react-native";
import { useDispatch } from 'react-redux';

interface Props {

}

export const FEATURE_BUTTON_HEIGHT = 150;
const IMAGE = require('../assets/sample.jpg');
const FeatureButton = (props: Props) => {
    const cardRef = useRef(null);
    const width = useWindowDimensions().width;
    const dispatch = useDispatch();

    const onPress = React.useCallback(() => {

        cardRef.current.measure((x, y, width, height, pageX, pageY) => {
            const layout = { x: pageX, y: pageY, width, height, borderRadius: 0, imageSource: IMAGE };

            dispatch(updatePressInfo(layout));
        });

    }, []);

    return (
        <Pressable onPress={onPress}  >
            <View ref={cardRef} collapsable={false}>
                <Image style={{ ...styles.image, width: width, height: FEATURE_BUTTON_HEIGHT }} resizeMode='cover' source={IMAGE} />

            </View>


        </Pressable>
    )
}

export { FeatureButton }

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        zIndex: 1
    },
    image: {
        width: '100%',

    }
})