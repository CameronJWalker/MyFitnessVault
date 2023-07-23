import React, { createContext, useContext, useState } from 'react';
import supabase from '/pages/api/supabaseClient';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Check if the user is authenticated on initial load
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
      setUser(session.user);
    } else if (event === 'SIGNED_OUT') {
      setUser(null);
    }
  });

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