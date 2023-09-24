import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

const backgroundImage = require('./img/bg-phone.jpg'); 
const logo = require('./img/wp2098819.jpg'); 

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Thực hiện kiểm tra tên người dùng và mật khẩu, và xác minh đăng nhập
    // Trong ví dụ này, chúng ta đơn giản là kiểm tra nếu cả hai trường đều không trống
    if (username.trim() !== '' && password.trim() !== '') {
      setLoggedIn(true);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        {loggedIn ? (
          <Text style={styles.welcomeText}>Chào mừng bạn, {username}!</Text>
        ) : (
          <>
          <TouchableOpacity>
              <Text style={styles.registerText}>REGISTER</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Tên người dùng"
              onChangeText={(text) => setUsername(text)}
              value={username}
            />
            <TextInput
              style={styles.input}
              placeholder="Mật khẩu"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            <Button 
            style={styles.buttonLogin}
            title="LOGIN" 
            onPress={handleLogin}
             />
            
          </>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Màu nền với độ trong suốt
  },
  logo: {
    width: 300,
    height: 200,
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    color:'white',
    paddingHorizontal: 8,
    backgroundColor: '#88000000', // Màu nền với độ trong suốt
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  registerText: {
    color: 'white',
    textDecorationLine: 'underline',
    fontSize:25,
    marginLeft:250,
    marginTop: 16,
  },
  buttonLogin: {
    width: 500,
    
  },
});
