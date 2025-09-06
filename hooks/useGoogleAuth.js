
import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';

WebBrowser.maybeCompleteAuthSession();

const useGoogleAuth = (options) => {
  const [request, response, promptAsync] = useAuthRequest({
    clientId: options.clientId,
    redirectUri: makeRedirectUri({
      native: options.redirectUri,
    }),
    scopes: ['profile', 'email'],
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const credential = provider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return {
    promptAsync,
  };
};

export default useGoogleAuth;
