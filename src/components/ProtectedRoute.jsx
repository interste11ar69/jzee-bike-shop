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

  if (loading)
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading Access...
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
