'use client'

import { useMediaQuery, Box, Drawer } from "@mui/material";
// Internal
import { SidebarProps } from "@/interfaces";
import { SidebarItems } from '@/components';

export default function Sidebar({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen }: SidebarProps) {
  const sidebarWidth = "270px";
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

  const scrollbarStyles = {
    '&::-webkit-scrollbar': { width: '7px' },
    '&::-webkit-scrollbar-thumb': { backgroundColor: '#eff2f7', borderRadius: '15px' },
  };

  if (lgUp) {
    return (
      <Box sx={{ width: sidebarWidth, flexShrink: 0 }} >
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          variant="permanent"
          slotProps={{ paper: { sx: { boxSizing: "border-box", ...scrollbarStyles, width: sidebarWidth } } }}
        >
          <Box sx={{ height: "100%" }}>
            <Box>
              <SidebarItems />
            </Box>
          </Box>
        </Drawer>
      </Box >
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant="temporary"
      slotProps={{
        paper: { sx: { boxShadow: (theme) => theme.shadows[8], ...scrollbarStyles, } } }}
    >
      <Box>
        <SidebarItems />
      </Box>
    </Drawer>
  );
};


