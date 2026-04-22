const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const SRC_DIR = path.join(__dirname, "..", "_release_notes");
const OUT_DIR = path.join(__dirname, "..", "out", "release_notes");

fs.mkdirSync(OUT_DIR, { recursive: true });

const files = fs.readdirSync(SRC_DIR).filter((f) => f.endsWith(".md"));

for (const file of files) {
  const srcPath = path.join(SRC_DIR, file);
  const raw = fs.readFileSync(srcPath, "utf8");
  const { data, content } = matter(raw);
  const title = data.title || "";
  const body = `# ${title}\n\n${content.replace(/^\n+/, "")}`;
  fs.writeFileSync(path.join(OUT_DIR, file), body);
}

console.log(`Generated ${files.length} markdown files in ${OUT_DIR}`);
