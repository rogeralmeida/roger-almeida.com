import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import PostCard from './post-card';

const useStyles = (theme: Theme) =>
  createStyles({
    markdown: {
      //   ...theme.typography.body2,
      padding: theme.spacing(3, 0),
    },
    card: {
      padding: theme.spacing(1),
      marginBottom: theme.spacing(3),
    },
  });

interface PostListProps extends WithStyles {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = (props: PostListProps) => {
  const { posts } = props;
  return (
    <Grid item xs={12} md={8}>
      {posts.map((post: Post) => (
        <PostCard post={post} key={`post-card-${post.data.slug}`} />
      ))}
    </Grid>
  );
};

export default withStyles(useStyles)(PostList);
