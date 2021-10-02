import React from 'react';

import {Container, Title, SubTitle} from './styles';

interface Props {
  title: string;
  subtitle?: string;
}

const ProfileItem: React.FC<Props> = (props) => {
  return (
    <Container>
      <Title>{props.title} : </Title>
      <SubTitle>{props.subtitle}</SubTitle>
    </Container>
  );
};

export default ProfileItem;
