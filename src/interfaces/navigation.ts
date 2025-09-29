export interface PageContainerProps {
  description?: string;
  children: React.ReactNode;
  title?: string;
}

export interface SidebarProps {
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
  isSidebarOpen: boolean;
}

export interface NavbarProps {
  toggleMobileSidebar:  (event: React.MouseEvent<HTMLElement>) => void;
  sx?: React.CSSProperties;
}

