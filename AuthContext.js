import React, { createContext, useContext, useEffect, useState } from 'react';
import supabase from '/pages/api/supabaseClient';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const handleAuthChange = (event, session) => {
    if (event === 'SIGNED_IN') {
      setUser(session.user);
      localStorage.setItem('user', JSON.stringify(session.user));
    } else if (event === 'SIGNED_OUT') {
      setUser(null);
      localStorage.removeItem('user');
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    supabase.auth.onAuthStateChange(handleAuthChange);

    return () => {

    };
  }, []);

  const login = async (email, password) => {
    const { error } = await supabase.auth.signIn({ email, password });
    if (error) {
      console.error('Error logging in:', error);
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}