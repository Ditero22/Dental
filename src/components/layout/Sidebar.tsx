import React from "react";
import { NavLink } from "react-router-dom";

export interface SidebarLink {
  name: string;
  path: string;
  icon?: React.ReactElement;
}

interface SidebarProps {
  links: SidebarLink[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  return (
    <aside className="w-64 h-screen bg-white text-black p-5">
      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition font-medium ${
                isActive
                  ? "bg-[#58A4BC] text-white"
                  : "hover:bg-gray-100 text-black" 
              }`
            }
          >
            {link.icon && (
              <span className="w-5 h-5 flex items-center justify-center">
                {link.icon}
              </span>
            )}
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;