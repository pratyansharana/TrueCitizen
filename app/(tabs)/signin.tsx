
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import useGoogleAuth from '../../hooks/useGoogleAuth';

const SignInScreen = () => {
  const { promptAsync } = useGoogleAuth({
    clientId: 'YOUR_CLIENT_ID', // Replace with your actual client ID
    redirectUri: 'YOUR_REDIRECT_URI', // Replace with your actual redirect URI
  });

  return (
    <View style={styles.container}>
      <Button title="Sign in with Google" onPress={() => promptAsync()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignInScreen;
