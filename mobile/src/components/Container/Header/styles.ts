import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0px 10px;
  border-bottom-color: #ccc;
  background-color: #fff;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 220px;
  height: 30px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #444;
`;
