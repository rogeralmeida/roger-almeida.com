import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { createStyles, Theme, ThemeProvider, withStyles, WithStyles } from '@material-ui/core/styles';
import React from 'react';
import Footer from '../lib/components/Footer';
import Header from '../lib/components/Header';
import PostList from '../lib/components/post-list';
import Sidebar from '../lib/components/Sidebar';
import theme from '../lib/theme';
import matter from 'gray-matter';
import fs from 'fs';
import loadPostsInDescOrder from '../lib/services/posts-service';

const useStyles = (theme: Theme) =>
  createStyles({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  });

export const getStaticProps: () => Promise<{ props: { posts: Post[]; tags: string[] } }> = async () => {
  const rawPosts = loadPostsInDescOrder();
  const tags: string[] = [];
  const posts: Post[] = [];
  rawPosts.map((rawPost) => {
    const slug = rawPost.data.slug;
    const { content } = rawPost;
    const excerpt = rawPost.excerpt || 'Continue reading...';
    const { cover_picture, title, date } = rawPost.data;
    posts.push({ content, excerpt, data: { slug, cover_picture, title, date, tags } });

    const postTags: string[] = rawPost.data.tags || [];
    if (postTags.length > 0) {
      tags.push(...postTags);
    }
  });
  return { props: { posts: posts, tags } };
};

interface BlogProps extends WithStyles {
  posts: Post[];
  tags: string[];
}

const Blog: React.FC<BlogProps> = (props: BlogProps) => {
  const { classes, posts, tags } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Roger-Almeida.com" />
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            <PostList posts={posts} />
            <Sidebar tags={tags} />
          </Grid>
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default withStyles(useStyles)(Blog);
