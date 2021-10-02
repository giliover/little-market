import React from 'react';
import {View} from 'react-native';

import {InputContainer, Button, InputText} from './styles';

import Icons from 'react-native-vector-icons/MaterialIcons';
interface Props {
  icon: string;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

const Input: React.FC<Props> = (props) => {
  return (
    <InputContainer>
      <Button>
        <Icons name={props.icon} size={24} color="#555" />
      </Button>
      <InputText
        value={props.value}
        placeholderTextColor="#555"
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
      />
    </InputContainer>
  );
};

export default Input;
