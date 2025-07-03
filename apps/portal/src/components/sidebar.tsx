import {
  ClipboardList,
  FileEdit,
  Key,
  ListChecks,
  Settings,
  Users,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { RouterHelper } from "../utils/routes";
import clsx from "clsx";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    {
      label: "Dashboard",
      icon: ListChecks,
      href: RouterHelper.Dashboard,
      
    },
    {
      label: "SDK Config",
      icon: FileEdit,
      href: RouterHelper.Sdkconfig,
    },
    {
      label: "API Keys",
      icon: Key,
      href: RouterHelper.ApiKeys,
    },
    {
      label: "Consent Logs",
      icon: ClipboardList,
      href: RouterHelper.ConsentLogs,
    },
    {
      label: "Admin Users",
      icon: Users,
      href: RouterHelper.Default,
    },
    {
      label: "Settings",
      icon: Settings,
      href: RouterHelper.Default,
    },
  ];

  return (
    <aside className="w-60 min-h-screen bg-white/10 backdrop-blur-xl border-r border-white/10 shadow-lg flex flex-col py-6 px-4">
      <div className="flex items-center gap-3 mb-10 px-2">
        <ClipboardList className="text-white w-8 h-8" />
        <span className="text-white font-bold text-xl">ConsentLayer</span>
      </div>

      <nav className="flex flex-col gap-2 text-white/80">
        {navItems.map(({ label, icon: Icon, href }) => {
          const isActive = pathname === href;
          return (
            <button
              key={label}
              onClick={() => router.push(href)}
              className={clsx(
                "flex items-center gap-3 px-3 py-2 rounded-xl transition text-left",
                isActive
                  ? "bg-white/20 text-white"
                  : "hover:bg-white/10 hover:text-white"
              )}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </button>
          );
        })}
      </nav>

      <div className="flex-1" />

      <button className="flex items-center gap-2 px-3 py-2 mt-8 text-red-400 hover:bg-red-900/40 rounded-xl transition">
        <span className="font-medium">Logout</span>
      </button>
    </aside>
  );
}
