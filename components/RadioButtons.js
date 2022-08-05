import react, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const RadioButtons = ({data, option}) => {

    const [select, setSelect] = useState(true)
    // From Child to Parent with Callbacks
    return(
        <View style={style.container}>
            {data.map((item, index) => {
                return (
                    <Pressable key={index} onPress={() => {option(item.value); setSelect(!select)}} 
                    style={select ? style.pressableButton : styletwo.pressableButton}>
                        <Text>{item.value}</Text>
                    </Pressable>
                )
            })}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: 'space-between',
    },
    pressableButton: {
        padding: 10,
        marginTop: 30,
        backgroundColor: '#5B9279',
        borderRadius: 999
    }
})

const styletwo = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: 'space-between',
    },
    pressableButton: {
        padding: 10,
        marginTop: 30,
        backgroundColor: 'grey',
        borderRadius: 999
    }
})

export default RadioButtons
