import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [mostrarImagem, setMostrarImagem] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.bemVindo}>Bem vindo!</Text>
        <Text style={styles.titulo}>Academia NHE<AntDesign name="banckward" size={24} color="blackgreen" /></Text>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Login" />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Image', { uri: 'https://files.tecnoblog.net/wp-content/uploads/2020/06/horario-de-pico-google-maps-2.png' })}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ImageScreen({ route }) {
  const { uri } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imagemContainer}>
        <ScrollView>
          <Image source={{ uri }} style={styles.imagem} />
          <View style={styles.exerciciosContainer}>
            <TouchableOpacity style={styles.exercicio}>
              <Text style={styles.exercicioTexto}>Exercício 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.exercicio}>
              <Text style={styles.exercicioTexto}>Exercício 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.exercicio}>
              <Text style={styles.exercicioTexto}>Exercício 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.exercicio}>
              <Text style={styles.exercicioTexto}>Exercício 4</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bemVindo: {
    fontSize: 18,
    marginBottom: 20,
    color: 'green',
  },
  titulo: {
    fontSize: 24,
    color: 'green',
fontWeight: 'bold',
},
input: {
borderWidth: 1,
borderColor: 'gray',
borderRadius: 10,
padding: 30,
margin: 10,
width: '100%',
},
botao: {
backgroundColor: 'green',
padding: 10,
borderRadius: 5,
marginTop: 10,
width: '80%',
alignItems: 'center',
},
textoBotao: {
color: '#fff',
fontWeight: 'bold',
},
imagemContainer: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
width: '100%',
},
imagem: {
width: '100%',
height: 250,
resizeMode: 'contain',
},
exerciciosContainer: {
flex: 1,
flexDirection: 'row',
flexWrap: 'wrap',
alignItems: 'center',
justifyContent: 'center',
width: '100%',
marginVertical: 10,
},
exercicio: {
backgroundColor: 'green',
padding: 10,
borderRadius: 5,
margin: 5,
},
exercicioTexto: {
color: '#fff',
fontWeight: 'bold',
},
});

const containerStyle = {
flex: 1,
padding: 20,
backgroundColor: 'white',
};

const headerStyle = {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
};

const formStyle = {
flex: 2,
alignItems: 'center',
justifyContent: 'center',
};

const bemVindoStyle = {
fontSize: 18,
marginBottom: 20,
color: 'green',
};

const tituloStyle = {
fontSize: 24,
color: 'green',
fontWeight: 'bold',
};

const inputStyle = {
borderWidth: 1,
borderColor: 'gray',
borderRadius: 5,
padding: 10,
margin: 10,
width: '80%',
};

const botaoStyle = {
backgroundColor: 'green',
padding: 10,
borderRadius: 5,
marginTop: 10,
width: '80%',
alignItems: 'center',
};

const textoBotaoStyle = {
color: '#fff',
fontWeight: 'bold',
};

const imagemContainerStyle = {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
width: '100%',
};

const imagemStyle = {
width: '100%',
height: 250,
resizeMode: 'contain',
};

const exerciciosContainerStyle = {
flex: 1,
flexDirection: 'row',
flexWrap: 'wrap',
alignItems: 'center',
justifyContent: 'center',
width: '100%',
marginVertical: 10,
};

const exercicioStyle = {
backgroundColor: 'green',
padding: 10,
borderRadius: 5,
margin: 5,
};

const exercicioTextoStyle = {
color: '#fff',
fontWeight: 'bold',
};