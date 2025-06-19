import Link from 'next/link'

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
  basePath?: string
}

export default function BlogPagination({
  currentPage,
  totalPages,
  basePath = '/blog',
}: BlogPaginationProps) {
  const getPageUrl = (page: number) => {
    return page === 1 ? basePath : `${basePath}?page=${page}`
  }

  const renderPageNumbers = () => {
    const pages = []
    const maxVisible = 5

    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2))
    let endPage = Math.min(totalPages, startPage + maxVisible - 1)

    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1)
    }

    // First page
    if (startPage > 1) {
      pages.push(
        <Link
          key={1}
          href={getPageUrl(1)}
          className="px-3 py-2 text-sm rounded-lg hover:bg-primary-50 transition-colors"
        >
          1
        </Link>
      )
      if (startPage > 2) {
        pages.push(
          <span key="dots1" className="px-2">
            ...
          </span>
        )
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Link
          key={i}
          href={getPageUrl(i)}
          className={`px-3 py-2 text-sm rounded-lg transition-colors ${
            i === currentPage
              ? 'bg-primary-600 text-white'
              : 'hover:bg-primary-50'
          }`}
        >
          {i}
        </Link>
      )
    }

    // Last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="dots2" className="px-2">
            ...
          </span>
        )
      }
      pages.push(
        <Link
          key={totalPages}
          href={getPageUrl(totalPages)}
          className="px-3 py-2 text-sm rounded-lg hover:bg-primary-50 transition-colors"
        >
          {totalPages}
        </Link>
      )
    }

    return pages
  }

  if (totalPages <= 1) return null

  return (
    <nav className="flex items-center justify-center gap-2 mt-12">
      {/* Previous button */}
      {currentPage > 1 ? (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="px-4 py-2 text-sm rounded-lg hover:bg-primary-50 transition-colors flex items-center gap-1"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Previous
        </Link>
      ) : (
        <span className="px-4 py-2 text-sm text-neutral-400 flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Previous
        </span>
      )}

      {/* Page numbers */}
      <div className="flex items-center gap-1">{renderPageNumbers()}</div>

      {/* Next button */}
      {currentPage < totalPages ? (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="px-4 py-2 text-sm rounded-lg hover:bg-primary-50 transition-colors flex items-center gap-1"
        >
          Next
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      ) : (
        <span className="px-4 py-2 text-sm text-neutral-400 flex items-center gap-1">
          Next
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      )}
    </nav>
  )
}
