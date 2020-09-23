import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>SuperGoodMeetings</title>
      </Head>
      <Layout>
        <div>トップページ</div>
      </Layout>
    </>
  );
}
