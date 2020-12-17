import { withTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import PostCard from './post-card';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  card: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(3)
  }
}));

const PostList: React.FC = (props: any) => {
  const classes = useStyles();
  const { posts } = props;
  return (
    <Grid item xs={12} md={8}>
      {posts.map((post) => (
        <PostCard post={post} key={`post-card-${post.data.slug}`}/>
      ))}
    </Grid>
  );
}

PostList.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};

export default withTheme(PostList);