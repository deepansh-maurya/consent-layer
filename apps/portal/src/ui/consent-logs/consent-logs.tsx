"use client"
import React, { useState, useEffect, useMemo } from "react";
import { ClipboardList, ListChecks, FileEdit, Download, Search, ChevronLeft, ChevronRight } from "lucide-react";

// Interfaces for type safety
interface ConsentEvent {
  id: string;
  timestamp: string;
  userId: string;
  eventType: "Accept" | "Reject" | "Update";
  categories: string[];
  userAgent: string;
  ipAddress: string;
}

interface Organization {
  name: string;
}

// Mock organization and consent events data
const org: Organization = {
  name: "Acme Corp",
};

const mockEvents: ConsentEvent[] = [
  {
    id: "evt-1",
    timestamp: "2025-06-10 13:41",
    userId: "user1@acme.com",
    eventType: "Accept",
    categories: ["Analytics", "Marketing"],
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0.0.0",
    ipAddress: "192.168.1.1",
  },
  {
    id: "evt-2",
    timestamp: "2025-06-10 13:32",
    userId: "user2@acme.com",
    eventType: "Reject",
    categories: [],
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari/16.5",
    ipAddress: "192.168.1.2",
  },
  {
    id: "evt-3",
    timestamp: "2025-06-10 13:22",
    userId: "user3@acme.com",
    eventType: "Update",
    categories: ["Essential"],
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) Safari/605.1.15",
    ipAddress: "192.168.1.3",
  },
  // Add more mock events for pagination testing
  ...Array.from({ length: 17 }, (_, i) => ({
    id: `evt-${i + 4}`,
    timestamp: `2025-06-10 12:${59 - i}`,
    userId: `user${i + 4}@acme.com`,
    eventType: ["Accept", "Reject", "Update"][i % 3] as "Accept" | "Reject" | "Update",
    categories: i % 2 === 0 ? ["Analytics", "Essential"] : ["Marketing"],
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0.0.0",
    ipAddress: `192.168.1.${i + 4}`,
  })),
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
        <ClipboardList className="text-blue-400 w-5 h-5" />
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
    Accept: { bg: "bg-green-400/20", text: "text-green-200" },
    Reject: { bg: "bg-red-400/20", text: "text-red-200" },
    Update: { bg: "bg-yellow-400/20", text: "text-yellow-200" },
  };

  const config = statusConfig[status] || { bg: "bg-gray-500/20", text: "text-gray-300" };

  return (
    <span className={`px-2 py-0.5 text-xs rounded-full ${config.bg} ${config.text}`}>
      {status}
    </span>
  );
};

const ConsentLogs: React.FC = () => {
  const [events, setEvents] = useState<ConsentEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<{
    startDate: string;
    endDate: string;
    eventType: string;
    userId: string;
    search: string;
  }>({
    startDate: "",
    endDate: "",
    eventType: "",
    userId: "",
    search: "",
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const eventsPerPage = 10;

  // Simulate fetching data
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setEvents(mockEvents);
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

  // Filter and search logic
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesDate =
        (!filters.startDate || event.timestamp >= filters.startDate) &&
        (!filters.endDate || event.timestamp <= filters.endDate);
      const matchesType = !filters.eventType || event.eventType === filters.eventType;
      const matchesUserId = !filters.userId || event.userId.toLowerCase().includes(filters.userId.toLowerCase());
      const matchesSearch = !filters.search || event.userId.toLowerCase().includes(filters.search.toLowerCase());
      return matchesDate && matchesType && matchesUserId && matchesSearch;
    });
  }, [events, filters]);

  // Pagination logic
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  // Summary stats
  const summaryStats = useMemo(() => {
    const stats = {
      total: filteredEvents.length,
      accept: filteredEvents.filter((e) => e.eventType === "Accept").length,
      reject: filteredEvents.filter((e) => e.eventType === "Reject").length,
      update: filteredEvents.filter((e) => e.eventType === "Update").length,
    };
    return stats;
  }, [filteredEvents]);

  // Handle filter changes
  const handleFilterChange = (field: string, value: string): void => {
    setFilters({ ...filters, [field]: value });
    setCurrentPage(1); // Reset to first page on filter change
  };

  // Handle export
  const handleExport = (format: "csv" | "json"): void => {
    try {
      if (format === "csv") {
        const headers = ["ID,Timestamp,User ID,Event Type,Categories,User Agent,IP Address"];
        const rows = filteredEvents.map(
          (e) =>
            `${e.id},${e.timestamp},${e.userId},${e.eventType},"${e.categories.join(";")}",${e.userAgent},${e.ipAddress}`
        );
        const csvContent = [headers, ...rows].join("\n");
        const blob = new Blob([csvContent], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `consent_logs_${new Date().toISOString()}.csv`;
        link.click();
        URL.revokeObjectURL(url);
      } else {
        const jsonContent = JSON.stringify(filteredEvents, null, 2);
        const blob = new Blob([jsonContent], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `consent_logs_${new Date().toISOString()}.json`;
        link.click();
        URL.revokeObjectURL(url);
      }
      setToast({ message: `Logs exported as ${format.toUpperCase()}!`, type: "success" });
    } catch (err) {
      setToast({ message: "Failed to export logs", type: "error" });
    }
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
          <a href="/consent-logs" className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/20 text-white">
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
            Consent Logs - <span className="text-blue-400">{org.name}</span>
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

        {/* Summary Stats */}
        <GlassCard title="Summary Statistics">
          <div className="flex flex-wrap gap-4 text-white/90 text-sm">
            <div><span className="font-semibold">Total Events:</span> {summaryStats.total}</div>
            <div><span className="font-semibold">Accept:</span> {summaryStats.accept}</div>
            <div><span className="font-semibold">Reject:</span> {summaryStats.reject}</div>
            <div><span className="font-semibold">Update:</span> {summaryStats.update}</div>
          </div>
        </GlassCard>

        {/* Filter Panel */}
        <GlassCard title="Filter Events">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">Start Date</label>
              <input
                type="datetime-local"
                value={filters.startDate}
                onChange={(e) => handleFilterChange("startDate", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">End Date</label>
              <input
                type="datetime-local"
                value={filters.endDate}
                onChange={(e) => handleFilterChange("endDate", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">Event Type</label>
              <select
                value={filters.eventType}
                onChange={(e) => handleFilterChange("eventType", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white"
              >
                <option value="">All</option>
                <option value="Accept">Accept</option>
                <option value="Reject">Reject</option>
                <option value="Update">Update</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">User ID/Email</label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 w-4 h-4 text-white/50" />
                <input
                  type="text"
                  value={filters.search}
                  onChange={(e) => handleFilterChange("search", e.target.value)}
                  placeholder="Search by user ID/email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-2 pl-8 text-white"
                />
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Consent Events Table */}
        <GlassCard title="Consent Events">
          {loading ? (
            <div className="text-white/80 text-center py-4">Loading...</div>
          ) : error ? (
            <div className="text-red-400 text-center py-4">{error}</div>
          ) : paginatedEvents.length === 0 ? (
            <div className="text-white/80 text-center py-4">No events found</div>
          ) : (
            <>
              <div className="flex justify-end mb-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => handleExport("csv")}
                    className="flex items-center gap-2 text-blue-400 bg-blue-400/10 hover:bg-blue-400/30 px-3 py-1 rounded-lg transition"
                  >
                    <Download className="w-4 h-4" />
                    Export CSV
                  </button>
                  <button
                    onClick={() => handleExport("json")}
                    className="flex items-center gap-2 text-blue-400 bg-blue-400/10 hover:bg-blue-400/30 px-3 py-1 rounded-lg transition"
                  >
                    <Download className="w-4 h-4" />
                    Export JSON
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-white/80">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="py-2 px-2 text-left font-semibold">Timestamp</th>
                      <th className="py-2 px-2 text-left font-semibold">User ID</th>
                      <th className="py-2 px-2 text-left font-semibold">Event Type</th>
                      <th className="py-2 px-2 text-left font-semibold">Categories</th>
                      <th className="py-2 px-2 text-left font-semibold">User Agent</th>
                      <th className="py-2 px-2 text-left font-semibold">IP Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedEvents.map((event) => (
                      <tr key={event.id} className="hover:bg-white/10 transition">
                        <td className="py-2 px-2">{event.timestamp}</td>
                        <td className="py-2 px-2">{event.userId}</td>
                        <td className="py-2 px-2">
                          <StatusBadge status={event.eventType} />
                        </td>
                        <td className="py-2 px-2">{event.categories.join(", ") || "None"}</td>
                        <td className="py-2 px-2">{event.userAgent.substring(0, 30)}...</td>
                        <td className="py-2 px-2">{event.ipAddress}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Pagination */}
              <div className="flex items-center justify-between mt-4">
                <div className="text-white/80 text-sm">
                  Showing {(currentPage - 1) * eventsPerPage + 1} to{" "}
                  {Math.min(currentPage * eventsPerPage, filteredEvents.length)} of {filteredEvents.length} events
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="text-blue-400 bg-blue-400/10 hover:bg-blue-400/30 px-3 py-1 rounded-lg transition disabled:opacity-50"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="text-blue-400 bg-blue-400/10 hover:bg-blue-400/30 px-3 py-1 rounded-lg transition disabled:opacity-50"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </GlassCard>
      </main>
    </div>
  );
};

export default ConsentLogs;