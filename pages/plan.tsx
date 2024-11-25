import Head from "next/head";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import styles from "./styles/plan.module.scss";
import Image from "next/image";
import Layout from "../components/layout";

export default function Plan() {
  return (
    <>
      <Head>
        <title>プランと料金 - SuperGoodMeetings</title>
      </Head>
      <Layout>
        <div className={styles.plan}>
          <h1 className={styles.plan_title}>プランと料金</h1>
          <p className={`${styles.plan_caption} ${styles.body_text_bold}`}>
            SuperGoodMeetingsはユーザーがオーナー権限を持つアクティブなプロジェクトの数*に応じた料金プランを用意しております。
            <span className={styles.body_text}>
              *別のユーザーに招待されたプロジェクトやアーカイブ済みのプロジェクトは含みません
            </span>
          </p>

          <ul className={styles.plan_list}>
            <li>
              <figure>
                <Image
                  src="/images/plan_free.svg"
                  alt="フリープラン・イメージイラスト"
                  layout="fill"
                  objectFit="contain"
                />
              </figure>
              <h2>フリープラン</h2>
              <div className={styles.price}>
                <span className={styles.large}>0円</span>/ 月
              </div>
              <p className={styles.notice}>
                オーナープロジェクト 最大1
                <br />
                招待可能ユーザー数　無制限
              </p>
              <dl className={`${styles.text} ${styles.body_text_bold}`}>
                まずは SuperGoodMeetings を試したい方向け
              </dl>
            </li>

            <li>
              <figure>
                <Image
                  src="/images/plan_standard.svg"
                  alt="スタンダード・イメージイラスト"
                  layout="fill"
                  objectFit="contain"
                />
              </figure>
              <h2>スタンダードプラン</h2>
              <div className={styles.price}>
                <span className={styles.large}>800円</span>/ 月
                <span className={styles.branket}>(税込 880円) </span>
              </div>
              <p className={styles.notice}>
                オーナープロジェクト 最大5
                <br />
                招待可能ユーザー数　無制限
              </p>
              <dl className={`${styles.text} ${styles.body_text_bold}`}>
                複数プロジェクトを抱える個人やスタートアップの方向け
              </dl>
            </li>

            <li>
              <figure>
                <Image
                  src="/images/plan_enterprise.svg"
                  alt="エンタープライズ・イメージイラスト"
                  layout="fill"
                  objectFit="contain"
                />
              </figure>
              <h2>ビジネスプラン</h2>
              <div className={styles.price}>
                <span className={styles.large}>7,800円</span>/ 月
                <span className={styles.branket}>(税込 8,580円) </span>
              </div>
              <p className={styles.notice}>
                オーナープロジェクト 最大50
                <br />
                招待可能ユーザー数　無制限
              </p>
              <dl className={`${styles.text} ${styles.body_text_bold}`}>
                複数案件を抱えているコンサルファーム、制作会社や、多数のチームを抱える大企業など、より大規模な導入を検討されている方向け
              </dl>
            </li>
          </ul>

          <div className={styles.enterprise}>
            <h2 className={styles.enterprise__title}>エンタープライズプラン</h2>
            <div className={styles.enterprise__body}>
              <div className={styles.enterprise__description}>
                <div className={`${styles.text} ${styles.body_text_bold}`}>
                  株式会社コパイロツトは、企業向けプロジェクト支援サービスを提供しています。
                </div>
                <div className={`${styles.text} ${styles.body_text_bold}`}>
                  この支援で培った知見を活かし、企業向けの機能開発や、ハンズオンサポートを通じて、貴社のニーズに最適なプロジェクト推進環境を提供します。
                </div>
              </div>
              <ul className={`${styles.text} ${styles.body_text_bold} ${styles.enterprise__features}`}>
                <li>情報管理のセキュリティ向上</li>
                <li>SuperGoodMeetings の導入支援、サービスをより効果的に活用するためのハンズオン</li>
                <li>プロジェクト・会議をよりよく進行するための知識を増やす定期セミナーの開催</li>
              </ul>
            </div>
            <div className={`${styles.button} ${styles.enterprise__button_contact}`} role="button">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScCyzYCVpWlBvP6wIDY8_RiWEb5zFt2GHzIB4Jvi8ccWkm9Gw/viewform" id="ga_contact" target="_blank">
                お問い合わせ
              </a>
            </div>
          </div>

          <div className={styles.common_features}>
            <h2>すべてのプランでご利用いただける機能</h2>
            <ul className={`${styles.common_features__features} ${styles.body_text_bold}`}>
              <li>プロジェクト作成（アーカイブ可能）</li>
              <li>ミーティングにおけるアジェンダ作成・管理</li>
              <li>プロジェクトにおけるマイルストーン作成・管理</li>
              <li>ミーティングにおけるログ管理</li>
              <li>ミーティングの作成・管理</li>
              <li>ユーザーのプロジェクト招待</li>
            </ul>
            <div className={`${styles.button} ${styles.common_features__button_try_now}`} role="button">
              <a href="https://sgms.app/login" id="ga_signup_plan">
                今すぐ試す
              </a>
            </div>
            <p className={`${styles.caption} ${styles.body_text_bold}`}>
              プランの変更は「設定」の「プラン変更」メニューからできます。
            </p>
          </div>

          <h2 className={styles.question_title}>よくある質問</h2>

          <Accordion className={styles.accordion} allowZeroExpanded={true}>
            <AccordionItem className={styles.accordion__item}>
              <AccordionItemHeading>
                <AccordionItemButton className={styles.accordion__button}>
                  対応している支払い方法を教えてください
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordion__panel}>
                <p>
                  お支払いにはクレジットカードをご利用できます。
                  <br />
                  クレジットカードのお支払いは毎月一括払いのみとさせていただきます。
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordion__item}>
              <AccordionItemHeading>
                <AccordionItemButton className={styles.accordion__button}>
                  プランごとで使える機能に違いがありますか？
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordion__panel}>
                <p>
                  使える機能に違いはありません。
                  <br />
                  全料金プランにおいて、下記のいずれもご利用いただけます。
                  <br />
                  ・ユーザのプロジェクトへの招待
                  <br />
                  ・トラック、イベント、フェーズ、アジェンダやミーティングの作成
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordion__item}>
              <AccordionItemHeading>
                <AccordionItemButton className={styles.accordion__button}>
                  問い合わせ先と対応時間を教えてください
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordion__panel}>
                <p>
                  メールサポート（受付窓口は
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLScCyzYCVpWlBvP6wIDY8_RiWEb5zFt2GHzIB4Jvi8ccWkm9Gw/viewform"
                    target="_blank"
                  >
                    こちら
                  </Link>
                  ）
                  <br />
                  平日（月曜日～金曜日）10:30～16:30
                  <br />
                  <br />
                  ※いずれも、土日祝日、年末年始・夏季休業期間は除く
                  <br />
                  <br />
                  上記の対応時間外にいただいたお問い合わせにつきましては、内容を確認しお返事いたします。
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </Layout>
    </>
  );
}
