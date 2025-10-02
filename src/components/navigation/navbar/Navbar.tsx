'use client'

import React from 'react';
import { useTranslations } from 'next-intl';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box, AppBar, Toolbar, Typography, styled, Stack, IconButton } from '@mui/material';
// components
import { UserInfo } from '@/components';
import { NavbarProps } from '@/interfaces';

export default function Navbar({toggleMobileSidebar, sx}: NavbarProps) {
  const t = useTranslations();

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));

  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton color="inherit" aria-label="menu" onClick={toggleMobileSidebar} sx={{ display: { lg: "none", xs: "inline" } }}>
          <MenuOutlinedIcon />
        </IconButton>

        <Box sx={{ display: { xs: 'none', sm: 'block' }, mx: 2 }}>
          <Typography variant="h5" color="text.primary">
            { t('sidebar.dashboard') }
          </Typography>
          <Typography component="p" >{ t('navbar.description') }</Typography>
        </Box>

        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          <UserInfo />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};
