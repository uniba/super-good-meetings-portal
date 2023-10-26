import Head from "next/head";
import Link from "next/link";
import styles from "./styles/policy.module.scss";
import Layout from "../components/layout";

export default function Terms() {
  return (
    <>
      <Head>
        <title>セキュリティポリシー - SuperGoodMeetings</title>
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
                <Link href="/terms" legacyBehavior>
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="/law" legacyBehavior>
                  特定商取引法に基づく表示
                </Link>
              </li>
              <li>
                <Link href="/security" legacyBehavior>
                  セキュリティホワイトペーパー
                </Link>
              </li>
              <li className={styles.active}>
                <Link href="/policy" legacyBehavior>
                  セキュリティポリシー
                </Link>
              </li>
            </ul>
          </nav>

          <h1>セキュリティポリシー</h1>
          <p>
            本文書では、株式会社コパイロツトおよびユニバ株式会社（以下、両者を合わせて「当社」と呼ぶ）による、SuperGoodMeetingsの運営に関わる情報セキュリティ上の取り組みを記述する。
          </p>

          <h2>基本方針</h2>

          <dl>
            <dd>
              <dl className={styles.numberList}>
                <dd>
                  当社は、組織的かつ継続的な情報セキュリティの改善・向上に努める
                </dd>
                <dd>
                  当社のメンバー、とりわけSuperGoodMeetingsの開発・運営関係者は、継続的な情報セキュリティの改善・向上のために必要な知識と技術を絶えず学習する
                </dd>
                <dd>
                  当社は、情報セキュリティに関わる法令、規制、規範、契約上の義務を遵守するとともに、ユーザの期待に応える
                </dd>
                <dd>
                  当社は、情報セキュリティに関わる法令違反、契約違反及び事故が発生した場合には適切に対処し、再発防止に努める
                </dd>
                <dd>
                  当社は、本文書策定後も、継続的に、組織的安全管理措置、人的安全管理措置、物理的安全管理措置、技術的安全管理措の拡充に努める
                </dd>
              </dl>
            </dd>
          </dl>

          <h2>組織体制</h2>

          <dl>
            <dt>情報セキュリティ責任者の任命</dt>
            <dl className={styles.discList}>
              <dd>
                情報セキュリティ責任者としてユニバ株式会社の村山遼を任命する
              </dd>
              <dd>
                情報セキュリティ責任者は、本文書の内容および本文書に基づく具体的な情報セキュリティ対策の実施に関わる権限と責任を有する
              </dd>
            </dl>
            <dt>適用範囲</dt>
            <dd>
              本文書の適用者は、経営陣、従業員を含めた、当社の情報資産を利用するすべての者である。
            </dd>
            <dt>外部委託</dt>
            <dd>
              本文書の適用範囲内で行う業務を外部の第三者に委託する場合には、契約上で遵守するべきセキュリティ管理策を明確にし、セキュリティ事故時
              の責任に関しても明確にしなければならない。
            </dd>
            <dt>秘密保持契約の締結</dt>
            <dd>
              当社では、従業員及び外部委託先との間で秘密保持契約の締結を行い、組織的に情報セキュリティに対する体制を整えている。なお、株式会社コパイロツトとユニバ株式会社間でも秘密保持契約を締結している。
            </dd>
          </dl>

          <h2>当社が扱う情報資産の範囲と管理方法</h2>
          <p>
            SuperGoodMeetingsにおいて、特に情報資産は下記の3つに大別される。
          </p>
          <dl>
            <dt>ユーザー情報</dt>
            <dd>
              ユーザーの氏名やメールアドレスといった個人情報、決済システム連携用の識別子など、特定の個人に紐付く情報を
              <b>ユーザー情報</b>
              と呼ぶ。ユーザー情報については、当社の定める利用規約及びプライバシーポリシーの定めに基づき、サービスの安定した運営や継続的な品質向上のために必要な限りにおいてアクセスする可能性がある。
            </dd>
            <dt>プロジェクト情報</dt>
            <dd>
              SuperGoodMeetingの主要機能であるプロジェクトやミーティングの入力機能を通して、ユーザの利益に関わる情報が格納される可能性がある。これらを
              <b>プロジェクト情報</b>
              と呼ぶ。プロジェクト情報は、当社の定める利用規約及びプライバシーポリシーに定める場合を除いて、当社は閲覧又は利用しない。また閲覧権限を付与する担当者の範囲も最小化する。
            </dd>
            <dt>システム情報</dt>
            <dd>
              決済サービス連携用のアクセスキーや、AWS
              のアクセスキー、データベースの接続情報等を<b>システム情報</b>
              と呼ぶ。システム情報はアプリケーションのソースコードから分離して
              <a
                target="_blank"
                href="https://devcenter.heroku.com/ja/articles/config-vars"
              >
                Herokuの環境設定
              </a>
              上に格納し、必要最小限の開発メンバーのみに閲覧・変更権限を限定する。
            </dd>
            <dt>当社が保存しない情報</dt>
            <dd>以下の情報は当社が管理するサーバには保存しない。</dd>
            <dd>
              <dl className={styles.simplelist}>
                <dt>クレジットカード番号</dt>
                <dd>
                  有料プランの契約時に
                  <a target="_blank" href="https://sgms.app">
                    https://sgms.app
                  </a>
                  上から入力するクレジットカード番号は、当社が管理するサーバを経由せず直接決済サービスに送信される。クレジットカード番号は決済サービスの管理画面にログインすることで確認可能だが、下四桁を除いてマスクされているため、当社がクレジットカード番号を完全な形で知ることは不可能である。
                </dd>
                <dt>平文のユーザパスワード</dt>
                <dd>
                  メールアドレスによるユーザー登録時に入力したユーザーパスワードは必ずハッシュ化してデータベースに保存する。
                </dd>
                <dt>平文のプロジェクトパスワード</dt>
                <dd>
                  プロジェクト情報を外部公開する際に設定可能なパスワードは必ずハッシュ化してデータベースに保存する。
                </dd>
              </dl>
            </dd>
          </dl>

          <h2>違反時の対応</h2>
          <dl className={styles.discList}>
            <dd>
              本文書違反又は当社の情報セキュリティが侵害されたと思われる事象が判明した場合は、速やかかつ適切に対応しなければならない。
            </dd>
            <dd>
              当社は、本文書の違反者に対し、適切かつ厳格な措置をとることとする。
            </dd>
          </dl>

          <p className={styles.caption}>2023年10月25日　制定</p>
        </div>
      </Layout>
    </>
  );
}
