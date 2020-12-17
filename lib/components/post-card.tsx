import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Link, makeStyles, Typography, withTheme } from '@material-ui/core'
import Markdown from 'markdown-to-jsx';
import React from 'react'

type PostCardProps = {
  post: {
    data: {
      slug         : string,
      cover_picture: string,
      title        : string
    },
    excerpt: string
  }
}

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  card: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(3)
  }
}));

const PostCard: React.FC<PostCardProps> = (props) => {
  const { post } = props
  const classes = useStyles()
  return (
    <Card className={classes.card} key={`card-${post.data.slug}`}>
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
        <Link href={`/posts/${post.data.slug}`} key={`link-${post.data.slug}`}>
          <Button size="small" color="primary" key={`button-${post.data.slug}`}>
            More...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default withTheme(PostCard)