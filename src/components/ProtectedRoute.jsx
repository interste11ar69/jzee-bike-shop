import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../api/supabaseClient";

const ProtectedRoute = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // 2. Listen for changes (Logout/Login)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // 👇 PROFESSIONAL LOADING STATE
  if (loading)
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-4">
        {/* Pulsing Logo */}
        <div className="relative">
          <div className="absolute inset-0 bg-jzee-green blur-xl opacity-20 animate-pulse"></div>
          <img
            src="/logo.png"
            alt="Loading..."
            className="w-16 h-16 md:w-20 md:h-20 relative z-10 grayscale opacity-80 animate-pulse"
          />
        </div>
        <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-bold animate-pulse">
          Verifying Access...
        </p>
      </div>
    );

  // If no user, kick them to Login
  if (!session) {
    return <Navigate to="/login" replace />;
  }

  // If user exists, show the Admin Page
  return children;
};

export default ProtectedRoute;
