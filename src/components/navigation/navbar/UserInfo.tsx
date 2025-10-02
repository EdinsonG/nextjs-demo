'use client'

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Box, Typography, Menu, Button, IconButton, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
// Internal
import modalStore from '@/store/modalStore';
import useLoadingStore from '@/store/loadingStore';

export default function UserInfo() {
  const router = useRouter();
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(null);

  const { setLoading } = useLoadingStore();
  const setModal = modalStore((state) => state.setModal);
  const closeModal = modalStore((state) => state.closeModal);

  const showMenu = (event: any) => {
    setIsOpen(event.currentTarget);
  };

  const signoutModal = () => {
    setIsOpen(null)

    setModal({
      title: t('logout.title') ,
      description: t('logout.description') ,
      actions: [
        {
          text: t('logout.yes') ,
          variant: 'contained',
          onClick: () => {
            setLoading(true)
            setTimeout(() => { 
              setLoading(false);
              closeModal();
              router.push('/login');
            }, 2000);
            
          },
        },
        {
          text: t('logout.no') ,
          variant: 'outlined',
          onClick: () => {
            closeModal();
          },
        },
      ],
    });
  };  

  return (
    <Box display={"flex"} alignItems="center">
      <IconButton
        size="large"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof isOpen === "object" && { color: "text.primary" }),
          '&:hover': { backgroundColor: 'transparent' },
        }}
        onClick={showMenu}
      >
        <AccountCircleOutlinedIcon sx={{ mr: 1, color: "text.secondary" }} />
        <Typography component="span">Edinson Cabello</Typography>
        <ExpandMoreOutlinedIcon
          aria-hidden
          sx={{
            transition: 'transform 0.2s',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
          strokeWidth={1.5}
        />
      </IconButton>

      <Menu
        id="msgs-menu"
        anchorEl={isOpen}
        keepMounted
        open={Boolean(isOpen)}
        onClose={() => setIsOpen(null)}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{ "& .MuiMenu-paper": { width: "200px" } }}
      >
        <MenuItem>
          <ListItemIcon>
            <PersonOutlineIcon />
          </ListItemIcon>
          <ListItemText>{ t('userInfo.profile') }</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SettingsOutlinedIcon/>
          </ListItemIcon>
          <ListItemText>{ t('userInfo.settings') }</ListItemText>
        </MenuItem>
        <Box mt={1} py={1} px={2}>
          <Button onClick={signoutModal} variant="outlined" color="primary" fullWidth>
            <LogoutOutlinedIcon />
            { t('logout.title') }
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

