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
              <li>
                <Link href="/policy" legacyBehavior>
                  セキュリティポリシー
                </Link>
              </li>
            </ul>
          </nav>

          <h1>セキュリティホワイトペーパー</h1>
          <h2>情報資産へのアクセス</h2>
          <dl>
            <dt>ユーザーからの問い合わせ対応</dt>
            <dd>
              ユーザーからの問い合わせを受けた場合に、とりわけ不具合報告など、発生している事象の状況や原因を特定する必要性がある場合には、サポート担当者や開発者がユーザー情報やプロジェクト情報を確認することがある。この際には、開発者がデータベースにアクセスして必要な情報を取得し、サポート担当者と共有することになるが、アクセスする情報は必要最低限にとどめ、また問い合わせ対応が完了し次第取得したデータは速やかに破棄するものとする。
            </dd>
            <dt>サービスの継続的改善のためのユーザー情報の利活用</dt>
            <dd>
              当社では、ユーザーのサービス利用動向を収集し、その分析結果をSuperGoodMeetingsの開発チームの中で広く共有している。分析の大半は複数のユーザーやプロジェクトのデータを要約して行うものとし、個別具体的なユーザー情報やプロジェクト情報の内容に着目するような分析は極力控える。共有の際にもそれらの情報資産が不用意に含まれないよう注意する。
              <br />
              <br />
              当社では、サービスの継続的改善のために定期的なユーザーインタビューを行っている。ユーザーへの連絡の必要性からメールアドレスなどのユーザー情報にアクセスするケースがある。
            </dd>
          </dl>

          <h2>セキュリティを維持するための技術的取り組み</h2>
          <p>
            <a
              target="_blank"
              href="https://www.ipa.go.jp/security/vuln/websecurity/index.html"
            >
              安全なウェブサイトの作り方
            </a>
            に記載されている典型的な脆弱性については、開発者がその発生機序を正しく理解し、適切な対策を心がける。
          </p>
          <dl>
            <dt>定期的な脆弱性診断</dt>
            <dd>
              SuperGoodMeetings
              は現在も継続的な機能改善が行われているため、定期的に脆弱性診断を行い、診断結果に基づいて速やかに対策を行う。
            </dd>
            <dt>ウェブアプリケーションフレームワークの適切な活用</dt>
            <dd>
              アプリケーションはRuby on
              Railsというウェブアプリケーションフレームワーク上に構築されている。開発者は
              <a target="_blank" href="https://railsguides.jp/security.html">
                Rails セキュリティガイド
              </a>
              に記載されている様々な脆弱性を理解し、フレームワークの機能を正しく活用することで、安全なウェブアプリケーションを実装する。
            </dd>
            <dt>インフラや各種ミドルウェアにおけるセキュリティ対策</dt>
            <dd>
              <dl className={styles.simplelist}>
                <dt>運用基盤</dt>
                <dd>
                  SuperGoodMeetingsのサービスは、Amazon Web Services (以下、AWS)
                  及びHerokuを基盤として利用する。AWSは、世界最大規模のECサービスであるAmazonがそのデータセンター運用のノウハウをベースに立ち上げたクラウドコンピューティングプラットフォームサービスであり、非常に高いセキュリティ基準を有している。
                </dd>
                <dt>通信の暗号化</dt>
                <dd>
                  SuperGoodMeetingsにおける通信は全てSSLによって暗号化する。
                </dd>
                <dt>保存データの暗号化</dt>
                <dd>
                  SuperGoodMeetingsにおいてお客様の情報を保存するためのデータベースとして利用しているRDSでは、データを暗号化して保存する。
                </dd>
                <dt>クレジットカード情報の扱い</dt>
                <dd>
                  SuperGoodMeetingsの利用時に入力されるクレジットカード情報は、強固なセキュリティを有する外部決済サービスである
                  Stripe にて安全に保管する。
                </dd>
                <dt>ストレージの信頼度</dt>
                <dd>
                  ユーザ情報やプロジェクト情報はAWSのAmazon Relational Database
                  Service (RDS)およびAmazon Simple Storage Service
                  (S3)に記録される。RDS及びS3は、データをストレージデバイス二重・三重に記録し、ストレージデバイスに物理的な故障などの問題が生じてもデータが保護されるよう設計されている。
                </dd>
                <dt>バックアップ</dt>
                <dd>
                  信頼性の高いストレージに保存しつつ、さらに人為的なエラーに対処するために、RDS
                  の機能を用いて日次でデータベースデータのバックアップを作成し、7世代分保管する。
                </dd>
                <dt>ロケーション</dt>
                <dd>
                  SuperGoodMeetingsでは、HerokuのUSリージョン及び
                  AWSの米国東部リージョン(US-EAST-1) を利用しており、情報資産は
                  AWSの米国東部リージョンのデータセンターに保管されます。
                </dd>
                <dt>可用性</dt>
                <dd>
                  インフラの可用性は AWS
                  およびHerokuのそれに準じるものとする。SuperGoodMeetings
                  としてのSLAは特に設定していないが、サービスの提供状況を常時モニタリングし、提供状態に問題が発生した場合には最優先で解消にあたるものとする。
                </dd>
              </dl>
            </dd>
          </dl>
        </div>
      </Layout>
    </>
  );
}
