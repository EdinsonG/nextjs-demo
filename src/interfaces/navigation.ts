export interface SidebarProps {
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
  isSidebarOpen: boolean;
}

export interface NavbarProps {
  toggleMobileSidebar:  (event: React.MouseEvent<HTMLElement>) => void;
  sx?: React.CSSProperties;
}

