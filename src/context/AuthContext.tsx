'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { createClient } from '@/lib/supabase/client';

export interface User {
  id: string;
  name: string;
  email: string;
  plan: 'free' | 'pro';
  avatarUrl?: string;
  memberSince: string;
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
  loading: boolean;
  signIn: (email: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  updateUser: (patch: Partial<User>) => void;
}

const AuthContext = createContext<AuthCtx>({
  user: null,
  loading: true,
  signIn: async () => ({ error: null }),
  signOut: async () => {},
  updateUser: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        mapSupabaseUserToLocal(session.user);
      } else {
        setLoading(false);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          mapSupabaseUserToLocal(session.user);
        } else {
          setUser(null);
          setLoading(false);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const mapSupabaseUserToLocal = (supabaseUser: any) => {
    // Merge database state later; using default mock stats for now
    const u: User = {
      id: supabaseUser.id,
      name: supabaseUser.user_metadata?.full_name || supabaseUser.email?.split('@')[0] || 'User',
      email: supabaseUser.email || '',
      plan: 'free',
      memberSince: new Date(supabaseUser.created_at || Date.now()).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      avatarUrl: supabaseUser.user_metadata?.avatar_url,
      stats: { testsTaken: 3, avgScore: 412, streak: 7, topicsComplete: 12, bestScore: 524 },
    };
    setUser(u);
    setLoading(false);
  };

  const signIn = async (email: string) => {
    // Using magic link login
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.origin,
      },
    });
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const updateUser = (patch: Partial<User>) => {
    setUser(prev => {
      if (!prev) return prev;
      return { ...prev, ...patch };
    });
    // TODO: persist patch to Supabase profiles table
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut, updateUser }}>
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
