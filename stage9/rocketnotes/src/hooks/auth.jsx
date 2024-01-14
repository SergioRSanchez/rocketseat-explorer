import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', {
        email,
        password
      });

      const { user, token } = response.data;

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      localStorage.setItem("@rocketnotes:token", token);

      // api.defaults.headers.authorization = `Bearer ${token}`;
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível conectar ao servidor.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketnotes:user");
    localStorage.removeItem("@rocketnotes:token");

    setData({});
  }

  async function updateProfile({ user }) {
    try {
      const { password, old_password, ...userData } = user;

      await api.put("/users", user);
      localStorage.setItem("@rocketnotes:user", JSON.stringify(userData));
      setData({ user: userData, token: data.token });
      alert("Perfil atualizado!")

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil.")
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketnotes:user");
    const token = localStorage.getItem("@rocketnotes:token");

    if (token && user) {
      // api.defaults.headers.authorization = `Bearer ${token}`;
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user: JSON.parse(user), token });
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user: data.user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}


export { AuthProvider, useAuth };