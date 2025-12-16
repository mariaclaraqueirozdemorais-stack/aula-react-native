import React,{useState} from 'react';
import { Text, View} from 'react-native';


export default function telaParImpar() {
  const [numero, setNumero] =
  useState('');
  const[resultado, setResultado]=
  useState('');

  const verificar = () => {
    if (numero ==='') return;

    if (parseInt(numero) % 2 === 0) {
      setResultado('o numero e par');

    }else {
      setResultado('o numero e impar');


    }

  };
  return (
    <View className=''>

    <Text className=""> </Text>
  
    </View>
  )
}