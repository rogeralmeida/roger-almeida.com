import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';
import { Card, CardContent, CardActionArea, CardMedia, CardActions, Button, withTheme } from '@material-ui/core';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  card: {
    padding: theme.spacing(1)
  }
}));

const Main: React.FC = (props: any) => {
  const classes = useStyles();
  const { posts } = props;
  return (
    <Grid item xs={12} md={8}>
      {posts.map((post) => (
        <React.Fragment>
          <Divider />
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={post.data.cover_picture}
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                { post.data.title }
              </Typography>
              <Markdown className={classes.markdown} key={post}>
                { post.excerpt}
              </Markdown>
            </CardContent>
            <CardActions>
              <Link href={`/posts/${post.data.slug}`} >
                <Button size="small" color="primary" key={post.data.slug}>
                  More...
                </Button>
              </Link>
            </CardActions>
          </Card>
          <br/>
        </React.Fragment>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};

export default withTheme(Main);