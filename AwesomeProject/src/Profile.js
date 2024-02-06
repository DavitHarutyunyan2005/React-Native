import { View, Text } from 'react-native'
import React from 'react'

export default function Profile() {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.menuButton}>
                <Icon name="bars" size={20} color="white" />
            </TouchableOpacity>
            <Image source={require('./path-to-your-logo.png')} style={styles.logo} />
            <TextInput placeholder="Search..." style={styles.searchInput} />
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#3498db', // Change the background color as needed
    },
    menuButton: {
        marginRight: 10,
    },
    logo: {
        width: 80,
        height: 40,
        resizeMode: 'contain', // Adjust the image style as needed
    },
    searchInput: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 8,
        marginLeft: 10,
    },
});
