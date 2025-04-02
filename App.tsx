import './global.css';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import { dummyStats } from 'constant';
import { CountView } from 'components/count-view';

export default function App() {
  return (
    <SafeAreaView className="pt-4">
      <StatusBar style="auto" />
      <View className="mx-6 mt-3 flex-row gap-6">
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg',
          }}
          className="h-32 flex-1 rounded-md"
        />
        <View className="mt-3.5 flex-1 gap-1">
          <Text className="text-lg font-bold leading-none">{dummyStats.name}</Text>
          <Text className="text-sm font-bold text-cyan-600">{dummyStats.username}</Text>
          <Text className="mt-1 text-sm font-medium text-gray-500">{dummyStats.joined}</Text>
        </View>
      </View>
      <Text className="mx-6 mt-5 text-[15px] leading-7 text-gray-500">{dummyStats.bio}</Text>
      <View className="mx-6 mt-5 flex-row justify-between rounded-lg bg-zinc-100 px-12 py-8">
        {dummyStats.countLists.map((list) => (
          <CountView key={list.label} label={list.label} count={list.count} />
        ))}
      </View>
      <View className="mx-6 mt-8 flex-row flex-wrap justify-between gap-5">
        {dummyStats.iconArr.map((icon) => (
          <View key={icon.name} className="min-w-48 flex-row items-center gap-3">
            <Entypo key={icon.name} name={icon.name as any} size={icon.size} color={icon.color} />
            <Text className="text-[15px] font-medium text-gray-700">{icon.label}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
