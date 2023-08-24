import { chunk } from "lodash";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { getAllWorks } from "../lib/api";
import styles from "./styles/news.module.scss";

export default function Posts({ allPosts }: any) {
  const router = useRouter();
  const pageQuery = Array.isArray(router.query.page)
    ? router.query.page[0]
    : router.query.page;
  const currentPage = pageQuery ? parseInt(pageQuery, 10) : 1;
  const pages = chunk(allPosts, 10);
  const posts = pages[currentPage - 1] || [];
  return (
    <>
      <Head>
        <title>実績記事 - SuperGoodMeetings</title>
      </Head>
      <Layout>
        <div className={styles.posts_container}>
          <h1>実績記事</h1>
          <div>
            {posts.map((post: any, i: any) => (
              <div key={i}>
                <p className={styles.posts_item}>
                  <span>{post.date}</span>
                  <Link
                    href={`/news/${encodeURIComponent(post.slug)}`}
                    legacyBehavior
                  >
                    {post.title}
                  </Link>
                </p>
              </div>
            ))}
          </div>
          <ul className={styles.pager}>
            {pages.map((_, i) => {
              const page = i + 1;
              if (page === currentPage) {
                return <li key={page}>{page}</li>;
              } else {
                return (
                  <li key={page}>
                    <Link
                      href={{ pathname: "/news", query: { page } }}
                      legacyBehavior
                    >{`${page}`}</Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllWorks(["slug", "title", "date"]);
  return {
    props: { allPosts },
  };
}
