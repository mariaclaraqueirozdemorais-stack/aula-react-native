import { StatusBar } from 'expo-status-bar';

import './global.css';

import { SafeAreaView } from 'react-native-safe-area-context';
import { TelaSoma } from '@/screens/TelaSoma';



export default function App() {
  return (
    <>
      <SafeAreaView className=" flex-1">
        <TelaSoma />
      </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}
