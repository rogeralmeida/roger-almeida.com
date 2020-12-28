import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  createStyles,
  Link,
  Theme,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import Markdown from 'markdown-to-jsx';
import React from 'react';

interface PostCardProps extends WithStyles {
  post: Post;
}

const useStyles = (theme: Theme) =>
  createStyles({
    markdown: {
      // ...theme.typography.body2, this breaks the component type on post-list.tsx
      padding: theme.spacing(1, 0),
    },
    card: {
      padding: theme.spacing(1),
      marginBottom: theme.spacing(3),
    },
  });

const PostCard: React.FC<PostCardProps> = (props: PostCardProps): JSX.Element => {
  const { post, classes } = props;
  const { excerpt, data } = post;
  const { slug, cover_picture, title } = data;
  return (
    <Card className={classes.card} key={`card-${slug}`}>
      <CardActionArea>
        <CardMedia component="img" image={cover_picture} />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h3" component="h3">
          {title}
        </Typography>
        <Markdown className={classes.markdown} key={slug}>
          {excerpt}
        </Markdown>
      </CardContent>
      <CardActions>
        <Link href={`/posts/${slug}`} key={`link-${slug}`}>
          <Button size="small" color="primary" variant="contained" key={`button-${slug}`}>
            More...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default withStyles(useStyles)(PostCard);
