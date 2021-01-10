import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface SingInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: object;
}

interface AuthContextData {
  user: object;
  singIn(credentials: SingInCredentials): Promise<void>;
  singOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@RiInfo:token');
    const user = localStorage.getItem('@RiInfo:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const singIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@RiInfo:token', token);
    localStorage.setItem('@RiInfo:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const singOut = useCallback(() => {
    localStorage.removeItem('@RiInfo:token');
    localStorage.removeItem('@RiInfo:user');
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, singIn, singOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
