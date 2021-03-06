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
    citation: {
      background: '#f9f9f9',
      borderLeft: '10px solid #ccc',
      margin: '1.5em 10px',
      padding: '0.5em 10px',
      quotes: '"“" "”" "“" "’"',
      '&:before': {
        color: '#ccc',
        content: 'open-quote',
        'font-size': '5em',
        lineHeight: '0.1em',
        marginRight: '0.25em',
        verticalAlign: '-0.5em',
      },
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
    blockquote: {
      component: withStyles(styles)((props) => {
        const { classes } = props;
        return <blockquote className={classes.citation}>{props.children}</blockquote>;
      }),
    },
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
