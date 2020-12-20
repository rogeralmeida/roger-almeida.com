import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { MarkdownOptions } from 'markdown-to-jsx';

const styles = (theme: Theme) => createStyles({
  listItem: {
    marginTop: theme.spacing(1),
  },
});

interface MarkdownProps extends WithStyles {}


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
    p: { component: Typography, props: { paragraph: true } },
    a: { component: Link },
    li: {
      // component: withStyles(styles)(({ classes, ...props }: React.FC<WithStyles>) => {
      //   return (
      //     <li className={classes.listItem}>
      //       <Typography component="span" {...props} />
      //     </li>
      //   );
      // }),
    },
  },
};

const Markdown: React.FC<MarkdownProps> = (props) => {
  return ( 
    <ReactMarkdown options={defaultOptions} {...props} />);
}
export default withStyles(styles)(Markdown)