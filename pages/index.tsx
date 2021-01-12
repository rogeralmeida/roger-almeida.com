import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { createStyles, Theme, ThemeProvider, withStyles, WithStyles } from '@material-ui/core/styles';
import React from 'react';
import Footer from '../lib/components/Footer';
import Header from '../lib/components/Header';
import PostList from '../lib/components/post-list';
import Sidebar from '../lib/components/Sidebar';
import loadPostsInDescOrder, { buildPostFromRaw } from '../lib/services/posts-service';
import theme from '../lib/theme';

const useStyles = (theme: Theme) =>
  createStyles({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
    pageBackground: {
      backgroundImage: "url('/images/osman-rana-dI9KhXi0ooE-unsplash.jpg')",
      backgroundRepeat: 'no-repeat',
    },
  });

export const getStaticProps: () => Promise<{ props: { posts: Post[]; tags: string[] } }> = async () => {
  const rawPosts = loadPostsInDescOrder();
  const tags: string[] = [];
  const posts: Post[] = [];
  rawPosts.map((rawPost) => {
    const post = buildPostFromRaw(rawPost);
    posts.push(post);
    tags.push(...post.data.tags);
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
      <Container maxWidth="lg" className={classes.pageBackground}>
        <Header title="Roger Almeida" />
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Grid item lg={8}>
              <PostList posts={posts} />
            </Grid>
            <Sidebar tags={tags} />
          </Grid>
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default withStyles(useStyles)(Blog);
