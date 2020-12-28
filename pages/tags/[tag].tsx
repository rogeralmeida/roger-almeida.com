import {
  Container,
  createStyles,
  CssBaseline,
  Grid,
  Theme,
  ThemeProvider,
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
import loadPostsInDescOrder from '../../lib/services/posts-service';
import PostList from '../../lib/components/post-list';

interface TagProps extends WithStyles {
  posts: Post[];
  tags: string[];
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
  return { props: { posts: posts, tags } };
};

const Post: React.FC<TagProps> = (props: TagProps) => {
  const { posts, classes, tags } = props;
  let mainContent = <h1>Loading...</h1>;
  if (posts) {
    mainContent = <PostList posts={posts} />;
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Roger-Almeida.com" />
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            {mainContent}
            <Sidebar tags={tags} />
          </Grid>
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
  // return (
  //   <ThemeProvider theme={theme}>
  //     <CssBaseline />
  //     <Container maxWidth="lg">
  //       <Header title="Roger-Almeida.com" />
  //       <main>{mainContent}</main>
  //     </Container>
  //     <Footer title="Footer" description="Something here to give the footer a purpose!" />
  //   </ThemeProvider>
  // );
};

export default withStyles(useStyles)(Post);
