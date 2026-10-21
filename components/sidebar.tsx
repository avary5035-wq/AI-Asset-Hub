"use client";

import { useState, type ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import {
  Archive,
  Boxes,
  Building2,
  ChevronLeft,
  Clapperboard,
  FolderKanban,
  Heart,
  Home,
  ImageIcon,
  Settings,
  Sparkles,
  Users,
  X,
} from "lucide-react";

type Page = "dashboard" | "library" | "projects" | "team" | "settings";

type Link = {
  label: string;
  icon: ComponentType<LucideProps>;
  page: Page;
};

const mainLinks: Link[] = [
  { label: "Dashboard", icon: Home, page: "dashboard" },
  { label: "Asset Library", icon: ImageIcon, page: "library" },
];

const assetLinks: Link[] = [
  { label: "Characters", icon: Users, page: "library" },
  { label: "Scenes", icon: Clapperboard, page: "library" },
  { label: "Props", icon: Boxes, page: "library" },
  { label: "Wardrobe", icon: Archive, page: "library" },
  { label: "Creatures", icon: Sparkles, page: "library" },
  { label: "Vehicles", icon: Building2, page: "library" },
];

const workspaceLinks: Link[] = [
  { label: "My Projects", icon: FolderKanban, page: "projects" },
  { label: "Favorites", icon: Heart, page: "library" },
  { label: "Team", icon: Users, page: "team" },
  { label: "Settings", icon: Settings, page: "settings" },
];

export function Sidebar({
  page,
  setPage,
}: {
  page: Page;
  setPage: (page: Page) => void;
}) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const select = (nextPage: Page) => {
    setPage(nextPage);
    setOpen(false);
  };

  const renderLinks = (links: Link[], markActive = false) =>
    links.map(({ label, icon: Icon, page: target }) => (
      <button
        key={label}
        onClick={() => select(target)}
        className={`nav-item w-full ${
          markActive && page === target ? "nav-active" : ""
        }`}
      >
        <Icon size={18} className="shrink-0" />
        {!collapsed && <span>{label}</span>}
      </button>
    ));

  const content = (
    <aside
      className={`flex h-full flex-col border-r border-line bg-white/95 backdrop-blur-xl transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex h-[72px] items-center justify-between px-5">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-600 text-white shadow-[0_6px_16px_rgba(37,99,235,.3)]">
            <Sparkles size={17} />
          </span>

          {!collapsed && (
            <span className="whitespace-nowrap font-semibold tracking-tight">
              AI Asset Hub
            </span>
          )}
        </div>

        <button
          aria-label="Collapse sidebar"
          className="hidden text-slate-400 transition hover:text-blue-600 lg:block"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronLeft
            size={17}
            className={`transition ${collapsed ? "rotate-180" : ""}`}
          />
        </button>

        <button
          aria-label="Close menu"
          className="lg:hidden"
          onClick={() => setOpen(false)}
        >
          <X size={18} />
        </button>
      </div>

      <nav className="space-y-1 overflow-y-auto px-3">
        {renderLinks(mainLinks, true)}

        <p
          className={`px-3 pt-6 text-[11px] font-semibold uppercase tracking-wider text-slate-400 ${
            collapsed ? "hidden" : ""
          }`}
        >
          Asset types
        </p>

        {renderLinks(assetLinks)}

        <p
          className={`px-3 pt-6 text-[11px] font-semibold uppercase tracking-wider text-slate-400 ${
            collapsed ? "hidden" : ""
          }`}
        >
          Workspace
        </p>

        {renderLinks(workspaceLinks, true)}
      </nav>

      <div className="mt-auto border-t border-line p-3">
        <div className="flex items-center gap-2 rounded-lg p-2">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-sky-500 text-xs font-bold text-white">
            DC
          </div>

          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">David Chen</p>
              <p className="truncate text-xs text-slate-500">NOVA Studio</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-30 grid h-10 w-10 place-items-center rounded-lg border bg-white shadow-sm lg:hidden"
      >
        <Sparkles size={17} className="text-blue-600" />
      </button>

      <div className="sticky top-0 hidden h-screen lg:block">{content}</div>

      {open && (
        <div className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm lg:hidden">
          <div className="h-full w-72">{content}</div>
        </div>
      )}
    </>
  );
}
