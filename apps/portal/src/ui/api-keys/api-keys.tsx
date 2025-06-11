"use client"
import React, { useState, useEffect } from "react";
import { ClipboardList, FileEdit, ListChecks, Key, Copy, Trash, Plus, X } from "lucide-react";

// Interfaces for type safety
interface APIKey {
  id: string;
  label: string;
  key: string;
  status: "active" | "revoked" | "expired";
  createdAt: string;
  expiresAt: string | null;
  lastUsed: string | null;
}

interface Organization {
  name: string;
}

// Mock organization and API keys data
const org: Organization = {
  name: "Acme Corp",
};

const mockKeys: APIKey[] = [
  {
    id: "key-1",
    label: "Production Key",
    key: "sk_live_1234abcd5678efgh",
    status: "active",
    createdAt: "2025-06-10 10:00",
    expiresAt: "2026-06-10 10:00",
    lastUsed: "2025-06-10 13:41",
  },
  {
    id: "key-2",
    label: "Test Key",
    key: "sk_test_9876zyxw5432mnop",
    status: "revoked",
    createdAt: "2025-06-09 14:30",
    expiresAt: null,
    lastUsed: "2025-06-09 15:00",
  },
  {
    id: "key-3",
    label: "Staging Key",
    key: "sk_stg_4567qrst8901uvwx",
    status: "expired",
    createdAt: "2025-06-08 09:15",
    expiresAt: "2025-06-09 09:15",
    lastUsed: null,
  },
];

// Glass Card Component
interface GlassCardProps {
  children: React.ReactNode;
  title?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, title }) => (
  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-5">
    {title && (
      <div className="flex items-center gap-2 mb-4">
        <Key className="text-blue-400 w-5 h-5" />
        <span className="font-semibold text-lg text-white">{title}</span>
      </div>
    )}
    {children}
  </div>
);

// Status Badge Component
interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const statusConfig: { [key: string]: { bg: string; text: string } } = {
    active: { bg: "bg-green-500/20", text: "text-green-300" },
    revoked: { bg: "bg-red-500/20", text: "text-red-300" },
    expired: { bg: "bg-gray-500/20", text: "text-gray-300" },
  };

  const config = statusConfig[status] || { bg: "bg-gray-500/20", text: "text-gray-300" };

  return (
    <span className={`px-2 py-0.5 text-xs rounded-full ${config.bg} ${config.text}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const ApiKeys: React.FC = () => {
  const [keys, setKeys] = useState<APIKey[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [newKey, setNewKey] = useState<{ label: string; expiresAt: string }>({ label: "", expiresAt: "" });
  const [createdKey, setCreatedKey] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const [showRevokeConfirm, setShowRevokeConfirm] = useState<string | null>(null);

  // Simulate fetching data
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setKeys(mockKeys);
      setLoading(false);
    }, 1000);
  }, []);

  // Toast auto-dismiss
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Handle copy key
  const handleCopyKey = async (key: string, id: string): Promise<void> => {
    await navigator.clipboard.writeText(key);
    setCopySuccess(id);
    setToast({ message: "API key copied!", type: "success" });
    setTimeout(() => setCopySuccess(null), 1200);
  };

  // Handle create key
  const handleCreateKey = (): void => {
    if (!newKey.label) {
      setToast({ message: "Label is required", type: "error" });
      return;
    }
    const newAPIKey: APIKey = {
      id: `key-${Date.now()}`,
      label: newKey.label,
      key: `sk_${newKey.label.toLowerCase().replace(/\s/g, "_")}_${Math.random().toString(36).slice(2, 10)}`,
      status: "active",
      createdAt: new Date().toISOString().slice(0, 16).replace("T", " "),
      expiresAt: newKey.expiresAt || null,
      lastUsed: null,
    };
    setKeys([newAPIKey, ...keys]);
    setCreatedKey(newAPIKey.key);
    setNewKey({ label: "", expiresAt: "" });
    setToast({ message: "API key created successfully!", type: "success" });
  };

  // Handle revoke key
  const handleRevokeKey = (id: string): void => {
    setKeys(keys.map((key) => (key.id === id ? { ...key, status: "revoked" } : key)));
    setShowRevokeConfirm(null);
    setToast({ message: "API key revoked!", type: "success" });
  };

  // Mask API key
  const maskKey = (key: string): string => {
    return key.slice(0, 6) + "••••••••" + key.slice(-4);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-900 via-slate-950 to-slate-800 flex">
      {/* Sidebar */}
      <aside className="w-60 min-h-screen bg-white/10 backdrop-blur-xl border-r border-white/10 shadow-lg flex flex-col py-6 px-4">
        <div className="flex items-center gap-3 mb-10 px-2">
          <ClipboardList className="text-white w-8 h-8" />
          <span className="text-white font-bold text-xl">ConsentLayer</span>
        </div>
        <nav className="flex flex-col gap-2 text-white/80">
          <a href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10 transition">
            <ListChecks className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
          <a href="/sdk-config" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10 transition">
            <FileEdit className="w-5 h-5" />
            <span>SDK Config</span>
          </a>
          <a href="/api-keys" className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/20 text-white">
            <Key className="w-5 h-5" />
            <span>API Keys</span>
          </a>
        </nav>
        <div className="flex-1" />
        <button className="flex items-center gap-2 px-3 py-2 mt-8 text-red-400 hover:bg-red-900/40 rounded-xl transition">
          {/* <LogOut className="w-5 h-5" /> */}
          <span className="font-medium">Logout</span>
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-h-screen px-3 md:px-8 py-8">
        {/* Topbar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow">
            API Keys - <span className="text-blue-400">{org.name}</span>
          </h1>
          {toast && (
            <span
              className={`px-4 py-1 rounded-xl shadow-md transition-all ${
                toast.type === "success" ? "bg-green-600/80 text-white" : "bg-red-600/80 text-white"
              }`}
            >
              {toast.message}
            </span>
          )}
        </div>

        {/* API Keys Table */}
        <GlassCard title="API Keys">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 text-blue-400 bg-blue-400/10 hover:bg-blue-400/30 px-3 py-1 rounded-lg transition"
            >
              <Plus className="w-4 h-4" />
              Create API Key
            </button>
          </div>
          {loading ? (
            <div className="text-white/80 text-center py-4">Loading...</div>
          ) : error ? (
            <div className="text-red-400 text-center py-4">{error}</div>
          ) : keys.length === 0 ? (
            <div className="text-white/80 text-center py-4">No API keys found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-white/80">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-2 px-2 text-left font-semibold">Label</th>
                    <th className="py-2 px-2 text-left font-semibold">Key</th>
                    <th className="py-2 px-2 text-left font-semibold">Status</th>
                    <th className="py-2 px-2 text-left font-semibold">Created At</th>
                    <th className="py-2 px-2 text-left font-semibold">Expires At</th>
                    <th className="py-2 px-2 text-left font-semibold">Last Used</th>
                    <th className="py-2 px-2 text-left font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {keys.map((key) => (
                    <tr
                      key={key.id}
                      className={`hover:bg-white/10 transition ${
                        key.status !== "active" ? "opacity-50" : ""
                      }`}
                    >
                      <td className="py-2 px-2">{key.label}</td>
                      <td className="py-2 px-2 font-mono">{maskKey(key.key)}</td>
                      <td className="py-2 px-2">
                        <StatusBadge status={key.status} />
                      </td>
                      <td className="py-2 px-2">{key.createdAt}</td>
                      <td className="py-2 px-2">{key.expiresAt || "Never"}</td>
                      <td className="py-2 px-2">{key.lastUsed || "Never"}</td>
                      <td className="py-2 px-2 flex gap-2">
                        {key.status === "active" && (
                          <>
                            <button
                              onClick={() => handleCopyKey(key.key, key.id)}
                              className="text-blue-400 hover:text-blue-300"
                              title={copySuccess === key.id ? "Copied!" : "Copy Key"}
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setShowRevokeConfirm(key.id)}
                              className="text-red-400 hover:text-red-300"
                              title="Revoke Key"
                            >
                              <Trash className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </GlassCard>

        {/* Create API Key Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-white">Create New API Key</h2>
                <button onClick={() => { setShowCreateModal(false); setCreatedKey(null); }} className="text-white/80 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              {createdKey ? (
                <div className="space-y-4">
                  <p className="text-red-400 text-sm">
                    This is the only time the full API key will be shown. Please copy and store it securely.
                  </p>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={createdKey}
                      readOnly
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white font-mono"
                    />
                    <button
                      onClick={() => handleCopyKey(createdKey, "new-key")}
                      className="text-blue-400 bg-blue-400/10 hover:bg-blue-400/30 px-3 py-1 rounded-lg transition"
                    >
                      {copySuccess === "new-key" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <button
                    onClick={() => { setShowCreateModal(false); setCreatedKey(null); }}
                    className="w-full bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500/30 transition"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1">Label</label>
                    <input
                      type="text"
                      value={newKey.label}
                      onChange={(e) => setNewKey({ ...newKey, label: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white"
                      placeholder="e.g., Production Key"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1">Expires At (Optional)</label>
                    <input
                      type="datetime-local"
                      value={newKey.expiresAt}
                      onChange={(e) => setNewKey({ ...newKey, expiresAt: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={handleCreateKey}
                      className="flex-1 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500/30 transition"
                    >
                      Create Key
                    </button>
                    <button
                      onClick={() => setShowCreateModal(false)}
                      className="flex-1 bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Revoke Confirmation Modal */}
        {showRevokeConfirm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-full max-w-md">
              <h2 className="text-xl font-semibold text-white mb-4">Confirm Revoke</h2>
              <p className="text-white/80 mb-4">Are you sure you want to revoke this API key? This action cannot be undone.</p>
              <div className="flex gap-4">
                <button
                  onClick={() => handleRevokeKey(showRevokeConfirm)}
                  className="flex-1 bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition"
                >
                  Revoke
                </button>
                <button
                  onClick={() => setShowRevokeConfirm(null)}
                  className="flex-1 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500/30 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ApiKeys;