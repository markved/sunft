import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react"
import Head from "next/head";
import { useRouter } from "next/router";
import SocialMedia from "./social-media";
import styles from "./header.module.css"

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Layout = ({ children, title = "My App" }: Props) => {
  const router = useRouter();
  // set isMounted to false initially to load social media icons after page load
  const [isMounted, setIsMounted] = useState(false);
  const { data: session, status } = useSession()
  const loading = status === "loading"
  useEffect(() => {
    setIsMounted(true);
  }, []);

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
      <header className="bg-purple-400 p-4">
        <nav className="items-center justify-between md:flex">
          <div className="flex items-start">
            <p
              className={`nojs-show ${!session && loading ? styles.loading : styles.loaded
                }`}
            >
              {!session && (
                <>
                  <span className={styles.notSignedInText}>
                    You are not signed in
                  </span>
                  <a
                    href={`/api/auth/signin`}
                    className={styles.buttonPrimary}
                    onClick={(e) => {
                      e.preventDefault()
                      signIn()
                    }}
                  >
                    Sign in
                  </a>
                </>
              )}
              {session?.user && (
                <>
                  {session.user.image && (
                    <span
                      style={{ backgroundImage: `url('${session.user.image}')` }}
                      className={styles.avatar}
                    />
                  )}
                  <span className={styles.signedInText}>
                    <small>Signed in as</small>
                    <br />
                    <strong>{session.user.email ?? session.user.name}</strong>
                  </span>
                  <a
                    href={`/api/auth/signout`}
                    className={styles.button}
                    onClick={(e) => {
                      e.preventDefault()
                      signOut()
                    }}
                  >
                    Sign out
                  </a>
                </>
              )}
            </p>
          </div>
          <div className="flex uppercase text-white items-center">
            <a href="#" className={`px-1 py-1 mr-1  ${router.pathname === '/' && 'underline underline-offset-8'}`} onClick={() => handleClick("/")}>Home</a>
            <a href="#" className={`px-1 py-1 mr-1  ${router.pathname === '/project' && 'underline underline-offset-8'}`} onClick={() => handleClick("/project")}>Project</a>
            <a href="#" className={`px-1 py-1 mr-1  ${router.pathname === '/blog' && 'underline underline-offset-8'}`} onClick={() => handleClick("/blog")}>Blog</a>
            <a href="#" className={`px-1 py-1 mr-1  ${router.pathname === '/contact' && 'underline underline-offset-8'}`} onClick={() => handleClick("/contact")}>Contact</a>
          </div>
        </nav>
      </header>
      <main className="mx-auto">{children}</main>
      <footer className="bg-footer-gray p-4">
        <div className="text-center text-white"> {isMounted && <SocialMedia color={'gray'} />} Copyright © {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
};

export default Layout;


