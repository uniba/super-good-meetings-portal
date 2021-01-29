import Head from "next/head";
import Link from "next/link";
import YouTube from "react-youtube";
import Swiper from 'react-id-swiper';
import MediaQuery from "react-responsive";
import styles from "./styles/landing.scss";
import { getAllPosts } from '../lib/api';
import Layout from "../components/layout";
import { findLastIndex } from "lodash";

function _onReady (event) {
  if (process.browser) {
    document.getElementById("movieArea").addEventListener("click", function () {
      let promise = new Promise((resolve, reject) => {
        this.classList.add(styles.fadeout);
        resolve();
      });
      promise.then((msg) => {
        return new Promise((resolve, reject) => {
          this.classList.add(styles.displaynone);
        });
      });
      event.target.playVideo();
    });
  }
}

export default function Home ({ allPosts }) {
  const posts = allPosts.slice(0, 5);

  const params = {
    slidesPerView: 'auto',
    spaceBetween: 16,
  };

  return (
    <>
      <Head>
        <title>SuperGoodMeetings</title>
        <style>{`.swiper-wrapper { 
          display: flex;
          margin-left: 24px;
          margin-right: 24px; } 
          .swiper-slide{  
          box-sizing: border-box;
          flex-shrink: 0;
          width: 90% !important;
          margin-right: 48px; 
          position: relative;
          transition-property: transform;}/* custom! */`
        }
        </style>
      </Head>
      <Layout>
        <div className={styles.landing_container}>
          <div className={styles.service_hero_area}>
            <h1>
              仕事をドライブさせる会議にしよう
            </h1>
            <p>
              ミーティングのアジェンダが、<span></span>プロジェクトをスムースに
            </p>
            <div className={styles.service_hero_area_movie}>
              <video autoPlay muted playsInline src="/src/SGMs_LP_top.mp4" poster="/images/poster.png"></video>
            </div>
          </div>

          <div id="about" className={styles.service_about}>
            <div className={styles.service_about_message1}>
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
                  <br className={styles.sp_displaynone} />
                  サービス SuperGoodMeetingsは開発されました。
                </p>
              </div>
            </div>
            <div className={styles.service_about_message2}>
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
            <div className={styles.service_about_message3}>
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

          <div className={styles.service_value}>
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
                  本質的な問題解決に向けて
                  <br className={styles.sp_displaynone} />
                  進化しやすくなります。
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
          </div>

          <div className={styles.service_detail}>
            <div className={styles.pgs}>
              <div className={styles.pgs_about}>
                <figure>
                  <img src="/images/pjs_logo.png" alt="Project Sprintロゴ"></img>
                </figure>
                <p>
                  SuperGoodMeetingsはプロジェクト推進メソッドProject Sprintに基づいて設計されています。<br />
                  Project Sprintは、ミーティングを活用してプロジェクトを推進する方法論です。コパイロツトがこれまでの業務において積み上げてきたプロジェクト推進の実践知を元に、汎用的な方法論にまとめ、オープンソースとして公開しているものです。
                </p>
              </div>
              <div className={styles.pgs_conference}>
                <h3 className={styles.pgs_title}>Project Sprintの登壇実績</h3>
                <ul className={styles.pgs_link}>
                  <li>
                    経済産業省 DX-Techmembersランチ会（2020.09.29）
                  </li>
                  <li>
                    <Link href="https://itr-lounge.connpass.com/event/183245/">
                      <a target="_blank">ITR Lounge ハナシバ vol.5 激動の時代、隣のプロジェクトマネージャが取り組んでいる事（2020.08.12）</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://2019.pmconf.jp/">
                      <a target="_blank">プロダクトマネージャーカンファレンス 2019（2019.11.13）</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://peatix.com/event/1366420/">
                      <a target="_blank">日本ナレッジマネジメント学会：実践ナレッジ・イノベーション研究部会11月度（2019.11.12）</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.pgs_button}>
                <div className={styles.button}>
                  <Link href="http://projectsprint.org">
                    <a target="_blank">projectsprint.org</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.download}>
              <h2>サービス紹介PDFをダウンロード</h2>
              <p>
                <img src="/images/icon_pdf.svg" alt="pdfアイコン"></img>
                <Link href="/src/Supergoodmeetings_introduction_20210131.pdf">
                  <a>
                    SuperGoodMeetings Introduction.pdf<span></span>(2.6MB)
                  </a>
                </Link>
              </p>
            </div>
          </div>

          <div className={styles.service_movie}>
            <h2>
              動画でわかる、
              <span>SuperGoodMeetings</span>
            </h2>
            <div className={styles.dummymovie}>
              <img
                id="movieArea"
                src="/images/movie_thumb.png"
                alt="クリックで再生"
              ></img>
              <YouTube
                videoId="gsYUS-lxhgE"
                opts={{
                  height: "200",
                  width: "300",
                }}
                onReady={_onReady}
              />
            </div>
          </div>

          {posts.length > 0 ? (
            <div className={styles.service_news}>
              <h2 className={styles.service_news_title}>お知らせ</h2>
              <div className={styles.service_news_link}>
                <Link href="/posts">
                  お知らせ一覧
                </Link>
              </div>
              <ul className={styles.service_news_items}>
                {posts.map((post, i) => (
                  <li key={i}>
                    <span>{post.date}</span>
                    <Link href={`/posts/${encodeURIComponent(post.slug)}`}>
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div id="interview" className={styles.service_interview}>
            <h2 className={styles.service_interview_title}>インタビュー</h2>
            <div className={styles.service_interview_content}>
              <a href="https://note.com/sgms/n/n0064b44bbf81" target="_blank">
                <figure className={styles.logo}><img src="/images/venect.svg" alt="ヴェネクトロゴ"></img></figure>
                <figure className={styles.image}><img src="/images/interview_venect.png" alt="インタビュー見出し"></img></figure>
                <h3 className={styles.caption}>会議は「事前に設計」するもの。<br />
              可視化がプロジェクトの進行を加速させる</h3>
                <p className={styles.footnote}>ヴェネクト株式会社<br /><span>牟田和貴、加藤智司</span></p>
              </a>
            </div>
          </div>

          <div id="media" className={styles.service_media}>
            <h2 className={styles.service_media_title}>メディア掲載</h2>
            <MediaQuery query="(max-width: 1000px)">
              <Swiper {...params}>
                <div className={styles.service_media_contents_item}>
                  <a href="https://book.mynavi.jp/wdonline/mag/detail/id=112183" target="_blank">
                    <h3>Web Designing 2020年2月号</h3>
                    <p>特集「失敗しないWebビジネスのプロジェクトマネジメント」｜定例会議がグレードアップする「プロジェクトスプリント」</p>
                  </a>
                </div>
                <div className={styles.service_media_contents_item}>
                  <a href="https://www.japandesign.ne.jp/interview/value-copilot-1/" target="_blank">
                    <h3>デザイン情報サイト[JDN]</h3>
                    <p>その会議の時間、ちゃんと活かせてますか？ 会議を使いこなすコパイロツトに学ぶテクニック</p>
                  </a>
                </div>
              </Swiper>
            </MediaQuery>
            <MediaQuery query="(min-width: 1001px)">
              <div className={styles.service_media_contents}>
                <div className={styles.service_media_contents_item}>
                  <a href="https://book.mynavi.jp/wdonline/mag/detail/id=112183" target="_blank">
                    <h3>Web Designing 2020年2月号</h3>
                    <p>特集「失敗しないWebビジネスのプロジェクトマネジメント」｜定例会議がグレードアップする「プロジェクトスプリント」</p>
                  </a>
                </div>
                <div className={styles.service_media_contents_item}>
                  <a href="https://www.japandesign.ne.jp/interview/value-copilot-1/" target="_blank">
                    <h3>デザイン情報サイト[JDN]</h3>
                    <p>その会議の時間、ちゃんと活かせてますか？ 会議を使いこなすコパイロツトに学ぶテクニック</p>
                  </a>
                </div>
              </div>
            </MediaQuery>
          </div>

          <div className={styles.service_contact}>
            <div className={styles.user_community}>
              <figure>
                <img
                  src="/images/illust_usercommunity.svg"
                  alt="ユーザーコミュニティのイラスト"
                ></img>
              </figure>
              <h2>User community</h2>
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
                <Link href="http://slack.projectsprint.org/">今すぐ登録！</Link>
              </div>
              <p className={styles.caption}>
                <Link href="https://projectsprint.slack.com/">
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

export async function getStaticProps () {
  const allPosts = getAllPosts(['slug', 'title', 'date'])
  return {
    props: { allPosts }
  }
}
