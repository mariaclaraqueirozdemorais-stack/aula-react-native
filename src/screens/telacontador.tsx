import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputcustomizado';
import { useState } from 'react';
import { Text, View } from 'react-native';

export function Telacontador() {
  const [contador, setContador] = useState(0);

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl"> inputs </Text>
      {contador}

      <ButtonCustomizado title="+" onPress={() => setContador(contador + 1)} />
    </View>
  );
}
