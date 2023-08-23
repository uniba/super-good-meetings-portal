import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const DIRECTORIES = {
  posts: join(process.cwd(), "_posts"),
  releases: join(process.cwd(), "_releases"),
  achievements: join(process.cwd(), "_achievements"),
};

function getSlugs(directory: string): string[] {
  return fs.readdirSync(directory);
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

export const getPostBySlug = (slug: string, fields: string[] = []) =>
  getBySlug(DIRECTORIES.posts, slug, fields);
export const getReleaseBySlug = (slug: string, fields: string[] = []) =>
  getBySlug(DIRECTORIES.releases, slug, fields);
export const getAchievementBySlug = (slug: string, fields: string[] = []) =>
  getBySlug(DIRECTORIES.achievements, slug, fields);

export const getAllPosts = (fields: string[] = []) =>
  getAll(DIRECTORIES.posts, fields);
export const getAllReleases = (fields: string[] = []) =>
  getAll(DIRECTORIES.releases, fields);
export const getAllAchievements = (fields: string[] = []) =>
  getAll(DIRECTORIES.achievements, fields);
