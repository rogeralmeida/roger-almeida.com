import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, makeStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://roger-almeida.com/">
        www.roger-almeida.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const footerStyles = (theme: Theme) => createStyles({
  footer: {
    // backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
});

const Footer: React.FC<WithStyles> = (props) => {
  const { classes } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Roger Almeida
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          May the code be with you!
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}
export default withStyles(footerStyles)(Footer)