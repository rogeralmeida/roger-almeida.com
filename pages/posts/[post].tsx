import {
  Box,
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
import {Skeleton} from '@material-ui/lab';
import {GetStaticPaths, GetStaticProps} from 'next';
import Link from 'next/link';
import React from 'react';
import Footer from '../../lib/components/Footer';
import Header from '../../lib/components/Header';
import Markdown from '../../lib/components/Markdown';
import Sidebar from '../../lib/components/Sidebar';
import loadPostsInDescOrder, {allTags, buildPostFromRaw, loadRawPost} from '../../lib/services/posts-service';
import theme from '../../lib/theme';
import Head from 'next/head';
import {GrayMatterFile} from 'gray-matter';
import {DiscussionEmbed} from 'disqus-react';

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
      background: 'rgba( 255, 255, 255, 0.55 )',
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      backdropFilter: 'blur( 8.0px )',
      borderRadius: '10px',
    },
    pageBackground: {
      // backgroundImage: "url('/images/osman-rana-dI9KhXi0ooE-unsplash.jpg')",
      // backgroundRepeat: 'no-repeat',
    },
  });

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = loadPostsInDescOrder();
  const postsPaths: { params: { post: string } }[] = [];
  posts.forEach(async (post: GrayMatterFile<string>) => {
    const { slug } = post.data;
    postsPaths.push({ params: { post: slug } });
  });
  return { paths: postsPaths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const postSlug = context.params?.post;
  const rawPost = loadRawPost(`${postSlug}.md`);
  const post = buildPostFromRaw(rawPost);
  const tags = allTags();
  return { props: { post: post, tags } };
};

const Post: React.FC<PostProps> = (props: PostProps) => {
  const { post, classes, tags } = props;
  let breadcrumbs = <Skeleton height={25} />;
  let mainContent = <Skeleton height={1024} animation="wave" />;
  let heads = <></>;
  if (post) {
    console.log('Data: ', post.data);
    const { title, slug, cover_picture, date } = post.data;
    const { content, excerpt } = post;
    const url = `https://roger-almeida.com/${slug}.html`;
    const postEncodedURL = encodeURI(`https://roger-almeida.com/posts/${slug}.html`);
    heads = (
      <>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`https://roger-almeida.com/${cover_picture}`} />
        <meta property="og:url" content={`https://roger-almeida.com/posts/${slug}`} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:locale" content="en_AU" />
        <meta property="og:author" content="Roger Almeida" />
        <meta property="og:article:published_time " content={`${date}`} />
        <meta property="og:site_name" content="roger-almeida.com" />
      </>
    );
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
        <img src={cover_picture} width="100%" />
        <Typography variant="h2">{title}</Typography>
        <Divider />
        <br />
        <Box display="flex" flexDirection="row-reverse" alignContent="center">
          <Box className="ssk-group">
            {/* <div className="ssk-group"> */}
            {/* <a href="" className="ssk ssk-icon ssk-link"></a> */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${postEncodedURL}`}
              className="ssk ssk-icon ssk-linkedin"
              target="_blank"
              rel="noreferrer"
            ></a>
            {/* <a href="" className="ssk ssk-icon ssk-twitter"></a> TODO: Add more social networks
              <a href="" className="ssk ssk-icon ssk-facebook"></a>
              <a href="" className="ssk ssk-icon ssk-pinterest"></a>
              <a href="" className="ssk ssk-icon ssk-tumblr"></a>
              <a href="" className="ssk ssk-icon ssk-whatsapp"></a>
              <a href="" className="ssk ssk-icon ssk-reddit"></a>
              <a href="" className="ssk ssk-icon ssk-email"></a> */}
            {/* </div> */}
          </Box>
          <Box>
            <Typography variant="overline">Share it:</Typography>
          </Box>
        </Box>
        <article>
          <Markdown>{content}</Markdown>
        </article>
        <DiscussionEmbed
          shortname="roger-almeida-com"
          config={{
            url,
            identifier: slug,
            title,
            language: 'en_AU',
          }}
        />
      </>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <Head>{heads}</Head>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.pageBackground}>
        <Header title="Roger Almeida" />
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
