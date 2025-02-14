import type React from 'react';
import type { ReactNode } from 'react';

export interface NavBarProps {
  children: ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return <nav className="nav-bar">{children}</nav>;
};

export default NavBar;
