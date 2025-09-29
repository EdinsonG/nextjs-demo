import React from 'react';
import { Box, Grid, Card, } from '@mui/material';

export default function ExternalLayout({ children }: { children: React.ReactNode }) {

  return (
    <Box
      sx={{
        position: "relative",
        "&:before": {
          content: '""',
          background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
          position: "absolute",
          height: "100%",
          width: "100%",
          opacity: "0.3",
          zIndex: 0,
        },
      }}
    >
      <Grid container spacing={0} justifyContent="center" sx={{ height: "100vh" }} >
        <Grid display="flex" justifyContent="center" alignItems="center" size={{ xs: 12, sm: 12, lg: 4, xl: 3 }}>
          <Card elevation={9} sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }} >
            {children}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}