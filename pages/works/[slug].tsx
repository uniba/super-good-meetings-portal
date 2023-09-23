import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../styles/news_single.module.scss";
import { getWorksBySlug, getAllWorks } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import Image from "next/image";

export default function Post({ post }: any) {
  return (
    <>
      <Head>
        <title>{post.title} - SuperGoodMeetings</title>
      </Head>
      <Layout>
        <div className={styles.post_container}>
          <div className={styles.post_wrapper}>
            <h1>活用事例</h1>
            <div className={styles.post_inner}>
              <p className={styles.post_date}>{post.date}</p>
              <h2 className={styles.post_title}>{post.title}</h2>
              <div
                className={styles.post_content}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <div className={styles.service_trial}>
                <div className={styles.heading}>
                  <div className={styles.image}>
                    <Image
                      src="/images/illust_trial.svg"
                      alt="まずは1プロジェクト（無料）からお試しいただけます SGMs"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <h2>
                    まずは1プロジェクト（無料）から
                    <br />
                    お試しいただけます
                  </h2>
                </div>
                <p className={styles.text}>
                  SuperGoodMeetingsを使えば、プロジェクトの目的や目指すべきゴール、議論したい内容をかんたんに可視化できます。
                </p>
                <div className={styles.filledButton} role="button">
                  <a href="https://sgms.app/signup">無料で始める</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.post_all}>
            <Link href="/works">活用事例一覧へ</Link>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }: any) {
  const post = getWorksBySlug(params.slug, [
    "title",
    "date",
    "content",
    "docs",
  ]);
  const content = await markdownToHtml(post.content || "", post.docs);

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
  const posts = getAllWorks(["slug"]);

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
