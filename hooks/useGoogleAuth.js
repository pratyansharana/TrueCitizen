
import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';

WebBrowser.maybeCompleteAuthSession();

// Use a proxy to avoid issues with underscores in the redirect URI
const redirectUri = makeRedirectUri({ useProxy: true });
console.log('Your redirect URI is:', redirectUri);

const useGoogleAuth = (options) => {
  const [request, response, promptAsync] = useAuthRequest({
    clientId: options.clientId,
    redirectUri,
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
