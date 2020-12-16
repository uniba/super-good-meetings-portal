import { useRouter } from 'next/router';
import Link from 'next/link';
import { chunk } from 'lodash';
import { getAllPosts } from '../lib/api';

const PageLink = (page) => {
  return (
    <li key={page}><Link href={{ pathname: '/posts', query: { page } }}>{page}</Link></li>
  )
}

export default function Posts({ allPosts }) {
  const router = useRouter()
  const currentPage = router.query.page ? parseInt(router.query.page, 10) : 1
  const pages = chunk(allPosts, 2)
  const posts = pages[currentPage - 1]
  return (
    <div>
      <h1>お知らせ</h1>
      <div>
        {posts.map((post, i) => (
          <div key={i}>
            <p>
              <span>{post.date}</span>
              <Link href={`/posts/${encodeURIComponent(post.slug)}`}>
                {post.title}
              </Link>
            </p>
          </div>
        ))}
      </div>
      <ul>
        {pages.map((_, i) => {
          const page = i + 1;
          if (page === currentPage) {
            return <li key={page}>{page}</li>;
          } else {
            // return <PageLink page={page} />
            return <li key={page}><Link href={{ pathname: '/posts', query: { page } }}>{`${page}`}</Link></li>;
          }
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['slug', 'title', 'date']);
  return {
    props: { allPosts }
  };
}
