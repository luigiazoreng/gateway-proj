import React, { useState } from "react";
import {
  BookOpen,
  Star,
  LayoutDashboard,
  Compass,
  Plug,
  Database,
  Settings,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

interface NavItem {
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  subItems?: { label: string; onClick?: () => void }[];
}

const navItems: NavItem[] = [
  { label: "Connections", Icon: Compass },
  { label: "Metrics", Icon: Star },
  {
    label: "Requests",
    Icon: LayoutDashboard,
    subItems: [
      { label: "Accepted", onClick: () => console.log("Failed clicked") },
      { label: "Rejected", onClick: () => console.log("Paused clicked") },
    ],
  },
  {
    label: "Events",
    Icon: Plug,
    subItems: [
      { label: "Failed", onClick: () => console.log("Failed clicked") },
      { label: "Paused", onClick: () => console.log("Paused clicked") },
      { label: "Pending", onClick: () => console.log("Success clicked") },
      { label: "Successful", onClick: () => console.log("Success clicked") },
    ],
  },
  { label: "Data sources", Icon: Database },
  { label: "Administration", Icon: Settings },
  { label: "Bookmarks", Icon: BookOpen },
];

const SidebarItem: React.FC<{ item: NavItem }> = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        onClick={() => item.subItems && setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-gray-700 focus:outline-none"
      >
        <div className="flex items-center gap-2">
          <item.Icon className="w-5 h-5" />
          <span>{item.label}</span>
        </div>
        {item.subItems &&
          (open ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          ))}
      </button>
      {item.subItems && open && (
        <ul className="pl-8 space-y-1">
          {item.subItems.map((sub) => (
            <li key={sub.label}>
              <button
                onClick={sub.onClick}
                className="w-full text-left px-4 py-1 text-xs hover:bg-gray-800"
              >
                {sub.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-2">
      <h1 className="text-lg font-bold px-4 py-2">Gateway</h1>
      <nav className="flex-1 overflow-auto">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
