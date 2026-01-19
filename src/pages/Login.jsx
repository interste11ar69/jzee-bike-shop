import React, { useState } from "react";
import { supabase } from "../api/supabaseClient";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Access Denied: " + error.message);
      setLoading(false);
    } else {
      // Success! Send them to the Admin panel
      navigate("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-8 rounded-sm shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter">
            Jzee <span className="text-jzee-green">System</span>
          </h1>
          <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mt-2">
            Authorized Personnel Only
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase mb-2">
              ID
            </label>
            <input
              type="email"
              required
              className="w-full bg-black border border-zinc-700 p-4 text-white focus:border-jzee-green outline-none"
              placeholder="admin@jzeebike.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase mb-2">
              Passcode
            </label>
            <input
              type="password"
              required
              className="w-full bg-black border border-zinc-700 p-4 text-white focus:border-jzee-green outline-none"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black font-black uppercase py-4 tracking-widest hover:bg-jzee-green transition-colors"
          >
            {loading ? "Verifying..." : "Enter System"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
