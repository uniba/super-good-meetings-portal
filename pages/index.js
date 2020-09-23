import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </Head>
      <Layout>
        <div>トップページ</div>
      </Layout>
    </>
  );
}
