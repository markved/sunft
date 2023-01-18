import React from "react";
import { useRouter } from "next/router";
import { BlogPost, BlogProps } from "../interfaces";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Post from "./posts/[id]";
import data from "../data/blog.json";

const Blog = ({ blogs }: BlogProps) => {
    const router = useRouter();
    return (
        <>
            <SEO
                title="Blog"
                description="This is the blog page for my portfolio website"
                image="https://example.com/image.jpg"
            />
            <Layout title="Blog">
                <div className="bg-white p-4">
                    <h1 className="text-2xl font-medium text-gray-800">Blog</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {blogs.map((post: BlogPost) => (
                            <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
                                <h2 className="text-lg font-medium text-gray-800">{post.title}</h2>
                                <p className="text-gray-600">{post.description}</p>
                                <div className="text-right">
                                    <button
                                        className="bg-indigo-500 text-white p-2 rounded-lg"
                                        onClick={() => {                                           
                                            router.push(`/posts/${post.id}`, `/posts/${post.id}`, { shallow: true })                                        
                                        }
                                    }
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {router.pathname === '/blog/[id]' && <Post post={data.posts.find((post) => {
                    console.log(`post id: ${post.id}, router id: ${Number(router.query.id)}`)
                    post.id === Number(router.query.id)
                }
                )} />}
            </Layout>
        </>
    );
};

export const getStaticProps = async () => {
    return {
        props: {
            blogs: data.posts
        },
    }
}

export default Blog;
