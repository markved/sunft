import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { PostType } from '../../interfaces';
import Head from 'next/head';
import Date from '../../components/date';

// https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details
// https://github.com/vercel/next.js/tree/canary/examples/blog-starter

export default function Post({ postData }: { postData: PostType }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}