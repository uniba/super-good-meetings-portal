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
        <div className={styles.landing}>
          <div className={styles.hero_area}>
            <h1>
              仕事をドライブさせる
              <br />
              会議にしよう
            </h1>
            <p>ミーティングのアジェンダが、プロジェクトをスムースに</p>
          </div>
          <div className={styles.service_about}>
            <div className={styles.content_alignleft}>
              <img
                src="/images/sgms_screenshot1.png"
                alt="SuperGoodMeetingsのスクリーンショット。トラックが表示されている"
              ></img>
              <h2>
                メンバーの持つちからを引き出し、 プロジェクトをより速く、
                <br />
                本質的に成功させたい。
              </h2>
              <p>
                そう考えているチームのために、ミーティング活用クラウドサービス
                SuperGoodMeetingsは開発されました。
              </p>
            </div>
            <div className={styles.bubbles}>
              <div className={styles.bubble}>
                <img
                  src="/images/illust_project.svg"
                  alt="プロジェクトのイメージイラスト"
                ></img>
                <h3>こんなプロジェクトに</h3>
                <p>不確実性の高い環境・状況 複雑なアウトプット</p>
              </div>
              <div className={styles.bubble}>
                <img
                  src="/images/illust_team.svg"
                  alt="チームのイメージイラスト"
                ></img>
                <h3>こんなチームに</h3>
                <p>部門/組織横断のチーム 多様性のあるメンバー</p>
              </div>
            </div>
            <div className={styles.content_alignright}>
              <h2>
                みんなでプロジェクトを <br />
                ファシリテーションしよう。
              </h2>
              <p>
                メンバー全員で推進することが、
                不確実性の高いプロジェクトを成功させる近道です。
              </p>
              <img
                src="/images/sgms_screenshot2.png"
                alt="SuperGoodMeetingsのスクリーンショット。ミーティングとアジェンダのリストが表示されている"
              ></img>
            </div>
          </div>
          <div className={styles.service_effect}>
            <h2>サービス導入による効果</h2>
            <ul className={styles.items}>
              <li>
                <img
                  src="/images/illust_effect1.svg"
                  alt="イメージイラスト"
                ></img>
                定例ミーティングの実施によってリズムが生まれ、プロジェクトを計画しやすくなります。
              </li>
              <li>
                <img
                  src="/images/illust_effect2.svg"
                  alt="イメージイラスト"
                ></img>
                定期的に試しながら進めるため、フィードバックを得ながらプロジェクトを実行できます。
              </li>
              <li>
                <img
                  src="/images/illust_effect3.svg"
                  alt="イメージイラスト"
                ></img>
                アジェンダをみんなで提案するので、プロジェクトにおける問題意識を共有できます。
              </li>
              <li>
                <img
                  src="/images/illust_effect4.svg"
                  alt="イメージイラスト"
                ></img>
                プロジェクト全体のマイルストーンを常に意識でき、アップデートしやすくなります。
              </li>
            </ul>
          </div>
          <div className={styles.service_change}>
            <h2>サービス導入後の変化</h2>
            <ul className={styles.items}>
              <li>Projects</li>
              <li>
                <img
                  src="/images/illust_change1.svg"
                  alt="イメージイラスト"
                ></img>
                変化を前提とし、 柔軟に対応できるように なります。
              </li>
              <li>
                <img
                  src="/images/illust_change2.svg"
                  alt="イメージイラスト"
                ></img>
                本質的な問題解決に向けて 進化しやすくなります。
              </li>
              <li>
                <img
                  src="/images/illust_change3.svg"
                  alt="イメージイラスト"
                ></img>
                課題や変化の兆しを 発見しやすくなります。
              </li>
            </ul>
            <ul className={styles.items}>
              <li>Team</li>
              <li>
                <img
                  src="/images/illust_change4.svg"
                  alt="イメージイラスト"
                ></img>
                進める際に最適な アプローチを 考えやすくなります。
              </li>
              <li>
                <img
                  src="/images/illust_change5.svg"
                  alt="イメージイラスト"
                ></img>
                自律的にプロジェクトを 推進できるようになります。
              </li>
              <li>
                <img
                  src="/images/illust_change6.svg"
                  alt="イメージイラスト"
                ></img>
                メンバー全員での改善が 行われやすくなります。
              </li>
            </ul>
          </div>
          <div className={styles.service_detail}>
            <div className={styles.pgs}>
              <img src="/images/pjs_logo.png" alt="Project Sprintロゴ"></img>
              <p>
                「SuperGoodMeetings」はプロジェクト推進メソッド「プロジェクトスプリント」にもとづいて設計されています。
                <br />
                <Link href="http://projectsprint.orgs">
                  <a target="_blank">projectsprint.orgs</a>
                </Link>
                <img
                  src="/images/icon_external_link.svg"
                  alt="外部リンクアイコン"
                ></img>
              </p>
            </div>
            <div className={styles.download}>
              <h2>サービス紹介PDFをダウンロード</h2>
              <p>
                <img src="/images/icon_pdf.svg" alt="pdfアイコン"></img>
                SuperGoodMeetings Introduction.pdf(2.4MB)
              </p>
            </div>
          </div>
          <div className={styles.movie}>
            <h2>
              動画でわかる、<span>SuperGoodMeetings</span>
            </h2>
            <div className={styles.dummymovie}></div>
          </div>
          <div className={styles.contact}>
            <div className={styles.user_community}>
              <img
                src="/images/illust_usercommunity.svg"
                alt="ユーザーコミュニティのイラスト"
              ></img>
              <h2>User Community</h2>
              <p>
                プロジェクト推進メソッド Project
                Sprintやミーティング活用クラウドサービス
                SuperGoodMeetingsについて、ちょっとした質問や情報交換ができるユーザーコミュニティをSlackにて運営しています。
              </p>
              <p>
                メソッドやサービスの最新情報のキャッチアップや、使い方・不明点に関するご相談、開発メンバーとのコミュニケーションなど、ぜひお気軽にご活用ください！
              </p>
              <button>今すぐ登録</button>
              <p>すでに登録している方はこちら</p>
            </div>
            <div className={styles.contactus}>
              <img
                src="/images/illust_contactus.svg"
                alt="コンタクトのイラスト"
              ></img>
              <h2>Contact us</h2>
              <p>
                SuperGoodMeetings
                クローズドβ版について、サービス詳細や本ツールを用いたプロジェクト推進サポートにご興味のある方は、こちらよりご連絡ください。
              </p>
              <button>お問い合わせ</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
