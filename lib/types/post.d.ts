type Post = {
  data: {
    slug: string;
    cover_picture: string;
    title: string;
    date: Date;
    tags: string[];
  };
  excerpt: string;
  content: string;
};
