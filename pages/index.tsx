import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles, ThemeProvider, withTheme } from '@material-ui/core/styles';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import theme from './theme'

const matter = require('gray-matter');

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [];


export async function getStaticProps() {
  const posts = []
  const fs     = require('fs');
  const files = fs.readdirSync('./pages/_posts');
  files.forEach(async (file: string) => {
    const postFile       = await import(`./_posts/${file}`);
    const post           = matter(`${postFile.default}`, {excerpt_separator: '<!-- more -->'});
          post.orig      = ''
          post.data.slug = `${file.substring(0, file.length - 3)}`
    posts.push({...post });
  });
  return {props: {posts}}
}


const Blog = function (props) {
  const classes = useStyles();
  const { posts } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Roger-Almeida.com" sections={sections} />
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main posts={posts} />
            <Sidebar />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </ThemeProvider>
  );
}

export default withTheme(Blog);