import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { BlogPost } from './blog-types'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function createPostsDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
  }
}

export function getPostSlugs() {
  createPostsDirectory()
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx'))
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const realSlug = slug.replace(/\.mdx$/, '')
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const reading = readingTime(content)

    return {
      slug: realSlug,
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      author: data.author || 'shagun',
      category: data.category || 'wellness-tips',
      tags: data.tags || [],
      image: data.image,
      featured: data.featured || false,
      readingTime: reading,
      content,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))
  
  return posts
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter(post => post.featured)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(post => post.category === category)
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter(post => post.tags.includes(tag))
}

export function getRelatedPosts(slug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(slug)
  if (!currentPost) return []

  const allPosts = getAllPosts().filter(post => post.slug !== slug)
  
  // Score posts based on shared tags and category
  const scoredPosts = allPosts.map(post => {
    let score = 0
    
    // Same category = 3 points
    if (post.category === currentPost.category) score += 3
    
    // Each shared tag = 1 point
    currentPost.tags.forEach(tag => {
      if (post.tags.includes(tag)) score += 1
    })
    
    return { post, score }
  })
  
  // Sort by score and return top matches
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post)
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tagSet = new Set<string>()
  
  posts.forEach(post => {
    post.tags.forEach(tag => tagSet.add(tag))
  })
  
  return Array.from(tagSet).sort()
}

// Pagination helpers
export function getPaginatedPosts(page: number = 1, postsPerPage: number = 10) {
  const allPosts = getAllPosts()
  const totalPosts = allPosts.length
  const totalPages = Math.ceil(totalPosts / postsPerPage)
  
  const startIndex = (page - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  
  const posts = allPosts.slice(startIndex, endIndex)
  
  return {
    posts,
    currentPage: page,
    totalPages,
    totalPosts,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
  }
}