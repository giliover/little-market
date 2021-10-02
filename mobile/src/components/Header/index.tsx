import React from 'react';
import {
  Container,
  Top,
  Bottom,
  Logo,
  ContainerInput,
  Input,
  Button,
} from './styles';
import Icons from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/logo-horizontal.png';
interface Props {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  onPressOrder: (value: boolean) => void;
}

const Header: React.FC<Props> = (props) => {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
      </Top>
      <Bottom>
        <ContainerInput>
          <Button>
            <Icons name="search" size={24} color="#ff6666" />
          </Button>
          <Input
            value={props.value}
            placeholderTextColor="#555"
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
          />
          <Button onPress={props.onPressOrder}>
            <Icons name="filter-list" size={24} color="#ff6666" />
          </Button>
        </ContainerInput>
      </Bottom>
    </Container>
  );
};

export default Header;
