import { User } from "@supabase/supabase-js";
import {
  createContext,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { supabase } from "services/supabase";

interface AuthContextInterface {
  user: User | null;
  setUser?: any;
}

const AuthContext = createContext<AuthContextInterface | null>(null);

export function useAuthContext() {
  return useContext(AuthContext);
}

export default function AuthContextProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        setUser(user);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
