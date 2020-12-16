import { Container, CssBaseline, Divider, Grid, makeStyles, ThemeProvider, Typography, withTheme } from "@material-ui/core";
import React from 'react';
import Footer from "../Footer";
import Header from "../Header";
import Markdown from "../Markdown";
import Sidebar from "../Sidebar";
import theme from '../theme';

const matter = require('gray-matter');
const fs     = require('fs');

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export async function getStaticPaths() {
  const fs     = require('fs');
  console.log('PWd: ', process.cwd()) 
  const files = fs.readdirSync('pages/_posts');
  const postsPaths = []
  files.forEach(async (file: string) => {
    postsPaths.push({params: {post: file}})
  })
  return { paths: postsPaths, fallback: true }
}

export async function getStaticProps(context) {
  const postSlug = context.params.post
  const postFile = fs.readFileSync(`pages/_posts/${postSlug}.md`)
  const post     = matter(`${postFile}`, {excerpt_separator: '<!-- more -->'});
  return { props: {post: post} }
}

const Post: React.FC = (props: any) => {
  const classes     = useStyles()
  const { post }    = props
  const { content } = post
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Roger-Almeida.com"/>
        <main>
          <Grid container spacing={5} lg={12} className={classes.mainGrid}>
            <Grid item lg={8}>
              <Typography variant="h2">
                {post.data.title}
              </Typography>
              <Divider />
              <Markdown>
                { content === undefined? "## hi" : content }
              </Markdown>
            </Grid>
            <Sidebar />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </ThemeProvider>
  )
}

export default withTheme(Post);