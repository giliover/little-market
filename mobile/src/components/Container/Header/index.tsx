import React from 'react';
import {Container, Title, Logo} from './styles';
import logo from '../../../assets/logo-horizontal.png';

interface Props {
  title: string;
}
const Header: React.FC<Props> = props => {
  return (
    <Container>
      <Logo source={logo} />
      <Title>{props.title}</Title>
    </Container>
  );
};

export default Header;
