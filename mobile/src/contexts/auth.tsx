import firebase from "@react-native-firebase/app";
import "@react-native-firebase/auth";
import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { Alert } from "react-native";
import * as auth from "../services/auth";

interface User {
  name: string;
  email: string;
  avatar: string;
  street: string;
  city: string;
  state: string;
  country: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => void;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  console.log(firebase.auth().currentUser);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem(
        "@__CC__littlemarket:user"
      );
      const storageToken = await AsyncStorage.getItem(
        "@__CC__littlemarket:token"
      );
      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  async function signIn(email: string, password: string) {
    if (!email && !!password) {
      Alert.alert("Erro", "Favor preencher todos os dados");
      return;
    }
    if (!email) {
      Alert.alert("Erro", "Favor preencher o e-mail");
      return;
    }
    if (!password) {
      Alert.alert("Erro", "Favor preencher a senha");
      return;
    }

    if (email !== "jose@gmail.com") {
      Alert.alert("Erro", "E-mail não encontrado");
      return;
    }

    if (password !== "123456") {
      Alert.alert("Erro", "E-mail não encontrado");
      return;
    }

    const response = await auth.signIn();
    setUser(response.user);
    await AsyncStorage.setItem(
      "@__CC__littlemarket:user",
      JSON.stringify(response.user)
    );
    await AsyncStorage.setItem("@__CC__littlemarket:token", response.token);
  }

  async function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
