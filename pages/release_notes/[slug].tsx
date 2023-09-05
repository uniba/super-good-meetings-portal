import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../styles/news_single.module.scss";
import { getReleaseNotesBySlug, getAllReleaseNotes } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

export default function Post({ post }: any) {
  return (
    <>
      <Head>
        <title>{post.title} - SuperGoodMeetings</title>
      </Head>
      <Layout>
        <div className={styles.post_container}>
          <div className={styles.post_wrapper}>
            <h1>リリースノート</h1>
            <div className={styles.post_inner}>
              <p>{post.date}</p>
              <h2 className={styles.post_title}>{post.title}</h2>
              <div
                className={styles.post_content}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
          <div className={styles.post_all}>
            <Link href="/release_notes">リリースノート一覧</Link>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }: any) {
  const post = getReleaseNotesBySlug(params.slug, ["title", "date", "content"]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllReleaseNotes(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
