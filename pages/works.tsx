import { chunk } from "lodash";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { getAllWorks } from "../lib/api";
import styles from "./styles/works.module.scss";
import Image from "next/image";

export default function Posts({ allWorks }: any) {
  const router = useRouter();
  const pageQuery = Array.isArray(router.query.page)
    ? router.query.page[0]
    : router.query.page;
  const currentPage = pageQuery ? parseInt(pageQuery, 10) : 1;
  const pages = chunk(allWorks, 10);
  const posts = pages[currentPage - 1] || [];
  return (
    <>
      <Head>
        <title>活用事例 - SuperGoodMeetings</title>
      </Head>
      <Layout>
        <div className={styles.works_container}>
          <div className={styles.works_content}>
            <h1>活用事例</h1>
            <div>
              {posts.map((post: any, i: any) => (
                <Link
                  key={i}
                  href={`/works/${encodeURIComponent(post.slug)}`}
                  legacyBehavior
                >
                  <a className={styles.works_item}>
                    <div className={styles.works_item_text}>
                      <span className={styles.works_item_date}>
                        {post.date}
                      </span>
                      <h2 className={styles.title}>{post.title}</h2>
                      <p className={styles.companyName}>{post.companyName}</p>
                    </div>
                    <div className={styles.works_item_image}>
                      {post.thumbnail && (
                        <Image
                          className={styles.img}
                          src={post.thumbnail}
                          alt={post.title}
                          layout="fill"
                          objectFit="contain"
                        ></Image>
                      )}{" "}
                    </div>
                    <span className={styles.works_item_date_sp}>
                      {post.date}
                    </span>
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
                        href={{ pathname: "/works", query: { page } }}
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
  const allWorks = getAllWorks([
    "slug",
    "title",
    "date",
    "thumbnail",
    "companyName",
  ]);
  return {
    props: { allWorks },
  };
}
