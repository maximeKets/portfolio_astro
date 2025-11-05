import React, { useEffect, useMemo, useRef, useState } from 'react';

interface AdminInboxProps {
  open: boolean;
  onClose: () => void;
}

type Message = {
  id?: string;
  name: string;
  email: string;
  message: string;
  created_at?: string;
  time_on_page?: number | null;
  ip?: string | null;
  user_agent?: string | null;
};

export default function AdminInbox({ open, onClose }: AdminInboxProps) {
  const [token, setToken] = useState('');
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const saved = sessionStorage.getItem('admin_token');
    if (saved) setToken(saved);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    const onClick = (e: MouseEvent) => { if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) onClose(); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onClick); };
  }, [open, onClose]);

  const fetchMessages = async () => {
    setLoading(true); setError(null);
    try {
      const res = await fetch(`/api/admin/messages?limit=100`, { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Failed to load');
      setMessages(data.data || []);
      sessionStorage.setItem('admin_token', token);
    } catch (e: any) {
      setError(e.message || 'Error fetching messages');
      setMessages(null);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[96]">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div ref={dialogRef} className="relative mx-auto mt-10 w-[92%] max-w-3xl rounded-xl border border-white/10 bg-gray-900/95 text-white shadow-2xl p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Admin Inbox</h3>
            <p className="text-sm text-gray-300">View contact submissions stored in Supabase.</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label="Close">✕</button>
        </div>

        <div className="mt-4 flex items-end gap-2">
          <div className="flex-1">
            <label className="text-xs text-gray-400">Access token</label>
            <input value={token} onChange={(e) => setToken(e.target.value)} className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/30" placeholder="Enter ADMIN_DASHBOARD_TOKEN" />
          </div>
          <button onClick={fetchMessages} className="px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-500">Load</button>
        </div>

        {loading && <div className="mt-4 text-sm text-gray-300">Loading…</div>}
        {error && <div className="mt-4 text-sm text-red-300">{error}</div>}

        {messages && (
          <div className="mt-4 max-h-[60vh] overflow-y-auto divide-y divide-white/10">
            {messages.length === 0 && <div className="py-6 text-sm text-gray-400">No messages yet.</div>}
            {messages.map((m, idx) => (
              <div key={(m.id || idx) as any} className="py-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-medium">{m.name} <span className="text-gray-400">• {m.email}</span></div>
                  <div className="text-xs text-gray-400">{m.created_at ? new Date(m.created_at).toLocaleString() : ''}</div>
                </div>
                <div className="mt-2 text-sm whitespace-pre-wrap">{m.message}</div>
                <div className="mt-2 text-xs text-gray-500">{m.ip || ''} {m.user_agent ? `• ${m.user_agent}` : ''} {m.time_on_page ? `• ${m.time_on_page}s` : ''}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
