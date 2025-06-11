"use client"
import React, { useState } from "react";
import { Eye, EyeOff, Copy, LogOut, Users, Key, Settings, ClipboardList, FileEdit, ListChecks, Plus } from "lucide-react";

// Define interfaces for type safety
interface SDKConfig {
  env: string;
  version: string;
  tracking: boolean;
  domains: string[];
}

interface Admin {
  email: string;
  role: "Owner" | "Admin";
}

interface ConsentEvent {
  ts: string;
  user: string;
  type: "Accepted" | "Revoked" | "Rejected";
}

interface Organization {
  name: string;
  slug: string;
  apiKey: string;
  apiKeyStatus: string;
  sdkConfig: SDKConfig;
  admins: Admin[];
  consentEvents: ConsentEvent[];
}

// Organization data
const org: Organization = {
  name: "Acme Corp",
  slug: "acme-corp",
  apiKey: "sk_live_1234abcd5678efgh",
  apiKeyStatus: "active",
  sdkConfig: {
    env: "production",
    version: "1.2.3",
    tracking: true,
    domains: ["acme.com", "shop.acme.com"],
  },
  admins: [
    { email: "owner@acme.com", role: "Owner" },
    { email: "admin@acme.com", role: "Admin" },
  ],
  consentEvents: [
    { ts: "2025-06-10 13:41", user: "user1@acme.com", type: "Accepted" },
    { ts: "2025-06-10 13:32", user: "user2@acme.com", type: "Revoked" },
    { ts: "2025-06-10 13:22", user: "user3@acme.com", type: "Accepted" },
    { ts: "2025-06-10 12:57", user: "user4@acme.com", type: "Rejected" },
    { ts: "2025-06-10 12:45", user: "user5@acme.com", type: "Accepted" },
  ],
};

// Utility function to mask API key
const maskKey = (key: string): string => {
  return key.slice(0, 6) + "••••••••" + key.slice(-4);
};

// Glass Card Component
interface GlassCardProps {
  children: React.ReactNode;
}

const GlassCard: React.FC<GlassCardProps> = ({ children }) => (
  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-5">
    {children}
  </div>
);

// Navigation Item Component
interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false }) => (
  <a 
    className={`flex items-center gap-3 px-3 py-2 rounded-xl transition ${
      active 
        ? 'bg-white/20 text-white'
        : 'hover:bg-white/10'
    }`}
  >
    {icon}
    <span>{label}</span>
  </a>
);

// Status Badge Component
interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const statusConfig: { [key: string]: { bg: string; text: string } } = {
    active: { bg: "bg-green-500/20", text: "text-green-300" },
    revoked: { bg: "bg-red-500/20", text: "text-red-300" },
    Accepted: { bg: "bg-green-400/20", text: "text-green-200" },
    Revoked: { bg: "bg-yellow-400/20", text: "text-yellow-200" },
    Rejected: { bg: "bg-red-400/20", text: "text-red-200" },
    Owner: { bg: "bg-purple-400/20", text: "text-purple-200" },
    Admin: { bg: "bg-blue-400/20", text: "text-blue-200" },
  };
  
  const config = statusConfig[status] || { bg: "bg-gray-500/20", text: "text-gray-300" };
  
  return (
    <span className={`px-2 py-0.5 text-xs rounded-full ${config.bg} ${config.text}`}>
      {status}
    </span>
  );
};

const Dashboard: React.FC = () => {
  const [showApiKey, setShowApiKey] = useState<boolean>(false);
  const [copySuccess, setCopySuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [inviteStatus, setInviteStatus] = useState<"success" | null>(null);

  const handleCopyKey = async (): Promise<void> => {
    await navigator.clipboard.writeText(org.apiKey);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 1200);
  };

  const handleInvite = (): void => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setInviteStatus("success");
      setTimeout(() => setInviteStatus(null), 1500);
    }, 900);
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
          <NavItem icon={<ListChecks className="w-5 h-5" />} label="Dashboard" active />
          <NavItem icon={<FileEdit className="w-5 h-5" />} label="SDK Config" />
          <NavItem icon={<ClipboardList className="w-5 h-5" />} label="Consent Logs" />
          <NavItem icon={<Key className="w-5 h-5" />} label="API Keys" />
          <NavItem icon={<Users className="w-5 h-5" />} label="Admin Users" />
          <NavItem icon={<Settings className="w-5 h-5" />} label="Settings" />
        </nav>
        <div className="flex-1" />
        <button className="flex items-center gap-2 px-3 py-2 mt-8 text-red-400 hover:bg-red-900/40 rounded-xl transition">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </aside>
      
      {/* Main */}
      <main className="flex-1 flex flex-col min-h-screen px-3 md:px-8 py-8">
        {/* Topbar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow">
            Welcome, <span className="text-blue-400">{org.name}</span>!
          </h1>
          
          {/* Notifications */}
          <div className="flex gap-2">
            {copySuccess && (
              <span className="bg-green-600/80 text-white px-4 py-1 rounded-xl shadow-md transition-all">
                API key copied!
              </span>
            )}
            {inviteStatus === "success" && (
              <span className="bg-green-600/80 text-white px-4 py-1 rounded-xl shadow-md transition-all">
                Admin invited!
              </span>
            )}
          </div>
        </div>
        
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-7">
          {/* Org Info */}
          <GlassCard>
            <div className="flex items-center gap-2 mb-2">
              <ClipboardList className="text-blue-400 w-5 h-5" />
              <span className="font-semibold text-lg text-white">Organization Info</span>
            </div>
            <div className="text-white/90 text-sm space-y-1">
              <div><span className="font-semibold">Name:</span> {org.name}</div>
              <div><span className="font-semibold">Slug:</span> {org.slug}</div>
              <div className="flex items-center">
                <span className="font-semibold">API Key Status:</span>
                <span className="ml-2">
                  <StatusBadge status={org.apiKeyStatus} />
                </span>
              </div>
            </div>
          </GlassCard>
          
          {/* SDK Config */}
          <GlassCard>
            <div className="flex items-center gap-2 mb-2">
              <Settings className="text-blue-400 w-5 h-5" />
              <span className="font-semibold text-lg text-white">SDK Config</span>
            </div>
            <div className="text-white/90 text-sm space-y-1">
              <div><span className="font-semibold">Env:</span> {org.sdkConfig.env}</div>
              <div><span className="font-semibold">Version:</span> {org.sdkConfig.version}</div>
              <div><span className="font-semibold">Tracking:</span> {org.sdkConfig.tracking ? "On" : "Off"}</div>
              <div><span className="font-semibold">Domains:</span> {org.sdkConfig.domains.join(", ")}</div>
            </div>
            <button className="mt-4 flex items-center gap-2 text-xs text-blue-400 bg-blue-400/10 hover:bg-blue-400/30 px-3 py-1 rounded-lg font-semibold transition">
              <FileEdit className="w-4 h-4" />
              Edit Config
            </button>
          </GlassCard>
          
          {/* API Key Panel */}
          <GlassCard>
            <div className="flex items-center gap-2 mb-2">
              <Key className="text-blue-400 w-5 h-5" />
              <span className="font-semibold text-lg text-white">API Key</span>
            </div>
            <div className="flex items-center gap-2 text-lg mb-2">
              <input
                className="bg-transparent w-full text-white font-mono tracking-widest"
                type={showApiKey ? "text" : "password"}
                readOnly
                value={showApiKey ? org.apiKey : maskKey(org.apiKey)}
                style={{ letterSpacing: 2 }}
              />
              <button
                onClick={() => setShowApiKey((v) => !v)}
                className="hover:text-blue-400"
                type="button"
              >
                {showApiKey ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
              <button
                onClick={handleCopyKey}
                className="hover:text-blue-400"
                type="button"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
            <div>
              <StatusBadge status={org.apiKeyStatus} />
            </div>
          </GlassCard>
        </div>
        
        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {/* Recent Consent Events */}
          <GlassCard>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <ClipboardList className="text-blue-400 w-5 h-5" />
                <span className="font-semibold text-lg text-white">Recent Consent Events</span>
              </div>
              <button className="flex items-center gap-2 text-xs text-blue-400 bg-blue-400/10 hover:bg-blue-400/30 px-3 py-1 rounded-lg font-semibold transition">
                <ClipboardList className="w-4 h-4" />
                View All Logs
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-white/80">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-2 px-2 text-left font-semibold">Timestamp</th>
                    <th className="py-2 px-2 text-left font-semibold">User</th>
                    <th className="py-2 px-2 text-left font-semibold">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {org.consentEvents.map((ev, i) => (
                    <tr key={i} className="hover:bg-white/10 transition">
                      <td className="py-2 px-2">{ev.ts}</td>
                      <td className="py-2 px-2">{ev.user}</td>
                      <td className="py-2 px-2">
                        <StatusBadge status={ev.type} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
          
          {/* Admin Users */}
          <GlassCard>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <Users className="text-blue-400 w-5 h-5" />
                <span className="font-semibold text-lg text-white">Admin Users</span>
              </div>
              <button 
                onClick={handleInvite}
                disabled={loading}
                className="flex items-center gap-2 text-xs text-green-400 bg-green-400/10 hover:bg-green-400/30 px-3 py-1 rounded-lg font-semibold transition disabled:opacity-50"
              >
                {loading ? (
                  "Inviting..."
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    Invite Admin
                  </>
                )}
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-white/80">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-2 px-2 text-left font-semibold">Email</th>
                    <th className="py-2 px-2 text-left font-semibold">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {org.admins.map((admin, i) => (
                    <tr key={i} className="hover:bg-white/10 transition">
                      <td className="py-2 px-2">{admin.email}</td>
                      <td className="py-2 px-2">
                        <StatusBadge status={admin.role} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>
        
        {/* Quick Actions */}
        <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:bg-white/10 transition">
            <FileEdit className="text-blue-400 w-8 h-8" />
            <span className="text-white font-medium">Edit SDK Config</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:bg-white/10 transition">
            <ClipboardList className="text-blue-400 w-8 h-8" />
            <span className="text-white font-medium">View Consent Logs</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:bg-white/10 transition">
            <Key className="text-blue-400 w-8 h-8" />
            <span className="text-white font-medium">Manage API Keys</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;