import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import style from './styles';
import gonice from '../../assets/gonice.json';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
export default function Login() {
  const navigation = useNavigation();
  const navigateToRegister = () => {
    navigation.navigate('register', {});
  };
  return (
    <View style={style.container}>
      <SafeAreaView style={style.logoContainer}>
        <LottieView
          style={style.logoAnimation}
          source={gonice}
          resizeMode="contain"
          autoPlay
          loop
        />
        <Text style={style.logoText}>GoNice!</Text>
      </SafeAreaView>
      <View style={style.fieldContainer}>
        <View style={style.inputContainer}>
          <Text style={style.inputLabel}>E-mail</Text>
          <TextInput textContentType="emailAddress" style={style.textInput} />
        </View>
        <View style={style.inputContainer}>
          <Text style={style.inputLabel}>Password</Text>
          <TextInput
            secureTextEntry
            textContentType="newPassword"
            style={style.textInput}
          />
        </View>
        <View style={style.inputContainer}>
          <TouchableOpacity style={style.goButton}>
            <Text style={style.goButtonText}>GO!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.registerButton}
            onPress={navigateToRegister}>
            <Text style={style.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
