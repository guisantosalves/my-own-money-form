import react from 'react'
import {Pressable, Text, StyleSheet} from 'react-native'

const Button = ({title, myFunction, color}) => {
    return(
        <Pressable onPress={() => myFunction(title)} style={color ? {
            alignItems: 'center',
            width: 100,
            height: 40,
            padding: 10,
            marginTop: 30,
            backgroundColor: `${color}`,
            borderRadius: 10
        } : style.button}>
            <Text>{title}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: 100,
        height: 40,
        padding: 10,
        marginTop: 30,
        backgroundColor: '#5B9279',
        borderRadius: 10
    },
})
export default Button