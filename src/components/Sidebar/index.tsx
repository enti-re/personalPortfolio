import React from 'react';

interface NavLinkProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function NavLink({ active, onClick, children }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className={`text-sm ${
        active
          ? "text-neutral-900 dark:text-neutral-100 font-medium"
          : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300"
      } transition-colors`}
    >
      {children}
    </button>
  );
}

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="flex md:flex-col space-x-6 md:space-x-0 md:space-y-3 animate-reveal">
      <NavLink active={activeSection === "about"} onClick={() => setActiveSection("about")}>
        About
      </NavLink>
      <NavLink active={activeSection === "projects"} onClick={() => setActiveSection("projects")}>
        Projects
      </NavLink>
      <NavLink active={activeSection === "writings"} onClick={() => setActiveSection("writings")}>
        Writings
      </NavLink>
      <NavLink active={activeSection === "books"} onClick={() => setActiveSection("books")}>
        Books
      </NavLink>
      <NavLink active={activeSection === "visualization"} onClick={() => setActiveSection("visualization")}>
        Visualization
      </NavLink>
    </nav>
  );
};

export default React.memo(Sidebar);
