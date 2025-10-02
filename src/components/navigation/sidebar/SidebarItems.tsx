'use client'

import React from "react";
import Link from "next/link";
import { uniqueId } from "lodash";
import { Box, useTheme } from "@mui/material";
import { useTranslations } from 'next-intl';
import { usePathname } from "next/navigation";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
// Sidebar lib
import { Logo, Sidebar as MUI_Sidebar, Menu, MenuItem, Submenu } from "react-mui-sidebar";

const renderMenuItems = (items: any, pathDirect: string) => {
  return items.map((item: any) => {
    const Icon = item.icon ? item.icon : RadioButtonUncheckedOutlinedIcon;
    const itemIcon = <Icon stroke={1.5} size="1.3rem" />;

    if (item.subheader) return <Menu subHeading={item.subheader} key={item.subheader} />;

    if (item.children) {
      return (
        <Submenu key={item.id} title={item.title} icon={itemIcon} borderRadius="10px" >
          {renderMenuItems(item.children, pathDirect)}
        </Submenu>
      );
    }

    return (
      <Box px={3} key={item.id}>
        <MenuItem
          key={item.id}
          isSelected={pathDirect === item?.href}
          borderRadius="10px"
          icon={itemIcon}
          link={item.href}
          component={Link}
        >
          {item.title}
        </MenuItem>
      </Box>
    );
  });
};

export default function SidebarItems() {
  const theme = useTheme();
  const t = useTranslations();
  const pathname = usePathname();
  const pathDirect = pathname;

  const Menuitems = [
    {
      navlabel: true,
      subheader: t("sidebar.main"),
    },
    {
      id: uniqueId(),
      title: t("sidebar.dashboard"),
      icon: DashboardOutlinedIcon,
      href: "/dashboard",
    },
    {
      id: uniqueId(),
      title: t("sidebar.sample-page"),
      icon: CalculateOutlinedIcon,
      href: "/dashboard/sample-page",
    },
  ];

  return (
    <MUI_Sidebar
      width={"100%"}
      showProfile={false}
      themeColor={theme.palette.primary.main}
      themeSecondaryColor={theme.palette.secondary.main}
      backgroundColor={theme.palette.background.default}
      textColor={theme.palette.text.primary}
    >
      <Logo component={Link} to="/dashboard">
        NextJs Demo
      </Logo>
      {renderMenuItems(Menuitems, pathDirect)}
    </MUI_Sidebar>
  );
}
