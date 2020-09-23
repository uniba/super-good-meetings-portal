import Head from "next/head";
import Link from "next/link";
import styles from "./styles/landing.scss";

import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>SuperGoodMeetings</title>
      </Head>
      <Layout>
        <div className={styles.landing}>トップページ</div>
      </Layout>
    </>
  );
}
