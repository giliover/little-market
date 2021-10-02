import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
export const Product = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 5px 10px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #ccc;
`;
export const ProductImageContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductInformation = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
`;
export const ProductActions = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductName = styled.Text`
  color: #000;
  font-size: 14px;
  flex-wrap: wrap;
  font-weight: bold;
`;

export const ProductPrice = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #999;
`;

export const ProductTotal = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #d72f3f;
`;

export const ProductDeleteButton = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductControlButton = styled.TouchableOpacity`
  margin: 5px 0px;
  background-color: #ffffff;
  padding: 5px;
`;
