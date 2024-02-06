import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, SafeAreaView, Dimensions, StyleSheet, ScrollView,  } from 'react-native';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    const Stack = createStackNavigator();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        options={{
                            headerStyle: { backgroundColor: COLORS.lightWhite },
                            headerShadowVisible: false,
                            headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />,
                            headerRight: () => <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />,
                            headerTitle: "Home",
                        }}
                    >
                        {() => (
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View
                                    style={{
                                        flex: 1,
                                        padding: SIZES.medium,
                                    }}
                                >
                                    <Welcome
                                        // searchTerm={searchTerm}
                                        // setSearchTerm={setSearchTerm}
                                        handleClick={() => {
                                            if (searchTerm) {
                                                router.push(`/search/${searchTerm}`)
                                            }
                                        }}
                                    />

                                    <Popularjobs />
                                    <Nearbyjobs />
                                </View>
                            </ScrollView>
                        )}
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.lightWhite,
    },
});

export default Home;