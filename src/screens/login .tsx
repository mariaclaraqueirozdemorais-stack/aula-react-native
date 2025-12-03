import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputcustomizado';
import { useState } from 'react';
import { Text, View } from 'react-native';

export function LoginScreen() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full items-center gap-5 p-5">
        <Text className="text-3xl"> nosso app </Text>

        <InputCustomizado placeholder={'login'} onChangeText={(text) => setLogin(text)} />
        <InputCustomizado
          placeholder={'senha'}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry={true}
        />

        <ButtonCustomizado
          title="Entrar"
          onPress={() => console.log('login', login, 'senha', senha)}
        />

        <Text className="text-blue-400">esqueceu a Senha?</Text>
      </View>
    </View>
  );
}
