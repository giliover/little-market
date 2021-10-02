import React from 'react';
import {Container, Label} from './styles';

interface Props {
  title: string;
  onPress: () => Promise<void>;
}

const Button: React.FC<Props> = props => {
  return (
    <Container onPress={props.onPress}>
      <Label>{props.title}</Label>
    </Container>
  );
};
export default Button;
