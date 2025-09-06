
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import useGoogleAuth from '../../hooks/useGoogleAuth';

const SignInScreen = () => {
  const { promptAsync } = useGoogleAuth({
    clientId: '386252696662-h3predt80h2t2mtnrse8sbp635sq3f91.apps.googleusercontent.com', // Replace with your actual client ID
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
