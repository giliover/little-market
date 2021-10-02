import styled from 'styled-components/native';
import {Dimensions, StyleSheet} from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const HEIGHTBYTWO = HEIGHT / 2.5;

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  height: ${HEIGHT}px;
  background-color: #fff;
`;

export const Title = styled.Text`
  margin-top: 16px;
  text-align: right;
  width: 100%;
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

export const Description = styled.Text`
  margin-top: 16px;
  font-size: 14px;
  color: #999;
  font-weight: 400;
`;

export const Price = styled.Text`
  font-size: 18px;
  color: #e40909;
  font-weight: bold;
`;

export const ContainerBottom = styled.View`
  margin: 40px 12px;
  margin: 40px 12px;
  flex-direction: column;
  justify-content: flex-end;
  height: ${HEIGHTBYTWO}px;
`;

export const ContainerTop = styled.View`
  margin: 12px 12px;
  display: flex;
  flex-direction: column;
  height: ${HEIGHTBYTWO}px;
  align-items: flex-start;
  justify-content: flex-start;
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
  border-color: #d72f3f;
  border-width: ${StyleSheet.hairlineWidth}px;
  padding: 5px;
  border-radius: 2px;
  height: 40px;
`;

export const ProductButtonBuy = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  margin-top: 16px;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background: #d72f3f;
  height: 40px;
  padding: 5px;
  border-radius: 2px;
`;

export const ProductButtonsContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
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
  height: 40px;
`;

export const ProductRemoveLabel = styled.Text`
  color: #000;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
`;
