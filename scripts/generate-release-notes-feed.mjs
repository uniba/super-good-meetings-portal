// リリースノートの RSS 2.0 フィード（out/release_notes/feed.xml）を生成する。
// RSS リーダーで中身まで読めるよう、各回の本文を HTML にして content:encoded に入れる。
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

const SITE_URL = "https://supergoodmeetings.com";
const FEED_URL = `${SITE_URL}/release_notes/feed.xml`;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.join(__dirname, "..", "_release_notes");
const OUT_DIR = path.join(__dirname, "..", "out", "release_notes");

const escapeXml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// 本文に "]]>" が現れても CDATA が途中で閉じないように分割する
const cdata = (value) => `<![CDATA[${value.replace(/]]>/g, "]]]]><![CDATA[>")}]]>`;

// frontmatter の date は "2026.10.20" 形式。時刻を持たないので日本時間の 0 時として扱う
const toRfc822 = (date) => {
  const [year, month, day] = String(date).split(".").map(Number);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const weekday = days[new Date(Date.UTC(year, month - 1, day)).getUTCDay()];
  const dd = String(day).padStart(2, "0");
  return `${weekday}, ${dd} ${months[month - 1]} ${year} 00:00:00 +0900`;
};

// [docs] はページ側で目次に置き換える目印なので、フィードでは消す。
// <br> などの生 HTML は自前のコンテンツなので、そのまま通す
const markdownToHtml = async (markdown) => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown.replace(/^\s*\[docs\]\s*$/gm, ""));
  return String(result).trim();
};

// content:encoded を読まないリーダー（Slack の RSS アプリなど）向けに、本文の先頭をプレーンテキストで添える
const toExcerpt = (html, length = 200) => {
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > length ? `${text.slice(0, length)}…` : text;
};

const files = fs
  .readdirSync(SRC_DIR)
  .filter((f) => f.endsWith(".md"))
  .sort()
  .reverse();

const items = [];
for (const file of files) {
  const slug = file.replace(/\.md$/, "");
  const { data, content } = matter(fs.readFileSync(path.join(SRC_DIR, file), "utf8"));
  const link = `${SITE_URL}/release_notes/${slug}`;
  const html = await markdownToHtml(content);

  items.push(
    [
      "    <item>",
      `      <title>${escapeXml(data.title || slug)}</title>`,
      `      <link>${link}</link>`,
      `      <guid isPermaLink="true">${link}</guid>`,
      `      <pubDate>${toRfc822(data.date)}</pubDate>`,
      `      <description>${escapeXml(toExcerpt(html))}</description>`,
      `      <content:encoded>${cdata(html)}</content:encoded>`,
      "    </item>",
    ].join("\n")
  );
}

const lastBuildDate = items.length > 0 ? toRfc822(matter(fs.readFileSync(path.join(SRC_DIR, files[0]), "utf8")).data.date) : "";

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>SuperGoodMeetings リリースノート</title>
    <link>${SITE_URL}/release_notes</link>
    <atom:link href="${FEED_URL}" rel="self" type="application/rss+xml" />
    <description>SuperGoodMeetings の新機能・改善・不具合修正のお知らせ</description>
    <language>ja</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${items.join("\n")}
  </channel>
</rss>
`;

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, "feed.xml"), feed);

console.log(`Generated RSS feed with ${items.length} items in ${OUT_DIR}`);
