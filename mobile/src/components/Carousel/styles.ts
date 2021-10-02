import styled from 'styled-components/native';
import {Dimensions, StyleSheet} from 'react-native';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = WIDTH * 0.6;

export const Container = styled.View`
  background-color: #fff;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
`;
