import React from 'react'
import { Button, View } from 'react-native'
import { StyleSheet } from 'react-native';

export const Navbar = ({navigation}) => {
    return (
        <View style={styles.buttomAlign}>
            <Button
                title="Home"
                onPress={() =>
                    navigation.navigate('Home page')
                }
            />
            <Button
                title="Cart"
                onPress={() =>
                    navigation.navigate('Cart page')
                }
            />
            <Button
                title="Bill"
                onPress={() =>
                    navigation.navigate('Bill page')
                }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },


    buttomAlign: {
        backgroundColor: '#0091ea',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

});
