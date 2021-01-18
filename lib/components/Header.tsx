import { AppBar, createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import React from 'react';

interface HeaderPropos extends WithStyles {
  title: string;
}

const useStyles = (theme: Theme) =>
  createStyles({
    mainAppBar: {
      background: 'rgba( 74, 144, 226, 0.55 )',
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      backdropFilter: 'blur( 8.0px )',
      borderRadius: '10px',
    },
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
  });

const Header: React.FC<HeaderPropos> = (props: HeaderPropos) => {
  const { title, classes } = props;
  return (
    <AppBar position="sticky" className={classes.mainAppBar}>
      <Toolbar>
        <Link href="/">
          <Typography variant="h2" color="inherit" align="center" noWrap className={classes.toolbarTitle}>
            {title}
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
export default withStyles(useStyles)(Header);
