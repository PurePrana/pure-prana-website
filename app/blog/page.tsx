import { getPaginatedPosts, getAllPosts } from '@/lib/blog'
import BlogClient from './BlogClient'

interface BlogPageProps {
  searchParams: {
    page?: string
  }
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams.page) || 1
  const { posts, totalPages, totalPosts } = getPaginatedPosts(currentPage, 6)
  const allPosts = getAllPosts()
  const featuredPosts = posts.slice(0, 3)

  return (
    <BlogClient
      posts={posts}
      allPosts={allPosts}
      featuredPosts={featuredPosts}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  )
}
