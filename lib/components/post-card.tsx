import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, createStyles, Link, makeStyles, Theme, Typography, withStyles, WithStyles, withTheme } from '@material-ui/core'
import Markdown from 'markdown-to-jsx';
import React from 'react'

interface PostCardProps extends WithStyles {
  post: Post,
  key?: string
}

const useStyles = (theme: Theme) => createStyles({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  card: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(3)
  }
});

const PostCard: React.FC<PostCardProps> = props => {
  const { post, classes } = props
  return (
    <Card className={classes.card} key={`card-${post.data.slug}`}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={post.data.cover_picture}
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h3" component="h3">
          { post.data.title }
        </Typography>
        <Markdown className={classes.markdown} key={post.data.slug}>
          { post.excerpt}
        </Markdown>
      </CardContent>
      <CardActions>
        <Link href={`/posts/${post.data.slug}`} key={`link-${post.data.slug}`}>
          <Button size="small" color="primary" key={`button-${post.data.slug}`}>
            More...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default withStyles(useStyles)(PostCard)