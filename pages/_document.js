import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from '../lib/gtag'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KQJWBQH')`;
    const gtmFrame = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KQJWBQH"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    return (
      <Html>
        <Head>
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <meta
            name="description"
            content="SuperGoodMeetings / スーパーグッドミーティングスは、複数のミーティングを俯瞰しながら、ミーティングやアジェンダを直感的に編集することができる、ミーティング活用ツールです。ミーティングを活用してプロジェクトを成功に向けて推進します。"
          />
          <meta property="og:title" content="SuperGoodMeetings" />
          <meta
            property="og:description"
            content="SuperGoodMeetings / スーパーグッドミーティングスは、複数のミーティングを俯瞰しながら、ミーティングやアジェンダを直感的に編集することができる、ミーティング活用ツールです。ミーティングを活用してプロジェクトを成功に向けて推進します。"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://supergoodmeetings.com" />
          <meta
            property="og:image"
            content="https://supergoodmeetings.com/images/og_sgm.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="SuperGoodMeetings" />
          <meta
            name="twitter:description"
            content="SuperGoodMeetings / スーパーグッドミーティングスは、複数のミーティングを俯瞰しながら、ミーティングやアジェンダを直感的に編集することができる、ミーティング活用ツールです。ミーティングを活用してプロジェクトを成功に向けて推進します。"
          />
          <meta name="twitter:url" content="https://supergoodmeetings.com" />
          <meta
            name="twitter:image"
            content="https://supergoodmeetings.com/images/og_sgm.png"
          />
          <meta
            name="msapplication-square70x70logo"
            content="/images/icons/site-tile-70x70.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="/images/icons/site-tile-150x150.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="/images/icons/site-tile-310x150.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="/images/icons/site-tile-310x310.png"
          />
          <meta name="msapplication-TileColor" content="#0078d7" />
          <link
            rel="shortcut icon"
            type="image/vnd.microsoft.icon"
            href="/images/icons/favicon.ico"
          />
          <link
            rel="icon"
            type="image/vnd.microsoft.icon"
            href="/images/icons/favicon.ico"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/images/icons/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/images/icons/apple-touch-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/images/icons/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/images/icons/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/images/icons/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/images/icons/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/images/icons/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/images/icons/apple-touch-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/icons/apple-touch-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="36x36"
            href="/images/icons/android-chrome-36x36.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="48x48"
            href="/images/icons/android-chrome-48x48.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="72x72"
            href="/images/icons/android-chrome-72x72.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/images/icons/android-chrome-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="128x128"
            href="/images/icons/android-chrome-128x128.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="144x144"
            href="/images/icons/android-chrome-144x144.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="152x152"
            href="/images/icons/android-chrome-152x152.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/images/icons/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="256x256"
            href="/images/icons/android-chrome-256x256.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="384x384"
            href="/images/icons/android-chrome-384x384.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/images/icons/android-chrome-512x512.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="36x36"
            href="/images/icons/icon-36x36.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="48x48"
            href="/images/icons/icon-48x48.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="72x72"
            href="/images/icons/icon-72x72.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/images/icons/icon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="128x128"
            href="/images/icons/icon-128x128.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="144x144"
            href="/images/icons/icon-144x144.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="152x152"
            href="/images/icons/icon-152x152.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="160x160"
            href="/images/icons/icon-160x160.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/images/icons/icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="196x196"
            href="/images/icons/icon-196x196.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="256x256"
            href="/images/icons/icon-256x256.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="384x384"
            href="/images/icons/icon-384x384.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/images/icons/icon-512x512.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/icons/icon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="24x24"
            href="/images/icons/icon-24x24.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/icons/icon-32x32.png"
          />
          <link rel="manifest" href="/images/icons/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700,900|Lato:400,900|Open+Sans:400,700,700i,800,800i&display=swap"
            rel="stylesheet"
          />
          <meta name="facebook-domain-verification" content="9dxq3avza6zfndu06nwwvbgmvdx7t0" />
          <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{ __html: gtmFrame }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
