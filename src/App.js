import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, ImageBackground, Modal, Pressable, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
import MashButton from './CustomButton';
import Header from './Header';

export default function App() {
  
  const [name, SetName] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const [showWarming, SetshowWarming] = useState(false);
  const onPressHandler = ()=> {
    if (name.length > 3) {
      SetSubmitted(!submitted);
    }else {
      // Alert.alert('The name must be longer than 3 characters', [
      //   {text:'OK', onPress: () => console.warn('OK Pressed!')}
      // ])
      // ToastAndroid.showWithGravity('The name must be longer than 3 characters',
      // ToastAndroid.LONG,
      // ToastAndroid.CENTER
      // )
      SetshowWarming(true);
    }
  }
  return (
    <ImageBackground style={styles.container}
    source={{uri:'https://thuysanvietnam.com.vn/wp-content/uploads/2020/10/vinh-ha-long.jpg'}}
    >
      <Header />
      <Modal visible={showWarming} transparent onRequestClose={()=> 
        SetshowWarming(false)
      }
      animationType= 'slide'
      hardwareAccelerated
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>WARNING!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>The name must be longer than 3 characters</Text>
            </View>
            <Pressable
              onPress={()=> SetshowWarming(false)}
              style={styles.warning_button}
            >
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>What your name?</Text>
      <TextInput style={styles.input} placeholder='search'
      onChangeText={(value)=>SetName(value)}
      // secureTextEntry
      />
      {/* <Button title={submitted? 'Clear' : 'submit' }
      onPress={onPressHandler}
      color = '#00f'
      /> */}
      {/* <TouchableOpacity 
      onPress={onPressHandler}
      >
        <View style={styles.button}>
          <Text style={styles.text}>{submitted? 'Clear' : 'Submit' }</Text>
        </View>
      </TouchableOpacity> */}
      <MashButton
      onPressFunction = {onPressHandler}
      title = {submitted? 'Clear' : 'Submit' }
      color= {'#00ff00'}
      />
      <MashButton
      onPressFunction = {onPressHandler}
      title = { 'Test' }
      color= {'#ff00ff'}
      style={{margin: 10}}
      />
      {/* <Pressable
      onPress={onPressHandler}
      style={styles.button}
      >
        <Text style={styles.text}>{submitted? 'Clear' : 'Submit' }</Text>
      </Pressable> */}
      {submitted ?
      <View style={styles.container}>
      <Text style={styles.text}>your name is: {name}</Text>
      <Image
        style={styles.image}
        source={require('../assets/Done.png')}
        resizeMode= 'stretch'
       />
       </View>
      :
      <Image
        style={styles.image}
        source={{uri:'https://media.istockphoto.com/photos/oops-sign-picture-id459361269'}}
        resizeMode= 'stretch'
       />
       
      }
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#00ff00',
    alignItems: 'center',
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
