import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'

export default function Projects () {
  const theme = useTheme()

  return (
    <Typography variant='h4' mt={5} display='flex' justifyContent='center'>
      Projects
    </Typography>
  )
}
