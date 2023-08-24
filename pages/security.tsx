import Head from "next/head";
import Link from "next/link";
import styles from "./styles/policy.module.scss";

import Layout from "../components/layout";
import { before } from "lodash";

export default function Plan() {
  return (
    <>
      <Head>
        <title>セキュリティホワイトペーパー - SuperGoodMeetings</title>
      </Head>
      <Layout>
        <div className={styles.policy}>
          <nav>
            <ul>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://copilot.jp/privacy-policy/"
                >
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <Link href="/terms">利用規約</Link>
              </li>
              <li>
                <Link href="/law">特定商取引法に基づく表示</Link>
              </li>
              <li className={styles.active}>
                <Link href="/security">セキュリティホワイトペーパー</Link>
              </li>
            </ul>
          </nav>

          <h1>セキュリティホワイトペーパー</h1>
          <dl>
            <dt>はじめに</dt>
            <dd>
              このドキュメントは SuperGoodMeetings
              をご利用いただく上でのセキュリティについての情報をまとめたものになります。詳しい説明をご希望の場合はお問い合わせください。
            </dd>
            <dt>運用基盤</dt>
            <dd>
              SuperGoodMeetings のサービスは、Amazon Web Services (以下、AWS)
              及び heroku を基盤として利用しています。
              <br />
              AWSは、世界最大規模のECサービスであるAmazonがそのデータセンター運用のノウハウをベースに立ち上げたクラウドコンピューティングプラットフォームサービスであり、非常に高いセキュリティ基準を有しています。
            </dd>
            <dt>機密性について</dt>
            <dd>
              <dl className={styles.simplelist}>
                <dt>通信の暗号化</dt>
                <dd>
                  SuperGoodMeetingsのウェブサイトにおける通信は全てSSLによって暗号化されています
                </dd>
                <dt>保存データの暗号化</dt>
                <dd>
                  SuperGoodMeetingsにおいてお客様の情報を保存するためのデータベースとして利用しているRDSでは、データを暗号化して保存しております。{" "}
                </dd>
                <dt>クレジットカード情報の扱いについて</dt>
                <dd>
                  SuperGoodMeetingsの利用時に入力されるクレジットカード情報は、強固なセキュリティを有する
                  Stripe にて安全に保管されます。
                </dd>
              </dl>
            </dd>
            <dt>完全性について</dt>
            <dd>
              <dl className={styles.simplelist}>
                <dt>ストレージの信頼度</dt>
                <dd>
                  SuperGoodMeetingsで扱うお客様の情報はAWSの Amazon Relational
                  Database Service (RDS) およびAmazon Simple Storage Service
                  (S3) に記録されます。
                  <br />
                  RDS 及び S3
                  では、データをストレージデバイス二重・三重に記録し、ストレージデバイスに物理的な故障などの問題が生じてもデータが保護されるよう設計されています。
                </dd>
                <dt>バックアップ</dt>
                <dd>
                  信頼性の高いストレージに保存しつつ、さらに人為的なエラーに対処するために、日次でデータベースデータのバックアップを作成し、7世代分保管するようにしています。
                </dd>
              </dl>
            </dd>
            <dt>ロケーション</dt>
            <dd>
              SuperGoodMeetingsでは、heroku の USリージョン及び
              AWSの米国東部リージョン(US-EAST-1) を利用しています。
              <br />
              SuperGoodMeetingsで扱うお客様のデータは
              AWSの米国東部リージョンのデータセンターに保管されます。
            </dd>
            <dt>可用性について</dt>
            <dd>
              SuperGoodMeetingsの動作基盤であるheroku及びAWSの各サービスでは可用性について以下の基準のSLAを設定しています
              <dl className={styles.bullet}>
                <dd>RDS(Multi-AZ) 99.95%</dd>
                <dd>S3 99.9%</dd>
                <dd>CloudFront 99.9%</dd>
              </dl>
              SuperGoodMeetingsとしてのSLAは特に設定していませんが、サービスの提供状況を常時モニタリングし、提供状態に問題が発生した場合には最優先で解消にあたるようにしています。
            </dd>
            <dt>運用体制</dt>
            <dd>
              運営会社である株式会社コパイロツトでは、従業員との間で秘密保持契約の締結を行い、組織的に情報セキュリティに対する体制を整えています。
              <br />
              なお、株式会社コパイロツトの業務委託先においても同様の体制を整えるとともに、相互間で秘密保持契約を締結しています。
            </dd>
          </dl>
        </div>
      </Layout>
    </>
  );
}
