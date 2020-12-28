import matter, { GrayMatterFile } from 'gray-matter';
import fs from 'fs';

export const allTags: () => string[] = () => {
  const tagsSet: Set<string> = new Set();
  const rawPosts = loadPostsInDescOrder();
  rawPosts.map((rawPost) => {
    const tags = rawPost.data.tags || [];
    tags.map((tag: string) => {
      tagsSet.add(tag);
    });
  });
  return [...tagsSet];
};

export const buildPostFromRaw: (rawPost: GrayMatterFile<string>) => Post = (rawPost: GrayMatterFile<string>) => {
  const tags: string[] = [];
  const slug = rawPost.data.slug;
  const { content } = rawPost;
  const excerpt = rawPost.excerpt || 'Continue reading...';
  const { cover_picture, title, date } = rawPost.data;
  const postTags: string[] = rawPost.data.tags || [];
  if (postTags.length > 0) {
    tags.push(...postTags);
  }
  return { content, excerpt, data: { slug, cover_picture, title, date, tags } };
};

const loadPostsInDescOrder: (tag?: string | string[]) => GrayMatterFile<string>[] = (tag = '') => {
  const files = fs.readdirSync('./pages/_posts');
  const posts: GrayMatterFile<string>[] = [];
  files.map((file: string) => {
    const postFile = fs.readFileSync(`pages/_posts/${file}`);
    const slug = `${file.substring(0, file.length - 3)}`;
    const post = matter(`${postFile}`, { excerpt_separator: '<!-- more -->' });
    post.data.slug = slug;
    if (tag && tag !== '') {
      if (post.data.tags && post.data.tags.includes(tag)) {
        console.log('adding post: ', file);
        console.log('   tag: ', tag);
        console.log('   tags: ', post.data.tags);
        posts.push(post);
      }
    } else {
      console.log('adding post: ', file);
      console.log('   tag: ', tag);
      console.log('   tags: ', post.data.tags);
      posts.push(post);
    }
  });
  const sortedPosts = posts.sort((a: GrayMatterFile<string>, b: GrayMatterFile<string>) => {
    const bTime = new Date(b.data.date).getTime();
    const aTime = new Date(a.data.date).getTime();
    return bTime - aTime;
  });
  return sortedPosts;
};

export default loadPostsInDescOrder;
