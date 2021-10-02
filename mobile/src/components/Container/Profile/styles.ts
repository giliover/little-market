import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  height: 40px;
  background: #fff;
  border-bottom-color: #ccc;
  background-color: #fff;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  margin: 5px;
`;
export const Title = styled.Text`
  color: #333;
  font-size: 14px;
  font-family: 'RobotoSlab';
  font-weight: bold;
`;
export const SubTitle = styled.Text`
  color: #444;
  font-size: 14px;
  font-family: 'RobotoSlab';
`;
