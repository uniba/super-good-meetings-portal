import Head from "next/head";
import styles from "./styles/policy.scss";

import Layout from "../components/layout";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>プライバシーポリシー - SuperGoodMeetings</title>
      </Head>
      <Layout>
        <div className={styles.policy}>プライバシーポリシー</div>
      </Layout>
    </>
  );
}
