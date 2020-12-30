import Link from '@material-ui/core/Link';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Markdown from 'markdown-to-jsx';
import React from 'react';

//TODO: The markdown-to-jsx types were not updated to the latest version yet

const styles = (theme) =>
  createStyles({
    listItem: {
      marginTop: theme.spacing(1),
    },
    paperList: {
      padding: theme.spacing(1),
    },
  });

const defaultOptions = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h5',
      },
    },
    h2: { component: Typography, props: { gutterBottom: true, variant: 'h6' } },
    h3: { component: Typography, props: { gutterBottom: true, variant: 'subtitle1' } },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: 'caption', paragraph: true },
    },
    p: { component: Typography, props: { paragraph: true } },
    a: { component: Link },
    li: {
      component: withStyles(styles)((props) => {
        const { classes } = props;
        return (
          <li className={classes.listItem}>
            <Typography component="span" {...props} />
          </li>
        );
      }),
    },
  },
};

const BlogMarkdown = (props) => {
  return <Markdown options={defaultOptions} {...props} />;
};
export default withStyles(styles)(BlogMarkdown);
