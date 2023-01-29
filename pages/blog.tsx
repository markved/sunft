import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { getAllPosts } from '../lib/api'
import Post from '../interfaces/post'

type Props = {
    allPosts: Post[]
}

const Blog = ({ allPosts }: Props) => {
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
                    <h1 className="text-2xl font-medium text-gray-800">Learning about Blockchain</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {allPosts.map((post: Post) => (
                            <div key={post.title} className="bg-white p-4 rounded-lg shadow-md">
                                <h2 className="text-lg font-medium text-gray-800">{post.title}</h2>
                                <p className="text-gray-600">{post.excerpt}</p>
                                <div className="text-right">
                                    <button
                                        className="bg-indigo-500 text-white p-2 rounded-lg"
                                        onClick={() => {
                                            router.push(`/posts/${post.slug}`, `/posts/${post.slug}`, { shallow: true })
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
            </Layout>
        </>
    );
};

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
    ])

    return {
        props: { allPosts },
    }
}

export default Blog;
