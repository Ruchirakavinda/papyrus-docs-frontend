import React from 'react'
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import logo from '../assests/logo.png'

export default function Footer () {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        paddingTop: '1rem',
        paddingBottom: '1rem'
      }}
    >
      <Container maxWidth='lg'>
        <Divider />
        <Grid container direction='column' alignItems='center' my={2}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} display='flex' alignItems='center'>
            <img src={logo} width={50} />
            <Typography color='textSecondary' variant='subtitle2' ml={2}>
              {`copyright | ${new Date().getFullYear()} | sequence creators PVT Ltd | papyrus docs `}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
