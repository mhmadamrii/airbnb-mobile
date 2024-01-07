import React from 'react';
import ExploreHeader from '~/components/ExploreHeader';

import { View, Text } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function Page() {
  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      <Stack.Screen
        options={{ header: () => <ExploreHeader /> }}
      />
      {/* <Link href={'/(modals)/login'}>Login</Link>
      <Link href={'/(modals)/booking'}>Booking</Link>
      <Link href={'/listing/someid123'}>listing</Link> */}
    </View>
  );
}
