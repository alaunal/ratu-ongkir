import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

import Cookies from "js-cookie";

export type Tuser = {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
  email_verified: boolean;
};

export interface AuthContextType {
  user?: Tuser;
  signin: (user: Tuser, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

const COOKIE_NAME = "user_profile";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Tuser | undefined>();

  // Initialize user state from cookies
  useEffect(() => {
    const storedUser = Cookies.get(COOKIE_NAME);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signin = (payload: Tuser, callback: VoidFunction) => {
    setUser(payload);
    Cookies.set(COOKIE_NAME, JSON.stringify(payload), { expires: 7, secure: true });
    callback();
  };

  const signout = (callback: VoidFunction) => {
    setUser(undefined);
    Cookies.remove(COOKIE_NAME);
    callback();
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
