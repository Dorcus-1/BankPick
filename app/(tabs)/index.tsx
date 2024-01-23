import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View >
      <Text>Tab uno</Text>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}


