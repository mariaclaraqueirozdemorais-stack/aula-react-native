import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputcustomizado';
import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

export function ListaScreen() {
  const [item, setItem] = useState('');
  const [lista, setlista] = useState<string[]>([]);

  function adicionaItem() {
    setlista([...lista, item]);
    setItem('');
  }

  function limpaLista() {
    setlista([]);
  }
  return (
    <View className="itens-center flex-1 gap-4 p-3">
      <Text className="m-3 text-4xl">Lista de itens</Text>
      <InputCustomizado placeholder="item" value={item} onChangeText={(text) => setItem(text)} />
      <ButtonCustomizado title="Adicionar" onPress={adicionaItem} />
      <ButtonCustomizado title={'limpa Lista'} onPress={limpaLista} />

      <ScrollView className="gray-300rout--lg mt-5 w-full gap-5 border p-3">
        {lista.map((item, index) => (
          <Text key={index} className="text-2Xl">
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}
