import Link from '@material-ui/core/Link';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ReactMarkdown, { MarkdownOptions } from 'markdown-to-jsx';
import React from 'react';

const styles = (theme: Theme) =>
  createStyles({
    listItem: {
      marginTop: theme.spacing(1),
    },
    paperList: {
      padding: theme.spacing(1),
    },
  });

type MarkdownProps = WithStyles;

const defaultOptions: MarkdownOptions = {
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
    p: { component: Typography, props: { paragraph: true, variant: 'body1' } },
    a: { component: Link },
    li: {
      component: withStyles(styles)((props: WithStyles) => {
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

const Markdown: React.FC<MarkdownProps> = (props) => {
  return <ReactMarkdown options={defaultOptions} {...props} />;
};
export default withStyles(styles)(Markdown);
