import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
StyleSheet;
export const Product = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  font-family: 'RobotoSlab-Medium';
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 10px 5px;
  margin: 2px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #ccc;
`;
export const ProductHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Image = styled.Image`
  width: 100px;
  height: 100px;
`;
export const ProductInformation = styled.View`
  padding: 5px 5px;
  min-height: 80px;
`;

export const ProductName = styled.Text`
  padding-top: 12px;
  text-align: center;
  height: 50px;
  font-size: 14px;
`;
export const ProductPrice = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 16px;
  padding: 1px;
`;

export const ProductButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background: #fff;
  border-color: #ff6666;
  border-width: ${StyleSheet.hairlineWidth}px;
  padding: 5px;
  margin: 2px 0px;
  border-radius: 2px;
`;
export const ProductButtonBuy = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background: #d72f3f;
  padding: 5px;
  margin: 2px 0px;
  border-radius: 2px;
`;
export const ProductButtonLabel = styled.Text`
  color: #d72f3f;
  font-weight: bold;
  text-align: center;
`;

export const ProductButtonLabelBuy = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const ProductButtonRemove = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background: #fff;
  padding: 5px;
  margin: 2px 0px;
`;
export const ProductRemoveLabel = styled.Text`
  color: #000;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
`;
