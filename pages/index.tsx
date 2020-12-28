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

const useStyles = (theme: Theme) =>
  createStyles({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  });

export const getStaticProps: () => Promise<{ props: { posts: Post[]; tags: string[] } }> = async () => {
  const posts: Post[] = [];
  const files = fs.readdirSync('./pages/_posts');
  const tags: string[] = [];
  files.forEach(async (file: string) => {
    const postFile = await import(`./_posts/${file}`);
    const post = matter(`${postFile.default}`, { excerpt_separator: '<!-- more -->' });
    post.orig = '';
    const slug = `${file.substring(0, file.length - 3)}`;
    const { content } = post;
    const excerpt = post.excerpt || 'Continue reading...';
    const { cover_picture, title, date } = post.data;
    posts.push({ content, excerpt, data: { slug, cover_picture, title, date, tags } });
  });
  const sortedPosts = posts.sort((a: Post, b: Post) => {
    return b.data.date.getTime() - a.data.date.getTime();
  });
  return { props: { posts: sortedPosts, tags } };
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
