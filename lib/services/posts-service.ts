import matter, { GrayMatterFile } from 'gray-matter';
import fs from 'fs';

const loadPostsInDescOrder: () => GrayMatterFile<string>[] = () => {
  const files = fs.readdirSync('./pages/_posts');
  const posts: GrayMatterFile<string>[] = [];
  files.map((file: string) => {
    const postFile = fs.readFileSync(`pages/_posts/${file}`);
    const slug = `${file.substring(0, file.length - 3)}`;
    const post = matter(`${postFile}`, { excerpt_separator: '<!-- more -->' });
    post.data.slug = slug;
    posts.push(post);
  });
  const sortedPosts = posts.sort((a: GrayMatterFile<string>, b: GrayMatterFile<string>) => {
    const bTime = new Date(b.data.date).getTime();
    const aTime = new Date(a.data.date).getTime();
    return bTime - aTime;
  });
  return sortedPosts;
};

export default loadPostsInDescOrder;
