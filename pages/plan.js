import Head from "next/head";
import Link from "next/link";
import Modal from "react-modal";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import styles from "./styles/plan.scss";

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
          <p className={styles.plan_caption}>
            SuperGoodMeetingはアクティブプロジェクトの数*に応じた料金プランを用意しております。
            <span>
              *アーカイブしたプロジェクトは含まれません。現在ご利用いただいているプロジェクトの数になります。
            </span>
          </p>

          <ul className={styles.plan_list}>
            <li>
              <figure>
                <img
                  src="/images/plan_free.svg"
                  alt="フリープラン・イメージイラスト"
                />
              </figure>
              <h2>フリープラン</h2>
              <p>アクティブプロジェクト数 1</p>
              <dl>
                <dt>まずは SuperGoodMeetings を試したい方向け</dt>
                <dt>自由にプロジェクトを作成、アーカイブ可能</dt>
                <dt>ユーザーのプロジェクトへの招待</dt>
                <dt>
                  トラック、イベント、フェーズ、アジェンダやミーティングの作成
                </dt>
              </dl>
              <div>0円 / 月</div>
            </li>

            <li>
              <figure>
                <img
                  src="/images/plan_standard.svg"
                  alt="スタンダード・イメージイラスト"
                />
              </figure>
              <h2>スタンダードプラン</h2>
              <p>アクティブプロジェクト数50</p>
              <dl>
                <dt>
                  個人や小規模スタートアップ、企業の一部門のプロジェクトマネージャ向け
                </dt>
                <dt>自由にプロジェクトを作成、アーカイブ可能</dt>
                <dt>ユーザーのプロジェクトへの招待</dt>
                <dt>
                  トラック、イベント、フェーズ、アジェンダやミーティングの作成
                </dt>
              </dl>
              <div>
                7,800円 <span> (税込 8,580円) </span>/ 月
              </div>
            </li>

            <li>
              <figure>
                <img
                  src="/images/plan_enterprise.svg"
                  alt="エンタープライズ・イメージイラスト"
                />
              </figure>
              <h2>エンタプライズプラン</h2>
              <p>お問い合わせください</p>
              <dl>
                <dt>より大規模な導入を検討する方向け</dt>
                <dt>自由にプロジェクトを作成、アーカイブ可能</dt>
                <dt>ユーザーのプロジェクトへの招待</dt>
                <dt>
                  トラック、イベント、フェーズ、アジェンダやミーティングの作成
                </dt>
              </dl>
              <div>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfc2sXdcxDEz5Boi08Vymj7EtGeZAsCSljg6bBB0g1d9Aea0g/viewform">
                  <a target="_blank" id="ga_contact_header">
                    お問い合わせ
                  </a>
                </Link>
              </div>
            </li>
          </ul>

          <div className={styles.button} role="button">
            <a href="http://sgms.app/signup" id="ga_signup_body">
              今すぐ試す
            </a>
          </div>
          <p className={styles.caption}>
            プランの変更は「設定」の「プラン変更」メニューからできます。
          </p>

          <h2>よくある質問</h2>

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
                  メールサポート（受付窓口はこちら）
                  <br />
                  平日（月曜日～金曜日）10:30～16:30
                  <br />
                  ※いずれも、土日祝日、年末年始・夏季休業期間は除く
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
