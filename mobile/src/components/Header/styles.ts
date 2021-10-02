import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
export const Container = styled.View`
  flex-direction: column;
  justify-content: center;
  background: #fff;
  padding: 10px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #ccc;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'cover',
})`

  width: 250px;
  height: 50px;
`;

export const Top = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
`;
export const Bottom = styled.View`
  margin: 5px 0px;
`;
export const ContainerInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  border-radius: 4px;
  padding: 5px 10px;
  height: 40px;
`;
export const Input = styled.TextInput`
  flex: 1;
  align-items: center;
  font-size: 12px;
  height: 40px;
  width: 100%;
  border-width: 0px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;
