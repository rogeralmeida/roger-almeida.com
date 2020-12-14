import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';
import { Card, CardContent, CardActionArea, CardMedia, CardActions, Button, withTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  card: {
    padding: theme.spacing(1)
  }
}));
const Main: React.FC = (props) => {

  const classes = useStyles();
  const { posts } = props;

  return (
    <Grid item xs={12} md={8}>
      {posts.map((post) => (
        <>
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
              <Button size="small" color="primary">
                More...
              </Button>
            </CardActions>
          </Card>
        </>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};

export default withTheme(Main);