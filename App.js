import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import Form from './components/Form';

export default function App() {

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>

          {/* header */}
          <View style={styles.headerPage}>
            <Image 
              source={require("./assets/salary.png")}
              style={{width: 50, height: 50, marginTop: 100}}
            />
            <Text style={{fontSize: 20, color: '#5B9279', marginTop: 10}}>
              M.O.M
            </Text>
          </View>
          
          {/* formulario */}
          <Form/>

      </SafeAreaView>
    </ScrollView>
  );
}

// react native
// align-items -> eixo X
// justify-content -> eixo Y

// web css
// align-item -> Y 
// justify-content -> X
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAE6E5',
    alignItems: 'center', 
    justifyContent: 'flex-start',
    padding: 0,
    margin: 0
  },
  headerPage: {
    flexDirection: 'column',
    alignItems: 'center'
  },
});
