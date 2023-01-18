import React from "react";
import { useRouter } from "next/router";
import { BlogPost } from "../../interfaces";
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import ErrorPage from "next/error";
import type PostType from '../../interfaces/post'
import PostBody from "../../components/post-body";

type Props = {
  post: PostType  
}

const Post = ({ post }: Props) => {
  const router = useRouter();  
  if (!post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        image="https://example.com/image.jpg"
      />
      <Layout title={post.title}>
        <div className="bg-white p-4">
          <h1 className="text-2xl font-medium text-gray-800">
            {post.title}
          </h1>
          <p className="text-gray-600"><PostBody content={post.content}/></p>
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

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default Post;
