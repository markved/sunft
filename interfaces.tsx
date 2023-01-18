export interface BlogProps {
    blogs: BlogPost[];
    post: BlogPost;
}

export interface BlogPost {
    
      id: string;
      title: string;
      link: string;
      description: string;
      publish_date: string;
    
  }

  export type Author = {
    name: string
    picture: string
  }

export  type PostType = {
    id: string
    slug: string
    title: string
    date: string
    coverImage: string
    author: Author
    excerpt: string
    ogImage: {
      url: string
    }
    contentHtml: string
  }
  
  export default PostType
  
