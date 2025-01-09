import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-red-100 '>
      <Text className=''>Aura</Text>
      <StatusBar style='auto' />
      <Link className='text-center text-blue-900' href='/profile'>
        Go to profile
      </Link>
    </View>
  );
}
