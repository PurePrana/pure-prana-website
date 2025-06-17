import { 
  getPostBySlug, 
  getAllPosts, 
  getFeaturedPosts,
  getPostsByCategory,
  getPostsByTag,
  getRelatedPosts,
  getPaginatedPosts 
} from '@/lib/blog'

// Mock fs module
jest.mock('fs')
const fs = require('fs')

describe('Blog Utilities', () => {
  const mockPostContent = `---
title: Test Post
description: This is a test post
date: 2024-01-01
author: shagun
category: wellness-tips
tags: [test, blog]
featured: true
---

This is the post content.`

  const mockPosts = ['test-post.mdx', 'another-post.mdx']

  beforeEach(() => {
    fs.existsSync.mockReturnValue(true)
    fs.mkdirSync.mockImplementation(() => {})
    fs.readdirSync.mockReturnValue(mockPosts)
    fs.readFileSync.mockReturnValue(mockPostContent)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('getPostBySlug', () => {
    it('should return a post by slug', () => {
      const post = getPostBySlug('test-post')
      
      expect(post).toBeTruthy()
      expect(post?.title).toBe('Test Post')
      expect(post?.slug).toBe('test-post')
      expect(post?.description).toBe('This is a test post')
      expect(post?.featured).toBe(true)
    })

    it('should handle .mdx extension in slug', () => {
      const post = getPostBySlug('test-post.mdx')
      expect(post?.slug).toBe('test-post')
    })

    it('should return null for non-existent post', () => {
      fs.readFileSync.mockImplementation(() => {
        throw new Error('File not found')
      })
      
      const post = getPostBySlug('non-existent')
      expect(post).toBeNull()
    })
  })

  describe('getAllPosts', () => {
    it('should return all posts sorted by date', () => {
      const posts = getAllPosts()
      
      expect(posts).toHaveLength(2)
      expect(posts[0].slug).toBe('test-post')
    })

    it('should filter out null posts', () => {
      fs.readFileSync
        .mockReturnValueOnce(mockPostContent)
        .mockImplementationOnce(() => {
          throw new Error('Invalid post')
        })
      
      const posts = getAllPosts()
      expect(posts).toHaveLength(1)
    })
  })

  describe('getFeaturedPosts', () => {
    it('should return only featured posts', () => {
      const featuredContent = mockPostContent
      const nonFeaturedContent = mockPostContent.replace('featured: true', 'featured: false')
      
      fs.readFileSync
        .mockReturnValueOnce(featuredContent)
        .mockReturnValueOnce(nonFeaturedContent)
      
      const posts = getFeaturedPosts()
      expect(posts).toHaveLength(1)
      expect(posts[0].featured).toBe(true)
    })
  })

  describe('getPostsByCategory', () => {
    it('should return posts by category', () => {
      const posts = getPostsByCategory('wellness-tips')
      
      expect(posts).toHaveLength(2)
      expect(posts[0].category).toBe('wellness-tips')
    })

    it('should return empty array for non-existent category', () => {
      const posts = getPostsByCategory('non-existent')
      expect(posts).toHaveLength(0)
    })
  })

  describe('getPostsByTag', () => {
    it('should return posts by tag', () => {
      const posts = getPostsByTag('test')
      
      expect(posts).toHaveLength(2)
      expect(posts[0].tags).toContain('test')
    })
  })

  describe('getRelatedPosts', () => {
    it('should return related posts based on category and tags', () => {
      const post1 = mockPostContent
      const post2 = mockPostContent.replace('Test Post', 'Related Post')
        .replace('test-post', 'related-post')
      const post3 = mockPostContent.replace('Test Post', 'Unrelated Post')
        .replace('wellness-tips', 'different-category')
        .replace('tags: [test, blog]', 'tags: [other]')
      
      fs.readdirSync.mockReturnValue(['test-post.mdx', 'related-post.mdx', 'unrelated-post.mdx'])
      fs.readFileSync
        .mockReturnValueOnce(post1)
        .mockReturnValueOnce(post1)
        .mockReturnValueOnce(post2)
        .mockReturnValueOnce(post3)
      
      const related = getRelatedPosts('test-post', 2)
      
      expect(related).toHaveLength(2)
      expect(related[0].slug).toBe('related-post')
    })
  })

  describe('getPaginatedPosts', () => {
    it('should return paginated posts', () => {
      const result = getPaginatedPosts(1, 1)
      
      expect(result.posts).toHaveLength(1)
      expect(result.currentPage).toBe(1)
      expect(result.totalPages).toBe(2)
      expect(result.hasNextPage).toBe(true)
      expect(result.hasPreviousPage).toBe(false)
    })

    it('should handle last page correctly', () => {
      const result = getPaginatedPosts(2, 1)
      
      expect(result.posts).toHaveLength(1)
      expect(result.hasNextPage).toBe(false)
      expect(result.hasPreviousPage).toBe(true)
    })
  })
})