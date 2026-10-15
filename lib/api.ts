import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const DIRECTORIES = {
  posts: join(process.cwd(), "_posts"),
  news: join(process.cwd(), "_news"),
  releaseNotes: join(process.cwd(), "_release_notes"),
  works: join(process.cwd(), "_works"),
};

function getSlugs(directory: string): string[] {
  return fs.readdirSync(directory).filter((file) => file.endsWith(".md"));
}

export function getBySlug(
  directory: string,
  slug: string,
  fields: string[] = []
) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(directory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: { [key: string]: any } = {};

  // 画像取得
  if (directory === DIRECTORIES.works) {
    const imageRegexp = /!\[.*?\]\((.*?)\)/;

    const matchImage = content.match(imageRegexp);
    if (matchImage && matchImage[1]) {
      items["thumbnail"] = matchImage[1];
    }
  }

  // 目次配列取得
  if (
    directory === DIRECTORIES.releaseNotes ||
    directory === DIRECTORIES.works
  ) {
    const headingRegexp = /^(#+) (.+)$/gm;

    // list に直接 push する形にしておく。別の変数を通して push すると、
    // Next.js 14 の SWC の圧縮が list を空のままとみなし、目次が null になる
    const list: any[] = [];
    const listStack: any[][] = [];
    let match;

    while ((match = headingRegexp.exec(content)) !== null) {
      const depth = match[1].length - 2; // h2 が 0
      const heading = match[2];

      if (depth < 0) {
        continue;
      }

      while (listStack.length > depth + 1) {
        listStack.pop();
      }

      if (listStack.length === depth) {
        const newChildren: any[] = [];
        if (listStack.length === 0) {
          list.push(newChildren);
        } else {
          listStack[listStack.length - 1].push(newChildren);
        }
        listStack.push(newChildren);
      }

      listStack[depth].push(heading);
    }

    items["docs"] = list[0];

    if (typeof items["docs"] === "undefined") {
      items["docs"] = null;
    }
  }

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAll(directory: string, fields: string[] = []): any[] {
  const slugs = getSlugs(directory);
  const posts = slugs
    .map((slug) => getBySlug(directory, slug, fields))
    .sort((post1: any, post2: any) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export const getPostsBySlug = (slug: string, fields: string[] = []) =>
  getBySlug(DIRECTORIES.posts, slug, fields);
export const getNewsBySlug = (slug: string, fields: string[] = []) =>
  getBySlug(DIRECTORIES.news, slug, fields);
export const getReleaseNotesBySlug = (slug: string, fields: string[] = []) =>
  getBySlug(DIRECTORIES.releaseNotes, slug, fields);
export const getWorksBySlug = (slug: string, fields: string[] = []) =>
  getBySlug(DIRECTORIES.works, slug, fields);

export const getAllPosts = (fields: string[] = []) =>
  getAll(DIRECTORIES.posts, fields);
export const getAllNews = (fields: string[] = []) =>
  getAll(DIRECTORIES.news, fields);
export const getAllReleaseNotes = (fields: string[] = []) =>
  getAll(DIRECTORIES.releaseNotes, fields);
export const getAllWorks = (fields: string[] = []) =>
  getAll(DIRECTORIES.works, fields);
