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
interface PostProps extends WithStyles {
  post: Post;
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
  const files = fs.readdirSync('pages/_posts');
  const postsPaths: { params: any }[] = [];
  files.forEach(async (file: string) => {
    postsPaths.push({ params: { post: file } });
  });
  return { paths: postsPaths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const postSlug = context.params?.post;
  const postFile = fs.readFileSync(`pages/_posts/${postSlug}.md`);
  const post = matter(`${postFile}`, { excerpt_separator: '<!-- more -->' });
  return { props: { post: post } };
};

const Post: React.FC<PostProps> = (props: PostProps) => {
  const { post, classes } = props;
  let mainContent = <h1>Loading...</h1>;
  if (post) {
    const { title } = post.data;
    const { content } = post;
    mainContent = (
      <Grid container spacing={5} className={classes.mainGrid}>
        <Grid item lg={8}>
          <Paper className={classes.postPaper}>
            <Breadcrumbs aria-label="breadcrumbs">
              <Link href="/">
                <a>Home</a>
              </Link>
              <Typography color="textPrimary">{title}</Typography>
            </Breadcrumbs>
          </Paper>
          <Paper className={classes.postPaper}>
            <Typography variant="h2">{title}</Typography>
            <Divider />
            <Markdown>{content === undefined ? '## hi' : content}</Markdown>
          </Paper>
        </Grid>
        <Sidebar tags={['amor']} />
      </Grid>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Roger-Almeida.com" />
        <main>{mainContent}</main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </ThemeProvider>
  );
};

export default withStyles(useStyles)(Post);
