import React from "react";
import { useRouter } from "next/router";
import { BlogPost } from "../../interfaces";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import data from "../../data/blog.json";
import ErrorPage from "next/error";

const Post = ({ post }: any) => {
  const router = useRouter();
  const { id } = router.query;
  // const postData = data.posts.find((post) => post.id === id);
  const postData = post

  if (!postData) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <SEO
        title={postData.title}
        description={postData.description}
        image="https://example.com/image.jpg"
      />
      <Layout title={postData.title}>
        <div className="bg-white p-4">
          <h1 className="text-2xl font-medium text-gray-800">
            {postData.title}
          </h1>
          <p className="text-gray-600">{postData.description}</p>
          <div className="text-right">
            <button
              className="bg-indigo-500 text-white p-2 rounded-lg"
              onClick={() => router.back()}
            >
              Go Back
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Post;
