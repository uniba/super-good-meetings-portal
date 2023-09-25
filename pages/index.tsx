import Head from "next/head";
import Link from "next/link";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import YouTube from "react-youtube";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomForm from "../components/customform";
import Layout from "../components/layout";
import { getAllNews, getAllReleaseNotes, getAllWorks } from "../lib/api";
import styles from "./styles/landing.module.scss";
import Image from "next/image";

SwiperCore.use([Navigation, Pagination]);

function _onReady(event: { target: { playVideo: () => void } }) {
  if (process.browser) {
    const target = document.getElementsByClassName("movieArea")[0];

    target.addEventListener("click", function () {
      let promise = new Promise<void>((resolve, reject) => {
        target.classList.add(styles.fadeout);
        resolve();
      });
      event.target.playVideo();
    });
  }
}

export default function Home({
  allNews,
  allReleaseNotes,
  allWorks,
}: {
  allNews: any;
  allReleaseNotes: any;
  allWorks: any;
}) {
  const news = allNews.slice(0, 5);
  const releaseNotes = allReleaseNotes.slice(0, 2);
  const works = allWorks;

  const params = {
    slidesPerView: "auto",
    spaceBetween: 16,
  };

  return (
    <>
      <Head>
        <title>SuperGoodMeetings</title>
      </Head>
      <Layout>
        <div className={styles.landing_container}>
          <div className={styles.service_hero_area}>
            <h1>
              定例ミーティングを変える。
              <br />
              プロジェクトが変わる。
            </h1>
            <p>
              定例ミーティングを活用した
              <br />
              プロジェクト推進を実現するクラウドサービス
            </p>
            <div className={styles.service_hero_area_button}>
              <span>
                まずは1プロジェクト(無料)から
                <br className={styles.sp_br} />
                お試しいただけます
              </span>
              <div className={styles.filledButton} role="button">
                <a href="https://sgms.app/signup" id="ga_signup_body">
                  無料で始める
                </a>
              </div>
            </div>
          </div>

          {releaseNotes.length > 0 ? (
            <div className={styles.release_notes}>
              <h2 className={styles.release_notes_title}>リリースノート</h2>
              <div className={styles.release_notes_content}>
                <ul className={styles.release_notes_items}>
                  {releaseNotes.map((post: any, i: number) => (
                    <li key={i}>
                      <Link
                        href={`/release_notes/${encodeURIComponent(post.slug)}`}
                        legacyBehavior
                      >
                        <a>
                          <span>{post.date}</span>
                          {post.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className={styles.release_notes_link}>
                  <Link href="/release_notes" legacyBehavior>
                    もっと見る
                  </Link>
                </div>
              </div>
            </div>
          ) : null}

          <div className={styles.service_resolution}>
            <div className={styles.service_task}>
              <h2>こんな課題をお持ちの方に</h2>
              <ul>
                <li>
                  <figure>
                    <Image
                      className={styles.img}
                      src="/images/illust_task01.svg"
                      alt="プロジェクトが複雑で、リーダーが管理しきれない"
                      layout="fill"
                      objectFit="contain"
                    />
                  </figure>
                  プロジェクトが複雑で、リーダーが管理しきれない
                </li>
                <li>
                  <figure>
                    <Image
                      className={styles.img}
                      src="/images/illust_task02.svg"
                      alt="プロジェクトを取り巻く環境の変化に適応するのが難しい"
                      layout="fill"
                      objectFit="contain"
                    />
                  </figure>
                  プロジェクトを取り巻く環境の変化に適応するのが難しい
                </li>
                <li>
                  <figure>
                    <Image
                      className={styles.img}
                      src="/images/illust_task03.svg"
                      alt="一人ひとりが自律的に行動できるプロジェクトチームを作りたい"
                      layout="fill"
                      objectFit="contain"
                    />
                  </figure>
                  一人ひとりが自律的に行動できるプロジェクトチームを作りたい
                </li>
              </ul>
            </div>
            <figure className={styles.arrow}>
              <Image
                className={styles.img}
                src="/images/icon_arrow.svg"
                alt="下矢印 アイコン"
                layout="fill"
                objectFit="contain"
              />
            </figure>
            <div className={styles.service_effect}>
              <h2>
                SuperGoodMeetingsの<span>活用で期待できる変化</span>
              </h2>
              <ul className={styles.service_effect_items}>
                <li>
                  <figure>
                    <Image
                      className={styles.img}
                      src="/images/illust_change1.svg"
                      alt="イメージイラスト"
                      layout="fill"
                      objectFit="contain"
                    />
                  </figure>
                  プロジェクトの目的やマイルストーン（目標）を常に意識して行動できる
                </li>
                <li>
                  <figure>
                    <Image
                      className={styles.img}
                      src="/images/illust_change2.svg"
                      alt="イメージイラスト"
                      layout="fill"
                      objectFit="contain"
                    />
                  </figure>
                  プロジェクトに関する情報がオープンな場で蓄積・共有される
                </li>
                <li>
                  <figure>
                    <Image
                      className={styles.img}
                      src="/images/illust_change3.svg"
                      alt="イメージイラスト"
                      layout="fill"
                      objectFit="contain"
                    />
                  </figure>
                  定期的に状況の変化を感知することができ、適応しやすくなる
                </li>
              </ul>
            </div>
            <figure className={styles.arrow}>
              <Image
                className={styles.img}
                src="/images/icon_arrow.svg"
                alt="下矢印 アイコン"
                layout="fill"
                objectFit="contain"
              />
            </figure>
            <div className={styles.service_result}>
              <div className={styles.service_result_content}>
                <figure>
                  <Image
                    className={styles.img}
                    src="/images/illust_change4.svg"
                    alt="一人ひとりのメンバーが自律的に動きやすくなる"
                    layout="fill"
                    objectFit="contain"
                  />
                </figure>
                一人ひとりのメンバーが
                <br className={styles.sp_br} />
                自律的に動きやすくなる
              </div>
            </div>
          </div>

          <div className={styles.backgroundSky}>
            <div id="about" className={styles.service_about}>
              <div className={styles.service_about_message1}>
                <div className={styles.content}>
                  <h2>
                    いま必要とされる
                    <br />
                    「自律的に動けるチーム」
                  </h2>
                  <p>
                    社会の状況がめまぐるしく変化し、先の予測がどんどん難しくなっているいま。複雑なプロジェクトを前に進めるために、一人ひとりが自律的に行動できる環境、チームの重要性が高まっています。
                  </p>
                </div>
                <figure>
                  <Image
                    className={styles.img}
                    src="/images/sgms_screenshot1.png"
                    alt="SuperGoodMeetingsのスクリーンショット。トラックが表示されている"
                    layout="fill"
                    objectFit="contain"
                  />
                </figure>
              </div>
              <div className={styles.service_about_message2}>
                <figure>
                  <Image
                    className={styles.img}
                    src="/images/sgms_screenshot2.png"
                    alt="SuperGoodMeetingsのスクリーンショット。ミーティングとアジェンダのリストが表示されている"
                    layout="fill"
                    objectFit="contain"
                  />
                </figure>
                <div className={styles.content}>
                  <h2>
                    定例ミーティングの
                    <br />
                    効果的な運用をサポート
                  </h2>
                  <p>
                    メンバーそれぞれが自律的に動ける環境をつくるために、私たちは「定例ミーティング」をうまく活用する方法を見出しました。SuperGoodMeetingsには、そのための機能を実装しています。
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.service_movie}>
              <h2>
                動画でわかる、
                <span>SuperGoodMeetings</span>
              </h2>
              <div className={styles.service_movie_content}>
                <Image
                  className="movieArea"
                  id="ga_movie"
                  src="/images/movie_thumb.png"
                  alt="クリックで再生"
                  layout="fill"
                  objectFit="contain"
                />
                <YouTube
                  videoId="vE4l29Wlr8k"
                  opts={{
                    height: "200",
                    width: "300",
                  }}
                  onReady={_onReady}
                />
              </div>
            </div>

            <div className={styles.service_start}>
              <div className={styles.service_start_content}>
                <h2>
                  まずは1プロジェクト （ 無料 ）
                  <span>からお試しいただけます</span>
                </h2>
                <p>
                  新しい手法を取り入れるには、いろいろとハードルもあるでしょう。
                  <br />
                  はじめはみなさんの身近にある、ごく小さなプロジェクトからでも、
                  <br />
                  まずは3ヶ月、SuperGoodMeetingsを使ってみませんか？きっと成果を感じていただけるはずです。
                </p>
                <div className={styles.filledButton} role="button">
                  <a href="https://sgms.app/signup" id="ga_signup_body">
                    無料で始める
                  </a>
                </div>
              </div>
            </div>
          </div>

          {news.length > 0 ? (
            <div className={styles.service_news}>
              <h2 className={styles.service_news_title}>お知らせ</h2>
              <div className={styles.service_news_content}>
                <ul className={styles.service_news_items}>
                  {news.map((post: any, i: number) => (
                    <li key={i}>
                      <Link
                        href={`/news/${encodeURIComponent(post.slug)}`}
                        legacyBehavior
                      >
                        <a>
                          <span>{post.date}</span>
                          {post.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className={styles.service_news_link}>
                  <Link href="/news" legacyBehavior>
                    もっと見る
                  </Link>
                </div>
              </div>
            </div>
          ) : null}

          <div id="interview" className={styles.service_interview}>
            <h2 className={styles.service_interview_title}>活用事例</h2>
            <style global jsx>
              {`
                .swiper-button-next,
                .swiper-button-prev {
                  width: 27px;
                }
                .swiper-button-next {
                  background: no-repeat center/100% url(/images/icon_right.svg);
                  right: 0;
                }

                .swiper-button-prev::after,
                .swiper-button-next::after {
                  content: "";
                }
                .swiper-button-prev {
                  background: no-repeat center/100% url(/images/icon_left.svg);
                  left: 0;
                }
                .swiper-pagination-bullet,
                .swiper-pagination-bullet-active {
                  background: white;
                }
                .swiper-slide {
                  width: 100%;
                  height: auto;
                }
                @media screen and (max-width: 1000px) {
                  .swiper-container {
                    padding: 0;
                  }
                  .swiper-button-next,
                  .swiper-button-prev,
                  .swiper-pagination-bullet {
                    display: none;
                  }
                }
              `}
            </style>
            <Swiper
              spaceBetween={16}
              navigation
              pagination={{ clickable: true }}
              slidesPerView={1.15}
              loopedSlides={3}
              breakpoints={{
                1000: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                  width: 1138,
                },
              }}
              className={styles.swiper_container}
            >
              {works.map((work: any, i: number) => (
                <SwiperSlide
                  className={styles.service_interview_content}
                  key={i}
                >
                  <Link href={`/works/${encodeURIComponent(work.slug)}`}>
                    {work.logo && (
                      <figure className={styles.logo}>
                        <Image
                          src={work.logo}
                          alt={work.companyName + "ロゴ"}
                          layout="fill"
                          objectFit="contain"
                        />
                      </figure>
                    )}
                    <figure className={styles.image}>
                      <Image
                        className={styles.img}
                        src={work.thumbnail}
                        alt={work.companyName + "活用事例"}
                        layout="fill"
                        objectFit="contain"
                      />
                    </figure>
                    <h3 className={styles.caption}>{work.title}</h3>
                    <div className={styles.companyInfo}>
                      <p className={styles.companyName}>{work.companyName}</p>
                      <p className={styles.members}>{work.members}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div id="media" className={styles.service_media}>
            <h2 className={styles.service_media_title}>メディア掲載</h2>
            <Swiper
              spaceBetween={16}
              slidesPerView={1.15}
              navigation
              pagination={{ clickable: true }}
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
                  href="https://hatawarawide.jp/kininaru/221129-1
"
                  target="_blank"
                >
                  <h3>はたわらワイド</h3>
                  <p>
                    「動かないプロジェクトはなぜ生まれるの？」プロジェクト推進専門会社のコパイロツトに聞いた
                  </p>
                </a>
              </SwiperSlide>
              <SwiperSlide className={styles.service_media_contents_item}>
                <a
                  href="https://blog.copilot.jp/entry/news-report-20221121"
                  target="_blank"
                >
                  <h3>fukabori.fm</h3>
                  <p>
                    リモートワークにおけるファシリテーションとProject Sprint
                  </p>
                </a>
              </SwiperSlide>
              <SwiperSlide className={styles.service_media_contents_item}>
                <a href="https://bizzine.jp/article/corner/248" target="_blank">
                  <h3>Biz/Zine</h3>
                  <p>これからの「プロジェクト推進」を考える</p>
                </a>
              </SwiperSlide>
              <SwiperSlide className={styles.service_media_contents_item}>
                <a>
                  <h3>TechCrunch Japan</h3>
                  <p>
                    新規事業開発パートナーのコパイロツト、誰でもプロマネを実践できるSuperGoodMeetingのスタートアップ向けプランを開始　
                  </p>
                </a>
              </SwiperSlide>
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

          <div className={styles.service_detail}>
            <div className={styles.pgs}>
              <h2>SuperGoodMeetingsに実装されているメソッドについて</h2>
              <div className={styles.pgs_about}>
                <figure>
                  <div>
                    <Image
                      className={styles.img}
                      src="/images/pjs_logo.png"
                      alt="Project Sprintロゴ"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </figure>
                <p>
                  SuperGoodMeetingsは、運営元である株式会社コパイロツトが開発した、独自のプロジェクト推進フレームワーク
                  「Project Sprint」に基づいて設計されています。「Project
                  Sprint」とは、ミーティングを活用してプロジェクトを推進する方法論です。コパイロツトがこれまでの業務において積み上げてきたプロジェクト推進の実践知を元に、汎用的な方法論にまとめ、オープンソースとして公開しています。
                </p>
              </div>
              <div className={styles.pgs_conference}>
                <h3 className={styles.pgs_title}>Project Sprintの登壇実績</h3>
                <ul className={styles.pgs_link}>
                  <li>経済産業省 DX-Techmembersランチ会（2020.09.29）</li>
                  <li>
                    <Link
                      href="https://itr-lounge.connpass.com/event/183245/"
                      legacyBehavior
                    >
                      <a target="_blank">
                        ITR Lounge ハナシバ vol.5
                        激動の時代、隣のプロジェクトマネージャが取り組んでいる事（2020.08.12）
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://2019.pmconf.jp/" legacyBehavior>
                      <a target="_blank">
                        プロダクトマネージャーカンファレンス 2019（2019.11.13）
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://peatix.com/event/1366420/"
                      legacyBehavior
                    >
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
                    href="https://projectsprint.org"
                    target="_blank"
                  >
                    projectsprint.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.service_trial}>
            <div className={styles.service_trial_heading}>
              <div>
                <Image
                  className={styles.img}
                  src="/images/illust_trial.svg"
                  alt="イメージイラスト"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h2> まずは1プロジェクト （ 無料 ）からお試しいただけます</h2>
            </div>
            <p>
              SuperGoodMeetingsを使えば、プロジェクトの目的や目指すべきゴール、議論したい内容をかんたんに可視化できます。{" "}
            </p>
            <div className={styles.filledButton} role="button">
              <a href="https://sgms.app/signup" id="ga_signup_bottom_body">
                無料で始める
              </a>
            </div>
          </div>

          <div className={styles.newsletter_container}>
            <div className={styles.newsletter}>
              <h2>メールマガジン</h2>
              <MailchimpSubscribe
                url="https://supergoodmeetings.us4.list-manage.com/subscribe/post?u=4914736f05d3b5eb761d836c4&amp;id=d6f47afc4c"
                render={({
                  subscribe,
                  status,
                  message,
                }: {
                  subscribe: any;
                  status: any;
                  message: any;
                }) => (
                  <div>
                    <p>
                      SuperGoodMeetings開発進捗状況や、基本設計にも使われているプロジェクト推進メソッドに関する情報、プロジェクト進行のお役立ちTipsなどをお知らせいたします！
                    </p>
                    <CustomForm
                      status={status}
                      message={message}
                      onValidated={(formData: any) => subscribe(formData)}
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
  const allNews = getAllNews(["slug", "title", "date"]);
  const allReleaseNotes = getAllReleaseNotes(["slug", "title", "date"]);
  const allWorks = getAllWorks([
    "slug",
    "title",
    "date",
    "thumbnail",
    "companyName",
    "members",
    "logo",
  ]);
  return {
    props: { allNews, allReleaseNotes, allWorks },
  };
}
