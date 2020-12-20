import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme, ThemeProvider, withStyles, WithStyles, withTheme } from '@material-ui/core/styles';
import React from 'react';
import Footer from '../lib/components/Footer';
import Header from '../lib/components/Header';
import PostList from '../lib/components/post-list';
import Sidebar from '../lib/components/Sidebar';
import theme from '../lib/theme'

const matter = require('gray-matter');

const useStyles = (theme: Theme) => createStyles({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
});

export async function getStaticProps() {
  const posts: Post[]  = []
  const fs             = require('fs');
  const files          = fs.readdirSync('./pages/_posts');
  const tags: string[] = []
  files.forEach(async (file: string) => {
    const postFile       = await import(`./_posts/${file}`);
    const post           = matter(`${postFile.default}`, {excerpt_separator: '<!-- more -->'});
          post.orig      = ''
          post.data.slug = `${file.substring(0, file.length - 3)}`
    posts.push({...post });
  });
  return {props: {posts, tags}}
}

interface BlogProps extends WithStyles {
  posts: Post[],
  tags: string[]
}

const Blog: React.FC<BlogProps> = (props) => {
  const { classes, posts, tags } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Roger-Almeida.com" />
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            <PostList posts={posts} />
            <Sidebar tags={tags}/>
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </ThemeProvider>
  );
}

export default withStyles(useStyles)(Blog);