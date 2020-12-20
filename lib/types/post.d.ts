type Post = {
  data: {
    slug         : string,
    cover_picture: string,
    title        : string,
    tags?        : string[]
  },
  excerpt: string,
  content: string
}