import fs from "fs";
import matter from "gray-matter";

export function getAllBlogs() {
    const fileNames = fs.readdirSync("data/posts");
    const blogs = fileNames.map((fileName) => {
        const markdownWithMetadata = fs.readFileSync(`data/posts/${fileName}`, "utf-8");
        const { data, content } = matter(markdownWithMetadata);
        return { id: fileName.replace(".md", ""), ...data, content };
    });
    return blogs;
}
    