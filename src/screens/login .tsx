import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputcustomizado';
import { Text, View } from 'react-native';

export function LoginScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full gap-5 bg-red-500 p-5">
        
          <Text className="text-3xl">nosso app</Text>
          
        <InputCustomizado
        placeholder={"senha"}
        />
        <InputCustomizado placeholder={'Login'} />
        <ButtonCustomizado title="entrar" />
      </View>
    </View>
  ) 

