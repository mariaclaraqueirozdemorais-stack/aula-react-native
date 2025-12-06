import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputcustomizado';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

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

      <View>
        {lista.map((item, index) => (
          <Text key={index} className="text-Xl">
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
}
