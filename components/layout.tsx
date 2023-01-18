import Head from "next/head";
import { useRouter } from "next/router";
import SocialMedia from "./social-media";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Layout = ({ children, title = "My App" }: Props) => {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  }

  return (
    <div className="bg-gray-200 min-h-screen">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="bg-white p-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-lg font-medium text-gray-800">
            Ved Mishra | Full Stack, Blockchain
          </a>
          <div className="flex items-center">
            <a href="#" className={`px-2 py-1 mr-2 text-gray-600 ${router.pathname === '/' && 'text-blue-600'}`} onClick={() => handleClick("/")}>Home</a>
            <a href="#" className={`px-2 py-1 mr-2 text-gray-600 ${router.pathname === '/about' && 'text-blue-600'}`} onClick={() => handleClick("/about")}>About</a>
            <a href="#" className={`px-2 py-1 mr-2 text-gray-600 ${router.pathname === '/project' && 'text-blue-600'}`} onClick={() => handleClick("/project")}>Project</a>
            <a href="#" className={`px-2 py-1 mr-2 text-gray-600 ${router.pathname === '/blog' && 'text-blue-600'}`} onClick={() => handleClick("/blog")}>Blog</a>
            <a href="#" className={`px-2 py-1 mr-2 text-gray-600 ${router.pathname === '/contact' && 'text-blue-600'}`} onClick={() => handleClick("/contact")}>Contact</a>
          </div>
        </nav>
      </header>
      <main className="container mx-auto p-4">{children}</main>
      <footer className="bg-white p-4">
        <p className="text-center text-gray-600"><SocialMedia/> Copyright © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Layout;


