import { chunk } from "lodash";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { getAllReleaseNotes } from "../lib/api";
import styles from "./styles/news.module.scss";

export default function Posts({ allReleaseNotes }: any) {
  const router = useRouter();
  const pageQuery = Array.isArray(router.query.page)
    ? router.query.page[0]
    : router.query.page;
  const currentPage = pageQuery ? parseInt(pageQuery, 10) : 1;
  const pages = chunk(allReleaseNotes, 10);
  const posts = pages[currentPage - 1] || [];

  return (
    <>
      <Head>
        <title>リリースノート - SuperGoodMeetings</title>
      </Head>
      <Layout>
        <div className={styles.posts_container}>
          <div className={styles.posts_content}>
            <h1>リリースノート</h1>
            <div>
              {posts.map((post: any, i: number) => (
                <Link
                  key={i}
                  href={`/release_notes/${encodeURIComponent(post.slug)}`}
                  legacyBehavior
                >
                  <a className={styles.posts_item}>
                    <span className={styles.posts_date}>{post.date}</span>
                    {getIcon(post.icon)}
                    <h2>{post.title}</h2>
                  </a>
                </Link>
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
                        href={{ pathname: "/release_notes", query: { page } }}
                        legacyBehavior
                      >{`${page}`}</Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allReleaseNotes = getAllReleaseNotes(["slug", "title", "date", "icon"]);
  return {
    props: { allReleaseNotes },
  };
}

const getIcon = (icon: string) => {
  if (icon) {
    return <span className={styles.posts_icon}>{icon}</span>;
  } else {
    return <span className={styles.posts_icon}>✨</span>;
  }
};
