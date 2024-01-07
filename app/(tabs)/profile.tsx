import { useAuth } from '@clerk/clerk-expo';
import { Link } from 'expo-router';

import { Text, View, Button } from 'react-native';

export default function Profile() {
  const { signOut, isSignedIn } = useAuth();
  return (
    <View>
      <Text>Hello world</Text>
      <Button title="Log out" onPress={() => signOut()} />
      {!isSignedIn && (
        <Link href={'/(modals)/login'}>
          <Text>Log In</Text>
        </Link>
      )}
    </View>
  );
}
