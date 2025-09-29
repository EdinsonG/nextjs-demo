'use client';

import { Alert, AlertTitle, Snackbar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import useMessageStore from '@/store/messagesStore';

export default function GlobalSuccess() {
  const { openSuccess, messageSuccess, closeSuccess } = useMessageStore((state) => state);

  return (
    <Snackbar
      sx={{ maxWidth: 533 }}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={openSuccess}
      autoHideDuration={3000}
      onClose={closeSuccess}
    >
      <Alert
        variant="outlined"
        severity="success"
        sx={{
          minWidth: 250,
          fontSize: 14,
          backgroundColor: 'success.main',
          color: '#FFFFFF',
        }}
        onClose={closeSuccess}
        icon={<CheckCircleIcon sx={{ color:'white'}}/>}
      >
        <AlertTitle sx={{ fontWeight: 700, fontSize: 14 }}>
          { messageSuccess?.title } 
        </AlertTitle>
        { messageSuccess?.description } 
      </Alert>
    </Snackbar>
  );
}