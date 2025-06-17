import Fuse from 'fuse.js'
import { BlogPost } from './blog-types'

export interface SearchResult {
  item: BlogPost
  score: number
}

export function createSearchIndex(posts: BlogPost[]) {
  const options = {
    keys: [
      { name: 'title', weight: 0.4 },
      { name: 'description', weight: 0.3 },
      { name: 'tags', weight: 0.2 },
      { name: 'content', weight: 0.1 },
    ],
    threshold: 0.4,
    includeScore: true,
  }

  return new Fuse(posts, options)
}

export function searchPosts(posts: BlogPost[], query: string): SearchResult[] {
  if (!query || query.trim() === '') return []
  
  const fuse = createSearchIndex(posts)
  const results = fuse.search(query)
  
  return results.map(result => ({
    item: result.item,
    score: result.score || 0,
  }))
}