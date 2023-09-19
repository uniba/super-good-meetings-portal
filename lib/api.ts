import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { last } from "lodash";

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
): { [key: string]: any } {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(directory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: { [key: string]: any } = {};

  if (directory === DIRECTORIES.works) {
    const imageRegexp = /!\[.*?\]\((.*?)\)/;

    const matchImage = content.match(imageRegexp);
    if (matchImage && matchImage[1]) {
      items["image"] = matchImage[1];
    }
  }

  if (
    directory === DIRECTORIES.releaseNotes ||
    directory === DIRECTORIES.works
  ) {
    const headingRegexp = /^(#+) (.+)$/gm;

    const list: any[] = [];
    let currentList = list;
    const listStack: string[] = [];
    let match;

    while ((match = headingRegexp.exec(content)) !== null) {
      let hashes = match[1];
      let heading = match[2];

      if (hashes.length === 1) {
        continue;
      }

      if (
        !listStack.length ||
        hashes.length > listStack[listStack.length - 1].length
      ) {
        const newChildren: string[] = [];
        currentList.push(newChildren);
        listStack.push(hashes);
        currentList = newChildren;
      }

      while (
        listStack.length &&
        hashes.length < listStack[listStack.length - 1].length
      ) {
        listStack.pop();
        currentList = listStack.length ? list[listStack.length - 1] : list;
      }

      currentList.push(heading);
    }
    items["docs"] = list[0];
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
