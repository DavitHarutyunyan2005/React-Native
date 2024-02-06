import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView, FlatList } from 'react-native';
import { useState } from 'react';

const HeaderAdmin = ({navigation}) => {


    const [menu, setMenu] = useState(false);

    const handleSidebar = () => {
        setMenu(!menu);
        console.log('Menu State:', !menu); 
    };


    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.menuButton}>
                <Image source={require('./images/sas.png')} style={styles.logo} />
            </TouchableOpacity>
            <TextInput placeholder="Search..." style={styles.searchInput} />
            <TouchableOpacity onPress={handleSidebar}>
                <Image source={require('./images/whiteMenu.png')} style={styles.logo} />
            </TouchableOpacity>
            {menu && (
                <View style={styles.sidebar}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.menuItem}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                        <Text style={styles.menuItem}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                        <Text style={styles.menuItem}>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AddProduct')}>
                        <Text style={styles.menuItem}>Add Product</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Logout')}>
                        <Text style={styles.menuItem}>Log out</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 24,
        backgroundColor: 'black',
    },
    menuButton: {
        marginRight: 10,
    },
    logo: {
        width: 80,
        height: 40,
        resizeMode: 'contain',
    },
    searchInput: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 8,
        marginLeft: 10,
    },
    sidebar: {
        backgroundColor: 'white',
        position: 'absolute',
        right: 1,
        top: 92,
        width: 319,
        height: 498,
        padding: 16,
        zIndex: 8,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    menuItem: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'black',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default HeaderAdmin;
