import Layout from "../components/layout";
import { GetStaticProps } from "next";
import Link from "next/link";

interface Props {
  title: string;
  content: string;
  date: string;
  id: string;
}

const BlogPost = ({ title, content, date, id }: Props) => {
  return (
    <Layout title={title}>
      <h1 className="text-2xl font-medium text-gray-800">{title}</h1>
      <p className="text-gray-600">{date}</p>
      <div className="text-lg text-gray-800">{content}</div>
      <Link href="/blog/[id]" as={`/blog/${id}`}>
        <a className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600">
          Read More
        </a>
      </Link>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await import("../data/blog.json");
  const post = data.posts.find((p) => p.id === Number(context?.params?.id));
  return {
    props: {
      title: post?.title,
      content: post?.description,
      date: post?.publish_date,
      id: post?.id,
    },
  };
};

export default BlogPost;
