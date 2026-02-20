'use client'

import { useEffect } from 'react'
import { trackViewContent } from '@/components/MetaPixel'

/**
 * Fire Meta Pixel ViewContent event on page mount.
 * Use in warmup / product pages.
 */
export function usePixelViewContent(params: {
  content_name: string
  content_category: string
}) {
  useEffect(() => {
    trackViewContent(params)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
