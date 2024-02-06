import { Stack } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMjBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMjMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMjRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    });

    const [isSplashReady, setSplashReady] = useState(false);

    useEffect(() => {
        if (fontsLoaded) {
            setSplashReady(true);
        }
    }, [fontsLoaded]);

    const onLayoutRootView = useCallback(async () => {
        if (isSplashReady) {
            await SplashScreen.hideAsync();
        }
    }, [isSplashReady]);

    if (!isSplashReady) return null;

    return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
