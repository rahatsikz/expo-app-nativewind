/* eslint-disable prettier/prettier */
import { Text, View } from 'react-native';

export function CountView({ label, count }: { label: string; count: string }) {
  return (
    <View className="items-center gap-2.5">
      <Text className="tracking-widest text-gray-500">{label}</Text>
      <Text className="text-2xl font-bold leading-none">{count}</Text>
    </View>
  );
}
