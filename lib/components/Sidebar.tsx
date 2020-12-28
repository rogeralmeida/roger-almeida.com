import { Avatar, Chip, createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';

const useStyles = (theme: Theme) =>
  createStyles({
    sidebarAboutBox: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
    },
    sidebarSection: {
      marginTop: theme.spacing(3),
    },

    largeAvatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  });

interface SidebarPropos extends WithStyles<typeof useStyles> {
  tags: string[];
}

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const Sidebar: React.FC<SidebarPropos> = (props: SidebarPropos) => {
  const { classes, tags } = props;
  const { archives, social } = sidebar;

  return (
    <Grid item xs={12} md={4}>
      <Paper className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          Welcome
        </Typography>
        <Avatar alt="Roger Almeida" src="/images/Myself.png" className={classes.largeAvatar}></Avatar>
        <Typography>
          I&apos;m a passionate technologist. Since 2002 I have been working in the Software Development industry. I had
          the opportunity of playing different roles during my career, the ones I enjoyed the most were developer,
          solution architect and Delivery Lead. This is my personal blog, where I post way less often than what I
          predicted.
        </Typography>
      </Paper>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        tags
      </Typography>
      {tags.map((tag) => (
        <Chip label={tag} key={`tag=${tag}`} />
      ))}
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link id={archive.title} display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))}
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network.name}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item key={network.name + 'icon'}>
              <network.icon />
            </Grid>
            <Grid item key={network.name + 'name'}>
              {network.name}
            </Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
};

export default withStyles(useStyles)(Sidebar);
