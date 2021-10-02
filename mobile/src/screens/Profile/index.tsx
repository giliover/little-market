import React from 'react';
import {Container, Top, Avatar, LabelName, Footer} from './styles';
import Button from '../../components/Button';
import Header from '../../components/Container/Header';
import ProfileItem from '../../components/Container/Profile';
import {useAuth} from '../../contexts/auth';
const Profile: React.FC = () => {
  const {signOut, user} = useAuth();
  return (
    <>
      <Header title="Meu Perfil" />
      <Container>
        <Top>
          <Avatar source={{uri: user?.avatar}} />
          <LabelName>{user?.name}</LabelName>
        </Top>
        <ProfileItem title="Email" subtitle={user?.email} />
        <ProfileItem title="Endereço" subtitle={user?.street} />
        <ProfileItem title="Cidade" subtitle={user?.city} />
        <ProfileItem title="Estado" subtitle={user?.state} />
        <ProfileItem title="Pais" subtitle={user?.country} />
      </Container>
      <Footer>
        <Button onPress={signOut} title="Sair" />
      </Footer>
    </>
  );
};

export default Profile;
