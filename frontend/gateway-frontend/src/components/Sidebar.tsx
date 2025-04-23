import React, { useState } from "react";
import {
  BookOpen,
  Star,
  LayoutDashboard,
  Compass,
  AlertCircle,
  Plug,
  Database,
  Settings,
  ChevronDown,
  ChevronRight,
  Plus,
} from "lucide-react";

const SidebarItem = ({ icon: Icon, label, children }: { icon: any; label: any; children?: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="flex items-center justify-between px-4 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4" />
          <span>{label}</span>
        </div>
        {children && (open ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />)}
      </div>
      {open && <div className="ml-6">{children}</div>}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-2">
      <h1 className="text-lg font-bold px-4 py-2">Grafana</h1>
      <SidebarItem icon={BookOpen} label="Bookmarks" />
      <SidebarItem icon={Star} label="Starred" />
      <SidebarItem icon={LayoutDashboard} label="Dashboards" />
      <SidebarItem icon={Compass} label="Explore" />
      <SidebarItem icon={Compass} label="Drilldown">
        <span className="block px-4 py-1 text-xs text-blue-400">New!</span>
      </SidebarItem>
      <SidebarItem icon={AlertCircle} label="Alerting" />
      <SidebarItem icon={Plug} label="Connections">
        <div className="flex items-center gap-2 px-4 py-1 hover:bg-gray-800 cursor-pointer">
          <Plus className="w-3 h-3" />
          <span className="text-sm">Add new connection</span>
        </div>
      </SidebarItem>
      <SidebarItem icon={Database} label="Data sources" />
      <SidebarItem icon={Settings} label="Administration" />
    </div>
  );
};

export default Sidebar;
