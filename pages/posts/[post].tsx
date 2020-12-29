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
import { Skeleton } from '@material-ui/lab';
import fs from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Footer from '../../lib/components/Footer';
import Header from '../../lib/components/Header';
import Markdown from '../../lib/components/Markdown';
import Sidebar from '../../lib/components/Sidebar';
import { allTags, buildPostFromRaw, loadRawPost } from '../../lib/services/posts-service';
import theme from '../../lib/theme';
import Head from 'next/head';

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
    const { title, slug, cover_picture } = post.data;
    const content = post.content;
    heads = (
      <>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`https://roger-almeida.com/${cover_picture}`} />
        <meta property="og:url" content={`https://roger-almeida.com/posts/${slug}`} />
        <meta property="og:description" content={slug} />
        <meta property="og:locale" content="en_AU" />
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
        <Image src={cover_picture} layout="responsive" width="100%" height="35em" />
        <Typography variant="h2">{title}</Typography>
        <Divider />
        <br />
        <div className="ssk-group">
          {/* <a href="" className="ssk ssk-icon ssk-link"></a> */}
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=https://roger-almeida.com/posts/${slug}`}
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
        </div>
        <Markdown>{content}</Markdown>
      </>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <Head>{heads}</Head>
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
