import { Plugin, Preset, Transformer, unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";
import styles from "../pages/styles/news_single.module.scss";

const createNodeTree = (docsArr: Array<string>, parent: any) => {
  docsArr.forEach((doc) => {
    if (typeof doc === "string") {
      const li = getLIElement(doc);
      const a = getATextElement(doc);
      li.children.push(a);
      parent.children.push(li);
      return;
    } else {
      const ul = getULElement();
      parent.children.push(ul);
      createNodeTree(doc, ul);
      return false;
    }
  });
};

const insertDoc = (docsArr: Array<any>) => {
  return (tree: any) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "p" && node.children[0].type === "text") {
        if (node.children[0].value.startsWith("[docs]")) {
          const tocs = getTocsElement();
          const parentUL = getULElement();
          node.children = [parentUL];
          tocs.children.push(parentUL);
          createNodeTree(docsArr, parentUL);
          node.children = [tocs];
        }
      }
    });
  };
};

const getTocsElement = () => {
  return {
    type: "element",
    tagName: "div",
    properties: {
      className: styles.post_docs,
    },
    children: [
      {
        type: "element",
        tagName: "h2",
        properties: {
          className: styles.post_docs_title,
        },
        children: [
          {
            type: "text",
            value: "目次",
          },
        ],
      },
    ] as Array<any>,
  };
};

const getULElement = () => {
  return {
    type: "element",
    tagName: "ul",
    properties: {},
    children: [] as Array<any>,
  };
};

const getLIElement = (doc: string) => {
  return {
    type: "element",
    tagName: "li",
    properties: {},
    children: [] as Array<any>,
  };
};

const getATextElement = (text: string) => {
  return {
    type: "element",
    tagName: "a",
    properties: {
      href: `#${text}`,
    },
    children: [
      {
        type: "text",
        value: text,
      },
    ],
  };
};

const insertId = () => {
  return (tree: any) => {
    visit(tree, "element", (node) => {
      if (
        (node.tagName === "h2" ||
          node.tagName === "h3" ||
          node.tagName === "h4") &&
        node.children[0].type === "text"
      ) {
        node.properties = {
          id: node.children[0].value,
        };
      }
    });
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
      return insertId();
    })
    .use(rehypeStringify, { allowDangerousHtml: true }) // hast → html
    .process(markdown); // 一連の処理にマークダウンを投入

  return result.toString();
}
