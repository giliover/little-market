import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  display: flex;
  align-content: center;
  flex-direction: column;
  padding: 10px 4px;
  background-color: #fcfcfc;
`;

export const Top = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0px;
`;
export const Footer = styled.View`
  margin-top: auto;
  margin: 5px;
`;
export const Avatar = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 80px;
  height: 80px;
  border-radius: 140px;
  border-color: #333;
  border-width: 3px;
`;

export const LabelName = styled.Text`
  font-size: 16px;
  color: #444;
  font-weight: bold;
  text-align: center;
  margin: 10px 0px;
`;
