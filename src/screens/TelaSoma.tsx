import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputcustomizado';
import { useState } from 'react';
import { Text, View } from 'react-native';

export function TelaSoma() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [valor3, setValor3] = useState('');
  const [resultado, setResultado] = useState(0);

  function Soma() {
    const Soma = Number(valor1) + Number(valor2) + Number(valor3);

    setResultado(Soma);
  }
  return (
    <View className="flex-1">
      <InputCustomizado onChangeText={(text) => setValor1(text)} placeholder="valor1" />

      <InputCustomizado placeholder="valor2" onChangeText={(text) => setValor2(text)} />
      <InputCustomizado placeholder="valor3" onChangeText={(text) => setValor3(text)} />
      <ButtonCustomizado title="somar" onPress={Soma} />
      <Text className="">resultado {resultado}</Text>
    </View>
  );
}
