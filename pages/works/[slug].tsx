import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../styles/news_single.module.scss";
import { getWorksBySlug, getAllWorks } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import Image from "next/image";

export default function Post({ post, nextArticle }: any) {
  return (
    <>
      <Head>
        <title>{post.title} - SuperGoodMeetings</title>
      </Head>
      <Layout>
        <div className={`${styles.post_container} ${styles.works}`}>
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
              {nextArticle ? (
                <div className={styles.next_article}>
                  <span className={styles.next_article_top}>NEXT ARTICLE</span>
                  <Link
                    href={nextArticle.slug}
                    className={styles.next_article_content}
                  >
                    <span className={styles.next_article_title}>
                      {nextArticle.title}
                    </span>
                    <div className={styles.next_article_image}>
                      <Image
                        src={nextArticle.thumbnail}
                        alt={nextArticle.title}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
          <Link className={styles.post_all} href="/works">
            活用事例一覧へ
          </Link>
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

  const allPosts = getAllWorks(["slug", "title", "thumbnail", "date"]);
  let nextArticle: any;

  if (allPosts.length > 1) {
    const currentPostIndex = allPosts.findIndex((post) => {
      return post.slug === params.slug;
    });

    nextArticle = allPosts[currentPostIndex - 1];

    if (!nextArticle) {
      nextArticle = allPosts[currentPostIndex + 1];
    }
  }

  return {
    props: {
      post: {
        ...post,
        content,
      },
      nextArticle: nextArticle ? { ...nextArticle } : null,
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
