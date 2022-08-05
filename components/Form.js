import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import RadioButtons from "./RadioButtons";
import Button from "./Button";

//firebase
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

const Form = () => {
  const [value, setValue] = useState("");

  const [option, setOption] = useState("");

  const [date, setDate] = useState("");

  const dataOne = [
    { value: "food" },
  ];

  const dataTwo = [
    { value: "pleasure" },
  ]

  const dataThree = [
    { value: "investment" },
  ]

  const dataFour = [
    { value: "transport" },
  ]

  const dataFive = [
    { value: "other" },
  ]

  // From Child to Parent with Callbacks
  const gettingOption = (val) => {
    setOption(val);
  };

  const cleanTheFields = (val) => {
    if (val == "Cancelar") {
      setValue("");
      setOption("");
      setDate("");
    }
  };

  const saveData = async (val) => {
    if (val == "Salvar") {
      if (value && option) {
        try {
          await addDoc(collection(db, "gasto"), {
            expend: parseFloat(value),
            expendType: option,
            date: Timestamp.now() || date,
            deleted: false,
          });
          alert("Inserido com sucesso");
        } catch (err) {
          alert(err);
        }
      } else {
        alert("está faltando valores");
      }
    } else {
      alert("algo deu errado");
    }
  };

  return (
    <View style={Style.container}>
      {/* //valor */}
      <View style={Style.valueContainer}>
        <Text
          style={{
            marginLeft: 15,
            fontSize: 18,
            color: "#5B9279",
            fontWeight: "bold",
          }}
        >
          Value:
        </Text>
        <TextInput
          underlineColorAndroid="transparent"
          style={Style.inputValue}
          value={value}
          onChangeText={(ItemValue) => setValue(ItemValue)}
          placeholder="Ex: 1000,2"
          keyboardType="numeric"
        />
      </View>

      {/* //radiobutton pro tipo de gasto */}
      <RadioButtons data={dataOne} option={gettingOption} />
      <RadioButtons data={dataTwo} option={gettingOption} />
      <RadioButtons data={dataThree} option={gettingOption} />
      <RadioButtons data={dataFour} option={gettingOption} />
      <RadioButtons data={dataFive} option={gettingOption} />


      {/* //data */}
      <View style={{ marginTop: 30 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginLeft: 15,
              fontSize: 18,
              color: "#5B9279",
              fontWeight: "bold",
            }}
          >
            Date:
          </Text>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 10,
              color: "red",
              fontWeight: "bold",
            }}
          >
            *not required
          </Text>
        </View>
        <TextInput
          underlineColorAndroid="transparent"
          style={Style.inputValue}
          value={date}
          onChangeText={(ItemValue) => setDate(ItemValue)}
          placeholder="Ex: 15/02/2002"
          keyboardType="numeric"
        />
      </View>

      {/* buttons */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Button title={"Salvar"} myFunction={saveData} />
        <Button
          title={"Cancelar"}
          color={"#AF5D4A"}
          myFunction={cleanTheFields}
        />
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    width: 360,
    padding: 20,
    justifyContent: "center",
    alignContent: "flex-start",
  },
  inputValue: {
    backgroundColor: "#EFF2F5",
    outlineStyle: "none",
    padding: 15,
    borderRadius: 999,
    width: "100%",
  },
  valueContainer: {},
});

export default Form;
