import {
  Breadcrumbs,
  Container,
  createStyles,
  CssBaseline,
  Divider,
  Grid,
  Paper,
  Theme,
  ThemeProvider,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Footer from '../../lib/components/Footer';
import Header from '../../lib/components/Header';
import Markdown from '../../lib/components/Markdown';
import Sidebar from '../../lib/components/Sidebar';
import theme from '../../lib/theme';
import matter from 'gray-matter';
import fs from 'fs';
import { Skeleton } from '@material-ui/lab';
import { allTags } from '../../lib/services/posts-service';
interface PostProps extends WithStyles {
  post: Post;
  tags: string[];
}

const useStyles = (theme: Theme) =>
  createStyles({
    mainGrid: {
      marginTop: theme.spacing(0),
    },
    postPaper: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(3),
    },
  });

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('pages/_posts');
  const postsPaths: { params: { post: string } }[] = [];
  files.forEach(async (file: string) => {
    postsPaths.push({ params: { post: file } });
  });
  return { paths: postsPaths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const postSlug = context.params?.post;
  const postFile = fs.readFileSync(`pages/_posts/${postSlug}.md`);
  const post = matter(`${postFile}`, { excerpt_separator: '<!-- more -->' });
  const tags = allTags();
  return { props: { post: post, tags } };
};

const Post: React.FC<PostProps> = (props: PostProps) => {
  const { post, classes, tags } = props;
  let title = null;
  let content = null;
  let breadcrumbs = <Skeleton height={25} />;
  let mainContent = <Skeleton height={1024} variant="rect" animation="wave" />;
  if (post) {
    title = post.data.title;
    content = post.content;
    breadcrumbs = (
      <Breadcrumbs aria-label="breadcrumbs">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Typography color="textPrimary">{title}</Typography>
      </Breadcrumbs>
    );
    mainContent = (
      <>
        <Typography variant="h2">{title}</Typography>
        <Divider />
        <Markdown>{content}</Markdown>
      </>
    );
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
              <Paper className={classes.postPaper}>{mainContent}</Paper>
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
