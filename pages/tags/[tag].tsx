import {
  Breadcrumbs,
  Container,
  createStyles,
  CssBaseline,
  Grid,
  Paper,
  Theme,
  ThemeProvider,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import { GrayMatterFile } from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Footer from '../../lib/components/Footer';
import Header from '../../lib/components/Header';
import Sidebar from '../../lib/components/Sidebar';
import { allTags, buildPostFromRaw } from '../../lib/services/posts-service';
import theme from '../../lib/theme';
import Link from 'next/link';
import loadPostsInDescOrder from '../../lib/services/posts-service';
import PostList from '../../lib/components/post-list';
import { Skeleton } from '@material-ui/lab';

interface TagProps extends WithStyles {
  posts: Post[];
  tags: string[];
  tag: string;
}

const useStyles = (theme: Theme) =>
  createStyles({
    mainGrid: {
      marginTop: theme.spacing(0),
    },
    postPaper: {
      padding: theme.spacing(1),
      marginBottom: theme.spacing(3),
    },
  });

export const getStaticPaths: GetStaticPaths = async () => {
  const rawPosts = loadPostsInDescOrder();
  const tags: string[] = [];
  rawPosts.map((rawPost: GrayMatterFile<string>) => {
    const post = buildPostFromRaw(rawPost);
    tags.push(...post.data.tags);
  });
  const postsPaths: { params: { tag: string } }[] = [];
  tags.map((tag: string) => {
    postsPaths.push({ params: { tag } });
  });
  return { paths: postsPaths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const tag = context.params?.tag || '';
  const rawPosts = loadPostsInDescOrder(tag);
  const posts: Post[] = [];
  rawPosts.map((rawPost: GrayMatterFile<string>) => {
    const post = buildPostFromRaw(rawPost);
    posts.push(post);
  });
  const tags = allTags();
  return { props: { posts: posts, tags, tag } };
};

const Post: React.FC<TagProps> = (props: TagProps) => {
  const { posts, classes, tags, tag } = props;
  let mainContent = <Skeleton />;
  let breadcrumbs = <Skeleton />;
  if (posts) {
    breadcrumbs = (
      <Breadcrumbs aria-label="breadcrumbs">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Typography color="textPrimary">tags</Typography>
        <Typography color="textPrimary">{tag}</Typography>
      </Breadcrumbs>
    );
    mainContent = <PostList posts={posts} />;
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Roger-Almeida.com" />
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Grid item lg={8}>
              <Paper className={classes.postPaper}>{breadcrumbs}</Paper>
              {mainContent}
            </Grid>
            <Sidebar tags={tags} />
          </Grid>
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default withStyles(useStyles)(Post);
