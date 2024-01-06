import React from 'react';

import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';

export default function Page() {
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log('id', id);
  return (
    <View>
      <Text>Hello world</Text>
      <Link href={'/(modals)/login'}>Login</Link>
      <Link href={'/(modals)/booking'}>Booking</Link>
    </View>
  );
}
