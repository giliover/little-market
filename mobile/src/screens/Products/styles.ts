import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fcfcfc;
`;
export const ContainerModal = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentModal = styled.View`
  background: #fff;
  width: 300px;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #ccc;
`;
export const ModalHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 2px 10px;
`;

export const ContainerIcon = styled.TouchableOpacity``;
export const ContainerOrder = styled.TouchableOpacity`
  margin: 5px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Orderlabel = styled.Text`
  font-size: 14px;
`;
