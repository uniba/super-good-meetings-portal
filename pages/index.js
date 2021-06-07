import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import YouTube from "react-youtube";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MediaQuery from "react-responsive";
import styles from "./styles/landing.scss";
import { getAllPosts } from "../lib/api";
import { findLastIndex } from "lodash";
import MailchimpSubscribe from "react-mailchimp-subscribe";

SwiperCore.use([Navigation, Pagination]);

function _onReady(event) {
  if (process.browser) {
    document
      .getElementsByClassName("movieArea")[0]
      .addEventListener("click", function () {
        let promise = new Promise((resolve, reject) => {
          this.classList.add(styles.fadeout);
          resolve();
        });
        event.target.playVideo();
      });
  }
}

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div className={styles.submit_area}>
      {status === "sending" && (
        <div className={styles.submit_area_text}>送信中...</div>
      )}
      {status === "error" && (
        <div
          dangerouslySetInnerHTML={{ __html: message }}
          className={styles.submit_area_text}
        />
      )}
      {status === "success" && (
        <div
          dangerouslySetInnerHTML={{ __html: message }}
          className={styles.submit_area_text}
        />
      )}
      <input
        ref={(node) => (email = node)}
        type="email"
        placeholder="Eメールアドレスを入力してください"
      />
      <br />
      <button onClick={submit}>登録する</button>
    </div>
  );
};

export default function Home({ allPosts }) {
  const posts = allPosts.slice(0, 5);

  const params = {
    slidesPerView: "auto",
    spaceBetween: 16,
  };

  return (
    <>
      <Head>
        <title>SuperGoodMeetings</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/css/swiper.min.css"
        />
        <style>
          {`
          .swiper-button-next{
            background-image: url(/images/icon_right.svg);
            right: 0;
          }
          .swiper-button-prev{
            background-image: url(/images/icon_left.svg);
            left: 0;
          }
          .swiper-pagination-bullet,
          .swiper-pagination-bullet-active{
            background: white;
          }
          .swiper-slide {
            width: 100%;
            height: auto;
          }
          @media screen and (max-width: 1000px) {
            .swiper-container {
              padding:0;
            }
            .swiper-button-next,
            .swiper-button-prev,
            .swiper-pagination-bullet{
              display: none;
            }
          }
        `}
        </style>
      </Head>
      <Layout>
        <div className={styles.landing_container}>
          <div className={styles.service_hero_area}>
            <h1>仕事をドライブさせる会議にしよう</h1>
            <p>
              ミーティングのアジェンダが、<span></span>プロジェクトをスムースに
            </p>
            <div className={styles.service_hero_area_movie}>
              <video
                autoPlay
                muted
                playsInline
                src="/src/SGMs_LP_top.mp4"
                poster="/images/poster.png"
              ></video>
            </div>
          </div>

          <div className={styles.service_trial}>
            <div className={styles.service_trial_heading}>
              <img src="/images/illust_trial.svg" alt="イメージイラスト" />
              <h2>どなたでもSuperGoodMeetingsをお試しいただけます！</h2>
            </div>
            <p>
              SuperGoodMeetingsを使えば、プロジェクトの目的や目指すべきゴール、議論したい内容をかんたんに可視化できます。ぜひお試しください！
            </p>
            <div className={styles.button} role="button">
              <a href="http://sgms.app/signup" id="ga_signup_body">
                新規登録
              </a>
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
                  <img
                    src="/images/pjs_logo.png"
                    alt="Project Sprintロゴ"
                  ></img>
                </figure>
                <p>
                  SuperGoodMeetingsはプロジェクト推進メソッドProject
                  Sprintに基づいて設計されています。
                  <br />
                  Project
                  Sprintは、ミーティングを活用してプロジェクトを推進する方法論です。コパイロツトがこれまでの業務において積み上げてきたプロジェクト推進の実践知を元に、汎用的な方法論にまとめ、オープンソースとして公開しているものです。
                </p>
              </div>
              <div className={styles.pgs_conference}>
                <h3 className={styles.pgs_title}>Project Sprintの登壇実績</h3>
                <ul className={styles.pgs_link}>
                  <li>経済産業省 DX-Techmembersランチ会（2020.09.29）</li>
                  <li>
                    <Link href="https://itr-lounge.connpass.com/event/183245/">
                      <a target="_blank">
                        ITR Lounge ハナシバ vol.5
                        激動の時代、隣のプロジェクトマネージャが取り組んでいる事（2020.08.12）
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://2019.pmconf.jp/">
                      <a target="_blank">
                        プロダクトマネージャーカンファレンス 2019（2019.11.13）
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://peatix.com/event/1366420/">
                      <a target="_blank">
                        日本ナレッジマネジメント学会：実践ナレッジ・イノベーション研究部会11月度（2019.11.12）
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.pgs_button}>
                <div className={styles.button}>
                  <a
                    id="ga_pjs"
                    href="http://projectsprint.org"
                    target="_blank"
                  >
                    projectsprint.org
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.download}>
              <h2>サービス紹介PDFをダウンロード</h2>
              <p>
                <img src="/images/icon_pdf.svg" alt="pdfアイコン"></img>
                <Link href="/src/SuperGoodMeetings_introduction_20210531_1.pdf">
                  <a id="ga_intropdf_body">
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
                className="movieArea"
                id="ga_movie"
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
                <Link href="/posts">お知らせ一覧</Link>
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
            <Swiper
              spaceBetween={16}
              navigation
              pagination={{ clickable: true }}
              centeredSlides={true}
              slidesPerView={1.15}
              loopedSlides={3}
              loop={true}
              breakpoints={{
                1000: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                  width: 715,
                },
              }}
              className={styles.swiper_container}
            >
              <SwiperSlide className={styles.service_interview_content}>
                <a href="https://note.com/sgms/n/n0064b44bbf81" target="_blank">
                  <figure className={styles.logo}>
                    <img
                      src="/images/interview_venect_logo.svg"
                      alt="ヴェネクトロゴ"
                    ></img>
                  </figure>
                  <figure className={styles.image}>
                    <img
                      src="/images/interview_venect.png"
                      alt="ヴェネクト画像"
                    ></img>
                  </figure>
                  <h3 className={styles.caption}>
                    会議は「事前に設計」するもの。
                    <br />
                    可視化がプロジェクトの進行を加速させる
                  </h3>
                  <p className={styles.footnote}>
                    ヴェネクト株式会社
                    <br />
                    <span>牟田和貴、加藤智司</span>
                  </p>
                </a>
              </SwiperSlide>
              <SwiperSlide className={styles.service_interview_content}>
                <a
                  href="https://note.com/sgms/n/nc218c6d07a22?magazine_key=m3633f7f797e5"
                  target="_blank"
                >
                  <figure className={styles.logo}>
                    <img
                      src="/images/interview_uniba_logo.svg"
                      alt="ユニバロゴ"
                    ></img>
                  </figure>
                  <figure className={styles.image}>
                    <img
                      src="/images/interview_uniba.png"
                      alt="ユニバ画像"
                    ></img>
                  </figure>
                  <h3 className={styles.caption}>
                    「定例ミーティング」を軸として、
                    <br />
                    プロジェクトの進行を円滑にする
                  </h3>
                  <p className={styles.footnote}>
                    ユニバ株式会社
                    <br />
                    <span>安井貴啓、河合伶</span>
                  </p>
                </a>
              </SwiperSlide>
              <SwiperSlide className={styles.service_interview_content}>
                <a
                  href="https://note.com/sgms/n/n01bd46d99dcd?magazine_key=m3633f7f797e5"
                  target="_blank"
                >
                  <figure className={styles.logo}>
                    <img src="/images/interview_gs_logo.svg" alt="GSロゴ"></img>
                  </figure>
                  <figure className={styles.image}>
                    <img src="/images/interview_gs.png" alt="GS画像"></img>
                  </figure>
                  <h3 className={styles.caption}>
                    「認識のズレを補正する仕組み」で、
                    <br />
                    社内のコミュニケーションを円滑に
                  </h3>
                  <p className={styles.footnote}>
                    ゴール・システム・コンサルティング株式会社
                    <br />
                    <span>小笠原剛、但田真紀</span>
                  </p>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>

          <div id="media" className={styles.service_media}>
            <h2 className={styles.service_media_title}>メディア掲載</h2>
            <Swiper
              spaceBetween={16}
              centeredSlides={true}
              slidesPerView={1.15}
              loopedSlides={2}
              breakpoints={{
                1000: {
                  spaceBetween: 50,
                  centeredSlides: false,
                  slidesPerView: 2,
                  width: 940,
                },
              }}
              className={styles.swiper_container}
            >
              <SwiperSlide className={styles.service_media_contents_item}>
                <a
                  href="https://book.mynavi.jp/wdonline/mag/detail/id=112183"
                  target="_blank"
                >
                  <h3>Web Designing 2020年2月号</h3>
                  <p>
                    特集「失敗しないWebビジネスのプロジェクトマネジメント」｜定例会議がグレードアップする「プロジェクトスプリント」
                  </p>
                </a>
              </SwiperSlide>
              <SwiperSlide className={styles.service_media_contents_item}>
                <a
                  href="https://www.japandesign.ne.jp/interview/value-copilot-1/"
                  target="_blank"
                >
                  <h3>デザイン情報サイト[JDN]</h3>
                  <p>
                    その会議の時間、ちゃんと活かせてますか？
                    会議を使いこなすコパイロツトに学ぶテクニック
                  </p>
                </a>
              </SwiperSlide>
            </Swiper>
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
                <Link href="http://slack.projectsprint.org/">
                  <a id="ga_usercommunity_body">今すぐ登録！</a>
                </Link>
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
                  SuperGoodMeetingsについて、サービス詳細や本ツールを用いたプロジェクト推進サポートにご興味のある方は、こちらよりご連絡ください。
                </p>
              </div>
              <div className={styles.button} role="button">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfc2sXdcxDEz5Boi08Vymj7EtGeZAsCSljg6bBB0g1d9Aea0g/viewform">
                  <a id="ga_contact_body">お問い合わせ</a>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.newsletter_container}>
            <div className={styles.newsletter}>
              <h2>Newsletter</h2>
              <MailchimpSubscribe
                url="https://supergoodmeetings.us4.list-manage.com/subscribe/post?u=4914736f05d3b5eb761d836c4&amp;id=d6f47afc4c"
                render={({ subscribe, status, message }) => (
                  <div>
                    <p>
                      SuperGoodMeetings開発進捗状況や、基本設計にも使われているプロジェクト推進メソッドに関する情報、プロジェクト進行のお役立ちTipsなどをお知らせいたします！
                    </p>
                    <CustomForm
                      status={status}
                      message={message}
                      onValidated={(formData) => subscribe(formData)}
                    />
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["slug", "title", "date"]);
  return {
    props: { allPosts },
  };
}
