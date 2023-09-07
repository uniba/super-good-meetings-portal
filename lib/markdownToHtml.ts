import { Plugin, Preset, Transformer, unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

const insertDoc = (docsArr: Array<string>) => {
  return (tree: any) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "p" && node.children[0].type === "text") {
        if (node.children[0].value.startsWith("[docs]")) {
          console.log(node);
          node.tagName = "div";
          node.properties = {
            className: ["docs"],
          };
          node.children = [];
          docsArr.forEach((doc) => {
            node.children.push({
              type: "element",
              tagName: "a",
              properties: {
                href: `#${doc}`,
              },
              children: [
                {
                  type: "text",
                  value: doc,
                },
              ],
            });
          });
        }
      }
    });
  };
};

const insertId = (docsArr: Array<string>) => {
  return (tree: any) => {
    visit(tree, "element", (node) => {});
  };
};

type MarkdownToHtmlArgs = (
  markdown: string,
  docsArr: string[]
) => Promise<string>;

export default async function markdownToHtml<MarkdownToHtmlArgs>(
  markdown: string,
  docsArr = []
) {
  const result = await unified()
    .use(remarkParse as unknown as Plugin) // マークダウン → mdast
    .use(remarkRehype as unknown as Plugin) // mdast → hast
    .use(() => {
      return insertDoc(docsArr);
    })
    .use(() => {
      return insertId(docsArr);
    })
    .use(rehypeStringify, { allowDangerousHtml: true }) // hast → html
    .process(markdown); // 一連の処理にマークダウンを投入

  return result.toString();
}
