# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 作業に着手するまえのルール

- docs 以下のドキュメントに目を通すこと

## Development Commands

### Common Commands
- `npm install` - Install dependencies
- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prepare` - Setup Husky hooks

### Build Process
- Uses Next.js with static export configuration (`output: "export"`)
- `npm run postbuild` - Generates sitemap after build using next-sitemap

## Project Architecture

This is a Next.js-based static website for SuperGoodMeetings, a cloud meeting management service. The project uses TypeScript and follows a traditional Next.js pages architecture.

### Directory Structure

- `pages/` - Next.js pages with TypeScript (.tsx files)
  - Main pages: index.tsx, plan.tsx, news.tsx, posts.tsx, works.tsx, release_notes.tsx
  - Legal pages: law.tsx, policy.tsx, security.tsx, terms.tsx
  - Dynamic routes: `[slug].tsx` files for content pages
- `components/` - React components (.jsx files)
  - Core components: header.jsx, footer.jsx, layout.jsx, customform.jsx
- `lib/` - Utility libraries
  - `api.ts` - Content management functions for markdown files
  - `markdownToHtml.ts` - Markdown processing with remark/rehype
  - `gtag.ts` - Google Analytics integration
- `styles/` - SCSS stylesheets with compiled CSS
- `_news/`, `_posts/`, `_release_notes/`, `_works/` - Markdown content directories
- `public/` - Static assets

### Content Management System

The site uses a file-based CMS with markdown files:
- Content stored in underscore-prefixed directories (`_news/`, `_posts/`, etc.)
- Each markdown file has frontmatter with `title` and `date` fields
- Content is processed through gray-matter and converted to HTML via remark/rehype

### Styling Architecture

- Uses SCSS with CSS compilation
- Modular stylesheets: normalize.scss, base_styles.scss, color.scss, typo.scss
- Component-specific styles in `components/styles/` directory

### Third-party Integrations

- React YouTube for video embedding
- React Modal for modal components
- React Mailchimp Subscribe for newsletter integration
- React Accessible Accordion for expandable content
- Swiper for carousel/slider functionality
- React Responsive for responsive design utilities

### Deployment Setup

- Vercel-based deployment with GitHub Actions
- Branch-specific domains:
  - `master` → supergoodmeetings.com (Production)
  - `devel` → supergoodemeetings.uni.ba (Preview)
- Static export configuration for optimal performance
- Google Analytics integration configured

### Development Workflow

1. Content updates: Add .md files to appropriate `_*` directories
2. Commit to `devel` branch triggers staging deployment
3. Create PR from `devel` to `master` for production deployment
4. Husky pre-commit hooks ensure code quality with lint-staged

### TypeScript Configuration

- Strict TypeScript configuration enabled
- Path aliasing: `@/*` maps to root directory
- Next.js plugin integration for enhanced TypeScript support

## Important Notes

- The project uses Node.js version 20.x (specified in package.json engines)
- Static export mode means no server-side features are available
- Images are unoptimized due to static export configuration
- All styling uses SCSS with automatic CSS compilation