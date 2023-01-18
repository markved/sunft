import Layout from "../components/layout";
import data from '../data/blog.json'

interface Props {
  posts: { title: string; description: string; link: string }[];
}

const Blog = ({ posts }: Props) => {
  return (
    <Layout title="Blog">
      <div className="bg-white p-4">
        <h2 className="text-lg font-medium text-gray-800">Blog</h2>
        {posts ? (
          <ul>
            {posts.map((post, index) => (
              <li key={index} className="text-gray-600">
                <a href={post.link}>{post.title}</a> - {post.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>No blog posts found.</p>
        )}
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      posts: data.posts
    },
  }
}

export default Blog;
