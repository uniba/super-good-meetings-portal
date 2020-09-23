import Head from "next/head";
import styles from "./styles/policy.scss";

import Layout from "../components/layout";

export default function Terms() {
  return (
    <>
      <Head>
        <title>利用規約 - SuperGoodMeetings</title>
      </Head>
      <Layout>
        <div className={styles.policy}>利用規約</div>
      </Layout>
    </>
  );
}
