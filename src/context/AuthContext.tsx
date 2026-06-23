'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  name: string;
  email: string;
  plan: 'free' | 'pro';
  avatarUrl?: string;
  memberSince: string; // e.g. "January 2025"
  stats: {
    testsTaken: number;
    avgScore: number;
    streak: number;
    topicsComplete: number;
    bestScore: number;
  };
}

interface AuthCtx {
  user: User | null;
  signIn: (email: string, name: string) => void;
  signOut: () => void;
  updateUser: (patch: Partial<User>) => void;
}

const AuthContext = createContext<AuthCtx>({
  user: null,
  signIn: () => {},
  signOut: () => {},
  updateUser: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Rehydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('conquernda_user');
      if (stored) setUser(JSON.parse(stored));
    } catch {}
  }, []);

  const signIn = (email: string, name: string) => {
    const u: User = {
      name,
      email,
      plan: 'free',
      memberSince: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      stats: { testsTaken: 3, avgScore: 412, streak: 7, topicsComplete: 12, bestScore: 524 },
    };
    setUser(u);
    localStorage.setItem('conquernda_user', JSON.stringify(u));
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('conquernda_user');
  };

  const updateUser = (patch: Partial<User>) => {
    setUser(prev => {
      if (!prev) return prev;
      const updated = { ...prev, ...patch };
      localStorage.setItem('conquernda_user', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

/** Returns up to 2-char initials from a name */
export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}
