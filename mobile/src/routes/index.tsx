import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import {useAuth} from '../contexts/auth';

const Routes: React.FC = () => {
  const {signed, loading} = useAuth();
  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
