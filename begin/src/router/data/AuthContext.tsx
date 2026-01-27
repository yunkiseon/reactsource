import { createContext, useMemo, useState, type ReactNode } from 'react';

// id, password, isLoggedIn, login(), logout()
type AuthContextValue = {
  id: string;
  password: string;
  isLoggedIn: boolean;
  login: (id: string, password: string) => void;
  logout: () => void;
};

export type LoginState = {
  id: string;
  password: string;
};

export const AuthContext = createContext<AuthContextValue | null>(null);

function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<LoginState>({
    id: '',
    password: '',
  });

  const login = (id: string, password: string) => {
    setAuth({ id, password });
  };

  const logout = () => {
    setAuth({
      id: '',
      password: '',
    });
  };

  // useMeme(()=>({함수}),[조건]) : 첫번째 인자의 함수는 기본적으로 컴포넌트가 리로드 될 때마다 새로운 함수로 인식
  // [] 값이 변경될 떄만 새로운 함수로 인식
  const value = useMemo(
    () => ({
      id: auth.id,
      password: auth.password,
      isLoggedIn: auth.id !== '',
      login,
      logout,
    }),
    [auth],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
