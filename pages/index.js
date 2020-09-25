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
            <p>
              ミーティングのアジェンダが、<span></span>プロジェクトをスムースに
            </p>
          </div>

          <div className={styles.service_about}>
            <div className={styles.story1}>
              <figure>
                <img
                  src="/images/sgms_screenshot1.png"
                  alt="SuperGoodMeetingsのスクリーンショット。トラックが表示されている"
                ></img>
              </figure>
              <div className={styles.content}>
                <h2>
                  メンバーの持つちからを引き出し、
                  <br />
                  プロジェクトをより速く、
                  <br />
                  本質的に成功させたい。
                </h2>
                <p>
                  そう考えているチームのために、ミーティング活用クラウド
                  <br />
                  サービス SuperGoodMeetingsは開発されました。
                </p>
              </div>
            </div>
            <div className={styles.bubbles}>
              <div className={styles.bubble}>
                <img
                  src="/images/illust_project.svg"
                  alt="プロジェクトのイメージイラスト"
                ></img>
                <h3>こんなプロジェクトに</h3>
                <p>
                  不確実性の高い環境・状況 <br />
                  複雑なアウトプット
                </p>
              </div>
              <div className={styles.bubble}>
                <img
                  src="/images/illust_team.svg"
                  alt="チームのイメージイラスト"
                ></img>
                <h3>こんなチームに</h3>
                <p>
                  部門/組織横断のチーム
                  <br /> 多様性のあるメンバー
                </p>
              </div>
            </div>
            <div className={styles.story2}>
              <div className={styles.content}>
                <h2>
                  みんなでプロジェクトを <br />
                  ファシリテーションしよう。
                </h2>
                <p>
                  メンバー全員で推進することが、
                  <br />
                  不確実性の高いプロジェクトを成功させる近道です。
                </p>
              </div>
              <figure>
                <img
                  src="/images/sgms_screenshot2.png"
                  alt="SuperGoodMeetingsのスクリーンショット。ミーティングとアジェンダのリストが表示されている"
                ></img>
              </figure>
            </div>
          </div>

          <div className={styles.service_effect}>
            <h2>サービス導入による効果</h2>
            <ul className={styles.items}>
              <li>
                <figure>
                  <img
                    src="/images/illust_effect1.svg"
                    alt="イメージイラスト"
                  ></img>
                </figure>
                定例ミーティングの実施によってリズムが生まれ、プロジェクトを計画しやすくなります。
              </li>
              <li>
                <figure>
                  <img
                    src="/images/illust_effect2.svg"
                    alt="イメージイラスト"
                  ></img>
                </figure>
                定期的に試しながら進めるため、フィードバックを得ながらプロジェクトを実行できます。
              </li>
              <li>
                <figure>
                  <img
                    src="/images/illust_effect3.svg"
                    alt="イメージイラスト"
                  ></img>
                </figure>
                アジェンダをみんなで提案するので、プロジェクトにおける問題意識を共有できます。
              </li>
              <li>
                <figure>
                  <img
                    src="/images/illust_effect4.svg"
                    alt="イメージイラスト"
                  ></img>
                </figure>
                プロジェクト全体のマイルストーンを常に意識でき、アップデートしやすくなります。
              </li>
            </ul>
          </div>

          <div className={styles.service_change}>
            <h2>サービス導入後の変化</h2>
            <ul className={styles.items}>
              <li>
                <figure>
                  <img
                    src="/images/illust_change_project.svg"
                    alt="イメージイラスト"
                  ></img>
                </figure>
              </li>
              <li>
                <figure>
                  <img
                    src="/images/illust_change1.svg"
                    alt="イメージイラスト"
                  ></img>
                </figure>
                変化を前提とし、 <br />
                柔軟に対応できるように <br />
                なります。
              </li>
              <li>
                <figure>
                  <img
                    src="/images/illust_change2.svg"
                    alt="イメージイラスト"
                  ></img>
                </figure>
                本質的な問題解決に向けて <br /> 進化しやすくなります。
              </li>
              <li>
                <figure>
                  <img
                    src="/images/illust_change3.svg"
                    alt="イメージイラスト"
                  ></img>
                </figure>
                課題や変化の兆しを <br /> 発見しやすくなります。
              </li>
            </ul>
            <ul className={styles.items}>
              <li>
                <figure>
                  <img
                    src="/images/illust_change_team.svg"
                    alt="イメージイラスト"
                  ></img>
                </figure>
              </li>
              <li>
                <figure>
                  <img
                    src="/images/illust_change4.svg"
                    alt="イメージイラスト"
                  ></img>
                </figure>
                進める際に最適な <br />
                アプローチを <br /> 考えやすくなります。
              </li>
              <li>
                <figure>
                  <img
                    src="/images/illust_change5.svg"
                    alt="イメージイラスト"
                  ></img>
                </figure>
                自律的にプロジェクトを <br />
                推進できるようになります。
              </li>
              <li>
                <figure>
                  <img
                    src="/images/illust_change6.svg"
                    alt="イメージイラスト"
                  ></img>
                </figure>
                メンバー全員での改善が <br />
                行われやすくなります。
              </li>
            </ul>
          </div>

          <div className={styles.service_detail}>
            <div className={styles.pgs}>
              <figure>
                <img src="/images/pjs_logo.png" alt="Project Sprintロゴ"></img>
              </figure>
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
              <figure>
                <img
                  src="/images/illust_usercommunity.svg"
                  alt="ユーザーコミュニティのイラスト"
                ></img>
              </figure>
              <h2>User Community</h2>
              <div className={styles.text}>
                <p>
                  プロジェクト推進メソッド Project
                  Sprintやミーティング活用クラウドサービス
                  SuperGoodMeetingsについて、ちょっとした質問や情報交換ができるユーザーコミュニティをSlackにて運営しています。
                </p>
                <p>
                  メソッドやサービスの最新情報のキャッチアップや、使い方・不明点に関するご相談、開発メンバーとのコミュニケーションなど、ぜひお気軽にご活用ください！
                </p>
              </div>
              <div className={styles.button} role="button">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfc2sXdcxDEz5Boi08Vymj7EtGeZAsCSljg6bBB0g1d9Aea0g/viewform">
                  今すぐ登録！
                </Link>
              </div>
              <p className={styles.caption}>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfc2sXdcxDEz5Boi08Vymj7EtGeZAsCSljg6bBB0g1d9Aea0g/viewform">
                  すでに登録している方はこちら
                </Link>
              </p>
            </div>
            <div className={styles.contact_us}>
              <figure>
                <img
                  src="/images/illust_contactus.svg"
                  alt="コンタクトのイラスト"
                ></img>
              </figure>
              <h2>Contact us</h2>
              <div className={styles.text}>
                <p>
                  SuperGoodMeetings
                  クローズドβ版について、サービス詳細や本ツールを用いたプロジェクト推進サポートにご興味のある方は、こちらよりご連絡ください。
                </p>
              </div>
              <div className={styles.button} role="button">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfc2sXdcxDEz5Boi08Vymj7EtGeZAsCSljg6bBB0g1d9Aea0g/viewform">
                  お問い合わせ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
