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


