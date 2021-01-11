/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { AppContainer } from '@src/AppContainer';
import { ModalOverlay } from '@src/screens/ModalOverlay';

const App = () => {
    return (
        <Fragment>
            <AppContainer />
            <ModalOverlay />
        </Fragment>
    );
};

export default App;
