"use client"
import React, { useState, useEffect } from "react";
import { ClipboardList, FileEdit, ListChecks, Copy, Save, Power, PowerOff } from "lucide-react";

// Interfaces for type safety
interface SDKConfig {
  id: string;
  env: string;
  version: string;
  tracking: boolean;
  domains: string[];
  categories: string[];
  options: { [key: string]: boolean };
  branding: {
    primaryColor: string;
    logoUrl: string;
  };
  isActive: boolean;
  createdAt: string;
}

interface Organization {
  name: string;
  slug: string;
  apiKey: string;
}

// Mock organization and SDK config data
const org: Organization = {
  name: "Acme Corp",
  slug: "acme-corp",
  apiKey: "sk_live_1234abcd5678efgh",
};

const initialConfig: SDKConfig = {
  id: "config-1",
  env: "production",
  version: "1.2.3",
  tracking: true,
  domains: ["acme.com", "shop.acme.com"],
  categories: ["Analytics", "Marketing", "Essential"],
  options: {
    cookies: true,
    localStorage: true,
    sessionStorage: false,
  },
  branding: {
    primaryColor: "#3B82F6",
    logoUrl: "https://acme.com/logo.png",
  },
  isActive: true,
  createdAt: "2025-06-10 10:00",
};

const previousConfigs: SDKConfig[] = [
  {
    ...initialConfig,
    id: "config-2",
    version: "1.2.2",
    isActive: false,
    createdAt: "2025-06-09 14:30",
  },
  {
    ...initialConfig,
    id: "config-3",
    version: "1.2.1",
    isActive: false,
    createdAt: "2025-06-08 09:15",
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
        <FileEdit className="text-blue-400 w-5 h-5" />
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
    Active: { bg: "bg-green-500/20", text: "text-green-300" },
    Inactive: { bg: "bg-red-500/20", text: "text-red-300" },
  };

  const config = statusConfig[status] || { bg: "bg-gray-500/20", text: "text-gray-300" };

  return (
    <span className={`px-2 py-0.5 text-xs rounded-full ${config.bg} ${config.text}`}>
      {status}
    </span>
  );
};

const Sdkconfig: React.FC = () => {
  const [config, setConfig] = useState<SDKConfig>(initialConfig);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  // Toast auto-dismiss
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!config.env) newErrors.env = "Environment is required";
    if (!config.version) newErrors.version = "Version is required";
    if (config.domains.length === 0) newErrors.domains = "At least one domain is required";
    if (config.categories.length === 0) newErrors.categories = "At least one category is required";
    if (!config.branding.primaryColor.match(/^#[0-9A-Fa-f]{6}$/)) {
      newErrors.primaryColor = "Invalid hex color";
    }
    if (!config.branding.logoUrl) newErrors.logoUrl = "Logo URL is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSave = (): void => {
    if (validateForm()) {
      setToast({ message: "Configuration saved successfully!", type: "success" });
      // Simulate API call to save config
      console.log("Saving config:", config);
    } else {
      setToast({ message: "Please fix the form errors", type: "error" });
    }
  };

  // Handle activate/deactivate
  const handleToggleActive = (configId: string): void => {
    if (configId === config.id) {
      setConfig({ ...config, isActive: !config.isActive });
      setToast({
        message: `Configuration ${config.isActive ? "deactivated" : "activated"}!`,
        type: "success",
      });
    } else {
      const selectedConfig = previousConfigs.find((c) => c.id === configId);
      if (selectedConfig) {
        setConfig({ ...selectedConfig, isActive: true });
        setToast({ message: "Previous configuration restored and activated!", type: "success" });
      }
    }
  };

  // Handle copy SDK snippet
  const handleCopySnippet = async (): Promise<void> => {
    const snippet = `<script src="https://cdn.consentlayer.com/sdk/${org.slug}/${config.version}.js" data-api-key="${org.apiKey}"></script>`;
    await navigator.clipboard.writeText(snippet);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 1200);
  };

  // Handle input changes
  const handleInputChange = (field: string, value: any): void => {
    if (field.startsWith("branding.")) {
      const key = field.split(".")[1];
      setConfig({
        ...config,
        branding: { ...config.branding, [key]: value },
      });
    } else if (field === "domains" || field === "categories") {
      setConfig({ ...config, [field]: value.split(",").map((v: string) => v.trim()) });
    } else if (field.startsWith("options.")) {
      const key = field.split(".")[1];
      setConfig({
        ...config,
        options: { ...config.options, [key]: value },
      });
    } else {
      setConfig({ ...config, [field]: value });
    }
    setErrors({ ...errors, [field]: "" });
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
          <a href="/sdk-config" className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/20 text-white">
            <FileEdit className="w-5 h-5" />
            <span>SDK Config</span>
          </a>
          <a href="/consent-logs" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10 transition">
            <ClipboardList className="w-5 h-5" />
            <span>Consent Logs</span>
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
            SDK Configuration - <span className="text-blue-400">{org.name}</span>
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

        {/* Active Config Summary */}
        <GlassCard title="Active SDK Configuration">
          <div className="text-white/90 text-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Status:</span>
              <StatusBadge status={config.isActive ? "Active" : "Inactive"} />
            </div>
            <div><span className="font-semibold">Environment:</span> {config.env}</div>
            <div><span className="font-semibold">Version:</span> {config.version}</div>
            <div><span className="font-semibold">Tracking:</span> {config.tracking ? "Enabled" : "Disabled"}</div>
            <div><span className="font-semibold">Domains:</span> {config.domains.join(", ")}</div>
            <div><span className="font-semibold">Categories:</span> {config.categories.join(", ")}</div>
            <div><span className="font-semibold">Options:</span> {Object.entries(config.options)
              .map(([key, value]) => `${key}: ${value ? "On" : "Off"}`)
              .join(", ")}</div>
            <div><span className="font-semibold">Primary Color:</span> {config.branding.primaryColor}</div>
            <div><span className="font-semibold">Logo URL:</span> {config.branding.logoUrl}</div>
          </div>
        </GlassCard>

        {/* Edit Config Form */}
        <GlassCard title="Edit SDK Configuration">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">Environment</label>
              <select
                value={config.env}
                onChange={(e) => handleInputChange("env", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white"
              >
                <option value="production">Production</option>
                <option value="staging">Staging</option>
                <option value="development">Development</option>
              </select>
              {errors.env && <p className="text-red-400 text-xs mt-1">{errors.env}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">Version</label>
              <input
                type="text"
                value={config.version}
                onChange={(e) => handleInputChange("version", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white"
              />
              {errors.version && <p className="text-red-400 text-xs mt-1">{errors.version}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">Domains (comma-separated)</label>
              <input
                type="text"
                value={config.domains.join(", ")}
                onChange={(e) => handleInputChange("domains", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white"
              />
              {errors.domains && <p className="text-red-400 text-xs mt-1">{errors.domains}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">Categories (comma-separated)</label>
              <input
                type="text"
                value={config.categories.join(", ")}
                onChange={(e) => handleInputChange("categories", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white"
              />
              {errors.categories && <p className="text-red-400 text-xs mt-1">{errors.categories}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">Primary Color (Hex)</label>
              <input
                type="text"
                value={config.branding.primaryColor}
                onChange={(e) => handleInputChange("branding.primaryColor", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white"
              />
              {errors.primaryColor && <p className="text-red-400 text-xs mt-1">{errors.primaryColor}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">Logo URL</label>
              <input
                type="text"
                value={config.branding.logoUrl}
                onChange={(e) => handleInputChange("branding.logoUrl", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white"
              />
              {errors.logoUrl && <p className="text-red-400 text-xs mt-1">{errors.logoUrl}</p>}
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-white/80 mb-1">Options</label>
              <div className="flex gap-4">
                {Object.keys(config.options).map((key) => (
                  <label key={key} className="flex items-center gap-2 text-white/80">
                    <input
                      type="checkbox"
                      checked={config.options[key]}
                      onChange={(e) => handleInputChange(`options.${key}`, e.target.checked)}
                    />
                    {key}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500/30 transition"
            >
              <Save className="w-5 h-5" />
              Save
            </button>
            <button
              onClick={() => handleToggleActive(config.id)}
              className={`flex items-center gap-2 ${
                config.isActive ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"
              } px-4 py-2 rounded-lg hover:bg-opacity-30 transition`}
            >
              {config.isActive ? <PowerOff className="w-5 h-5" /> : <Power className="w-5 h-5" />}
              {config.isActive ? "Deactivate" : "Activate"}
            </button>
          </div>
        </GlassCard>

        {/* SDK Install Snippet */}
        <GlassCard title="SDK Install Snippet">
          <div className="relative">
            <pre className="bg-black/50 p-4 rounded-lg text-white/80 font-mono text-sm">
              {`<script src="https://cdn.consentlayer.com/sdk/${org.slug}/${config.version}.js" data-api-key="${org.apiKey}"></script>`}
            </pre>
            <button
              onClick={handleCopySnippet}
              className="absolute top-2 right-2 flex items-center gap-2 text-blue-400 bg-blue-400/10 hover:bg-blue-400/30 px-3 py-1 rounded-lg transition"
            >
              <Copy className="w-4 h-4" />
              {copySuccess ? "Copied!" : "Copy"}
            </button>
          </div>
        </GlassCard>

        {/* Previous Configurations */}
        <GlassCard title="Previous Configurations">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-white/80">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-2 px-2 text-left font-semibold">Version</th>
                  <th className="py-2 px-2 text-left font-semibold">Created At</th>
                  <th className="py-2 px-2 text-left font-semibold">Status</th>
                  <th className="py-2 px-2 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {previousConfigs.map((prevConfig) => (
                  <tr key={prevConfig.id} className="hover:bg-white/10 transition">
                    <td className="py-2 px-2">{prevConfig.version}</td>
                    <td className="py-2 px-2">{prevConfig.createdAt}</td>
                    <td className="py-2 px-2">
                      <StatusBadge status={prevConfig.isActive ? "Active" : "Inactive"} />
                    </td>
                    <td className="py-2 px-2">
                      <button
                        onClick={() => handleToggleActive(prevConfig.id)}
                        className="text-blue-400 bg-blue-400/10 hover:bg-blue-400/30 px-3 py-1 rounded-lg transition"
                        disabled={prevConfig.isActive}
                      >
                        Restore
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </main>
    </div>
  );
};

export default Sdkconfig;