import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => {
    const savedAuth = localStorage.getItem("pettin_auth");

    return savedAuth ? JSON.parse(savedAuth) : null;
  });

  // guardar auth
  useEffect(() => {
    if (auth) {
      localStorage.setItem("pettin_auth", JSON.stringify(auth));
    } else {
      localStorage.removeItem("pettin_auth");
    }
  }, [auth]);

  // login
  const login = (data) => {
    setAuth(data);
  };

  // logout
  const logout = () => {
    setAuth(null);
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
