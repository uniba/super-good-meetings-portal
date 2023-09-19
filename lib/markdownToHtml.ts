import { Plugin, Preset, Transformer, unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

const createNodeTree = (docsArr: Array<string>, parent: any) => {
  docsArr.forEach((doc) => {
    console.log(doc, typeof doc);
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
      console.log("11111");
      if (node.tagName === "p" && node.children[0].type === "text") {
        console.log("22222");
        if (node.children[0].value.startsWith("[docs]")) {
          console.log("FIND docs");
          const parentUL = getULElement();
          node.children = [parentUL];
          createNodeTree(docsArr, parentUL);
        }
      }
    });
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
  console.log(JSON.stringify(docsArr, null, 2));
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
