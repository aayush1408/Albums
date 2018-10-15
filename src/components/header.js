import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.viewStyles}>
            <Text style={styles.textStyles}>{props.headerText}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    viewStyles: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    },
    textStyles: {
        fontSize: 20
    }
});
export default Header;