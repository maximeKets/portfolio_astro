import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  time_on_page?: number | null;
  ip?: string | null;
  user_agent?: string | null;
};

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loginError, setLoginError] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = sessionStorage.getItem('admin_session_token');
    if (savedToken) {
      setToken(savedToken);
      setIsLoggedIn(true);
      fetchMessages(savedToken);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }

      const sessionToken = data.token;
      setToken(sessionToken);
      sessionStorage.setItem('admin_session_token', sessionToken);
      setIsLoggedIn(true);
      fetchMessages(sessionToken);
    } catch (err: any) {
      setLoginError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async (authToken: string) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/admin/messages?limit=100', {
        headers: { Authorization: `Bearer ${authToken}` },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to fetch messages');
      }

      setMessages(data.data || []);
    } catch (err: any) {
      setError(err.message || 'Error fetching messages');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_session_token');
    setIsLoggedIn(false);
    setToken(null);
    setMessages([]);
    setUsername('');
    setPassword('');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-gray-900 rounded-xl border border-white/10 p-8">
          <h1 className="text-2xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400 text-sm mb-6">Sign in to view contact messages</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="admin"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="••••••••"
                required
              />
            </div>

            {loginError && (
              <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="border-b border-white/10 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <p className="text-sm text-gray-400">{messages.length} messages</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-sm font-medium transition"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-4">
        {loading && <div className="text-center py-8 text-gray-400">Loading messages...</div>}
        {error && (
          <div className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
            {error}
          </div>
        )}

        {!loading && messages.length === 0 && (
          <div className="text-center py-12 text-gray-400">No messages yet.</div>
        )}

        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="bg-gray-900 rounded-xl border border-white/10 p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{msg.name}</h3>
                  <a href={`mailto:${msg.email}`} className="text-blue-400 hover:underline text-sm">
                    {msg.email}
                  </a>
                </div>
                <div className="text-xs text-gray-500">
                  {new Date(msg.created_at).toLocaleString()}
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 mb-3">
                <p className="whitespace-pre-wrap">{msg.message}</p>
              </div>

              <div className="flex items-center gap-4 text-xs text-gray-500">
                {msg.time_on_page && <span>Time on page: {msg.time_on_page}s</span>}
                {msg.ip && <span>IP: {msg.ip}</span>}
                {msg.user_agent && <span className="truncate max-w-md">UA: {msg.user_agent}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
