import { AppBar, createStyles, Link, Theme, withStyles, WithStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

interface HeaderPropos extends WithStyles {
  title: string
}

const useStyles = (theme: Theme) => createStyles({
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

const Header: React.FC<HeaderPropos> = props => {
  const { title, classes} = props;
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
        {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default withStyles(useStyles)(Header)