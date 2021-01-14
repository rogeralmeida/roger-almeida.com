import { Avatar, Chip, createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import LaunchIcon from '@material-ui/icons/Launch';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Skeleton } from '@material-ui/lab';
import * as LinkNext from 'next/link';
import React from 'react';

const useStyles = (theme: Theme) =>
  createStyles({
    sidebarAboutBox: {
      padding: theme.spacing(2),
      background: 'rgba( 0, 0, 0, 0.55 )',
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      backdropFilter: 'blur( 8.0px )',
      borderRadius: '10px',
      color: '#ffffff',
      marginBottom: theme.spacing(3),
    },
    sidebarSection: {},
    largeAvatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      margin: theme.spacing(2),
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
    { name: 'GitHub', icon: GitHubIcon, href: 'https://github.com/rogeralmeida' },
    { name: 'Twitter', icon: TwitterIcon, href: 'https://twitter.com/rogeralmeidacom' },
    { name: 'Keybase', icon: GroupAddIcon, href: 'https://keybase.io/rogeralmeida' },
  ],
};

const Sidebar: React.FC<SidebarPropos> = (props: SidebarPropos) => {
  const { classes } = props;
  const { social } = sidebar;
  const tags = props.tags || [];
  let tagChips = <Skeleton height={100} />;
  if (tags.length > 0) {
    tagChips = (
      <>
        {tags.map((tag) => (
          <LinkNext.default href={`/tags/${tag}`} key={`tag-link-${tag}`}>
            <Chip label={tag} key={`tag-chip-${tag}`} />
          </LinkNext.default>
        ))}
      </>
    );
  }
  return (
    <Grid item xs={12} md={4}>
      <Paper className={classes.sidebarAboutBox}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Avatar alt="Roger Almeida" src="/images/Myself.png" className={classes.largeAvatar}></Avatar>
          <Typography variant="h4">Welcome</Typography>
        </div>
        <Typography variant="body1">
          I&apos;m a passionate technologist. Since 2002 I have been working in the Software Development industry. I had
          the opportunity of playing different roles during my career, the ones I enjoyed the most were developer,
          solution architect and Delivery Lead. This is my personal blog, where I post way less often than what I
          predicted.
        </Typography>
      </Paper>
      <Paper className={classes.sidebarAboutBox}>
        <Typography variant="h5" gutterBottom className={classes.sidebarSection}>
          tags
        </Typography>
        {tagChips}
      </Paper>
      <Paper className={classes.sidebarAboutBox}>
        <Typography variant="h5" gutterBottom className={classes.sidebarSection}>
          Social
        </Typography>
        {social.map((network) => (
          <Link display="block" variant="body1" href={network.href} key={network.name} target="_blank">
            <Grid container direction="row" spacing={1} alignItems="center">
              <Grid item key={network.name + '-icon'}>
                <network.icon />
              </Grid>
              <Grid item key={network.name + '-name'}>
                {network.name}
              </Grid>
              <Grid item key={network.name + '-launch'}>
                <LaunchIcon />
              </Grid>
            </Grid>
          </Link>
        ))}
      </Paper>
    </Grid>
  );
};

export default withStyles(useStyles)(Sidebar);
