import React from 'react'
import {View, Text} from 'react-native'
import estilo from '../style/estilo'

const ParOuImpar = (num) => {
  const v = num % 2 == 0 ? 'Par' : 'Impar'
  return <Text style={estilo.ex}>{v}</Text>
}
export default props =>
<View>
  {ParOuImpar(props.numero)}
{
  // props.numero % 2 == 0 ?
  // <Text style={estilo.ex}>Par</Text> :
  // <Text style={estilo.ex}>Impar</Text>
}
  </View>
