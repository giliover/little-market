import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #d72f3f;
  height: 40px;
  margin-top: auto;
  border-radius: 4px;
  width: 100%;
`;
export const Label = styled.Text`
  font-size: 14px;
  color: #fff;
`;
