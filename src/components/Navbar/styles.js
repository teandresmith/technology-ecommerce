import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  navItems: {
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    marginRight: '10px',
    textDecoration: 'none',
    [theme.breakpoints.up('xl')]: {
      fontSize: '2rem',
    },
  },
  brand: {
    textDecoration: 'none',
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.3rem',
    },
  },
  icons: {
    [theme.breakpoints.up('xl')]: {
      fontSize: '2rem',
    },
  },
  appbar: {
    [theme.breakpoints.up('xl')]: {
      padding: '15px 0',
    },
  },
  badge: {
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.1rem',
    },
  },
}))
